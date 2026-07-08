/**
 * content/*.md 파일을 읽어 청크로 분할하고, OpenAI 임베딩을 생성해
 * data/embeddings.json 에 저장하는 스크립트입니다.
 *
 * 실행 방법:
 *   1. .env.local 에 OPENAI_API_KEY 를 설정하세요.
 *   2. npm run ingest
 *
 * content/ 폴더의 내용을 수정할 때마다 다시 실행해야
 * 챗봇이 최신 정보를 참고합니다.
 */
import { config } from "dotenv";
import path from "node:path";

// Next.js와 동일하게 .env.local을 우선적으로 읽습니다 (dotenv/config 기본값은 .env만 읽음).
config({ path: path.resolve(process.cwd(), ".env.local") });
config();

import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { embedMany } from "ai";
import { openai } from "@ai-sdk/openai";
import { chunkMarkdown } from "../lib/rag/chunk";
import type { EmbeddedChunk } from "../lib/rag/types";

const CONTENT_DIR = path.join(process.cwd(), "content");
const OUTPUT_FILE = path.join(process.cwd(), "data", "embeddings.json");
const EMBEDDING_MODEL = "text-embedding-3-small";

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    console.error(
      "\n[ingest] OPENAI_API_KEY가 설정되어 있지 않습니다. .env.local 파일을 확인하세요.\n"
    );
    process.exit(1);
  }

  const files = (await readdir(CONTENT_DIR)).filter((f) => f.endsWith(".md"));

  if (files.length === 0) {
    console.warn(`[ingest] ${CONTENT_DIR} 에 .md 파일이 없습니다.`);
  }

  type PendingChunk = { source: string; heading: string; text: string };
  const pending: PendingChunk[] = [];

  for (const file of files) {
    const raw = await readFile(path.join(CONTENT_DIR, file), "utf-8");
    const chunks = chunkMarkdown(raw);
    for (const chunk of chunks) {
      pending.push({ source: file, heading: chunk.heading, text: chunk.text });
    }
  }

  if (pending.length === 0) {
    console.warn("[ingest] 생성할 청크가 없습니다. 빈 임베딩 파일을 저장합니다.");
    await mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
    await writeFile(OUTPUT_FILE, "[]\n", "utf-8");
    return;
  }

  console.log(`[ingest] ${files.length}개 파일에서 ${pending.length}개 청크 생성. 임베딩 요청 중...`);

  const { embeddings } = await embedMany({
    model: openai.embedding(EMBEDDING_MODEL),
    values: pending.map((chunk) => `${chunk.heading}\n${chunk.text}`),
  });

  const result: EmbeddedChunk[] = pending.map((chunk, i) => ({
    id: `${chunk.source}#${i}`,
    source: chunk.source,
    heading: chunk.heading,
    text: chunk.text,
    embedding: embeddings[i],
  }));

  await mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await writeFile(OUTPUT_FILE, JSON.stringify(result, null, 2), "utf-8");

  console.log(`[ingest] 완료: ${result.length}개 청크를 ${OUTPUT_FILE} 에 저장했습니다.`);
}

main().catch((error) => {
  console.error("[ingest] 실패:", error);
  process.exit(1);
});
