import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { retrieveContext } from "@/lib/rag/retrieve";
import { profile } from "@/data/profile";

export const maxDuration = 30;

function getLastUserText(messages: UIMessage[]): string {
  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
  if (!lastUserMessage) return "";
  return lastUserMessage.parts
    .map((part) => (part.type === "text" ? part.text : ""))
    .filter(Boolean)
    .join("\n");
}

function buildSystemPrompt(context: { heading: string; text: string }[]) {
  const contextBlock =
    context.length > 0
      ? context
          .map((c, i) => `[참고 ${i + 1} - ${c.heading}]\n${c.text}`)
          .join("\n\n")
      : "(관련된 참고 정보를 찾지 못했습니다. 아래 프로필 요약만 참고하세요.)";

  return `당신은 "${profile.name}"님의 포트폴리오 웹사이트에 방문한 사람들의 질문에 답하는 AI 어시스턴트입니다.
${profile.name}님 본인인 척 1인칭으로 이야기하지 말고, "${profile.name}님을 대신해 안내해드리는 AI 어시스턴트"라는 입장을 유지하세요.

# 답변 규칙
- 아래 "참고 정보"와 프로필 요약에 근거해서만 답변하세요. 근거가 없는 내용은 추측해서 답하지 말고, 모른다고 솔직히 말하고 이메일(${profile.email})로 문의하도록 안내하세요.
- 친절하고 간결하게, 하지만 신뢰감 있는 톤으로 답변하세요.
- 사용자가 사용한 언어(한국어/영어 등)로 답변하세요.
- 채용/협업 제안처럼 중요한 문의는 이메일로 연락하도록 안내하세요.
- 마크다운을 사용해 가독성 있게 답변해도 좋습니다 (목록, 굵은 글씨 등).

# 프로필 요약
- 이름: ${profile.name}
- 직군: ${profile.role}
- 한 줄 소개: ${profile.tagline}
- 이메일: ${profile.email}
- 전화번호: ${profile.phone}
- GitHub: ${profile.links.github}

# 참고 정보 (질문과 관련해 검색된 내용)
${contextBlock}`;
}

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const query = getLastUserText(messages);
  const context = query ? await retrieveContext(query) : [];

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system: buildSystemPrompt(context),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
