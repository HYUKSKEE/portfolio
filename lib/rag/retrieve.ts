import { embed, cosineSimilarity } from "ai";
import { openai } from "@ai-sdk/openai";
import embeddingsData from "@/data/embeddings.json";
import type { EmbeddedChunk } from "./types";

const EMBEDDING_MODEL = "text-embedding-3-small";
const store = embeddingsData as EmbeddedChunk[];

export type RetrievedChunk = EmbeddedChunk & { score: number };

/**
 * 사용자 질문과 가장 관련 있는 콘텐츠 청크를 찾아 반환합니다.
 * data/embeddings.json 이 비어있으면(아직 `npm run ingest` 를 실행하지 않은 경우)
 * 빈 배열을 반환합니다.
 */
export async function retrieveContext(
  query: string,
  topK = 4,
  minScore = 0.3
): Promise<RetrievedChunk[]> {
  if (store.length === 0) return [];

  const { embedding: queryEmbedding } = await embed({
    model: openai.embedding(EMBEDDING_MODEL),
    value: query,
  });

  const scored = store.map((chunk) => ({
    ...chunk,
    score: cosineSimilarity(queryEmbedding, chunk.embedding),
  }));

  return scored
    .filter((chunk) => chunk.score >= minScore)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}
