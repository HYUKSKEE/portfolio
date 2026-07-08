# 포트폴리오 + AI 챗봇

우측에 "나에 대해 질문할 수 있는 AI 챗봇"이 있는 개인 포트폴리오입니다.

## 기술 스택

| 영역 | 선택 | 이유 |
| --- | --- | --- |
| 프레임워크 | [Next.js 16](https://nextjs.org) (App Router, Turbopack) | 하나의 프로젝트로 정적 포트폴리오 + `/api/chat` API Route까지 처리, Vercel과 궁합이 가장 좋음 |
| 언어 | TypeScript | 안정성 |
| 스타일 | Tailwind CSS v4 + [shadcn/ui](https://ui.shadcn.com) (base-ui 기반) | 빠른 개발, 접근성 있는 컴포넌트 |
| 애니메이션 | Framer Motion | 은은한 등장 애니메이션 |
| 폰트 / 컬러 | [Pretendard](https://github.com/orioncactus/pretendard) (Variable, `next/font/local`) + 화이트 배경 · 블랙 텍스트 · `#007AFF` 포인트 컬러 | 가독성 높은 한글 폰트, 절제된 흑백 톤에 포인트 컬러를 최소한으로 사용 |
| AI | [Vercel AI SDK](https://ai-sdk.dev) (`ai`, `@ai-sdk/react`, `@ai-sdk/openai`) + OpenAI (`gpt-4o-mini`) | 스트리밍 응답을 위한 표준 SDK, `useChat` 훅으로 프론트 구현이 매우 간단함 |
| 지식 검색 (RAG) | 자체 구현 임베딩 검색 (OpenAI `text-embedding-3-small` + 코사인 유사도) | 별도 벡터 DB 없이 `content/*.md` 기반으로 가볍게 동작. 문서량이 많아지면 Upstash Vector 등으로 교체 가능 |
| 배포 | Vercel | Next.js와 100% 호환, 무료 티어로 충분 |

## 폴더 구조

```
app/
  page.tsx              # 포트폴리오 메인 페이지 (좌: 콘텐츠, 우: 챗봇)
  api/chat/route.ts     # 챗봇 스트리밍 API (RAG 컨텍스트 주입 + OpenAI 호출)
components/
  portfolio/            # Hero, About, Skills, Experience, CaseStudy, Projects, Education, Interest, Footer
  chat/                 # ChatWidget(반응형 배치), ChatInterface(대화 UI), ChatMessage
  ui/                   # shadcn/ui 컴포넌트
content/                # 챗봇이 참고하는 "지식 베이스" (마크다운, 자유 서술)
data/
  profile.ts            # 포트폴리오 화면에 보여줄 구조화된 데이터 (이름/프로젝트/경력 등)
  embeddings.json        # `npm run ingest` 로 생성되는 content/ 임베딩 결과 (자동 생성)
lib/rag/                # 청크 분할, 임베딩 검색 로직
scripts/ingest.ts       # content/*.md → 임베딩 생성 스크립트
```

## 왜 이렇게 나눴나요?

- **`data/profile.ts`**: 화면에 예쁘게 렌더링할 "요약" 정보 (카드, 뱃지 등 UI용).
- **`content/*.md`**: 챗봇이 답변할 때 참고하는 "상세한 서술형" 정보. 이력서처럼 구체적으로 적을수록 챗봇 답변 품질이 좋아집니다.

현재 `data/profile.ts`와 `content/*.md`에는 김진혁님의 실제 이력서 내용이 반영되어 있습니다. 내용이 바뀌면 두 곳을 함께 업데이트하세요.

## 로컬 개발 시작하기

```bash
npm install
cp .env.example .env.local   # OPENAI_API_KEY 입력
npm run dev
```

<http://localhost:3000> 접속.

### 1. 내 정보로 교체하기

1. `data/profile.ts` — 이름, 직군, 소개, 스킬, 프로젝트, 경력, SNS 링크 수정
2. `content/*.md` — 챗봇 지식 베이스를 본인 이야기로 교체 (자세할수록 좋음)
3. `public/avatar.png` — 프로필 이미지 추가 (없으면 이니셜 아바타로 표시됨)

### 2. 챗봇 지식 베이스 생성 (임베딩)

`content/` 폴더를 수정할 때마다 아래 명령으로 임베딩을 다시 생성해야 챗봇이 최신 내용을 압니다. (현재 `data/embeddings.json`은 비어있는 상태이므로, `OPENAI_API_KEY`를 설정한 뒤 최초 1회 실행이 필요합니다.)

```bash
npm run ingest
```

`data/embeddings.json` 파일이 갱신됩니다. 이 파일은 저장소에 커밋해두면 배포 시 별도 빌드 스텝 없이 바로 사용됩니다.

### 3. 챗봇 동작 확인

우측(데스크톱) 또는 우측 하단 플로팅 버튼(모바일)에서 채팅을 열고 질문해보세요. 답변은 `content/`에서 검색된 내용 + `data/profile.ts` 요약을 근거로 생성됩니다.

## Vercel 배포하기

1. GitHub에 푸시
2. [vercel.com/new](https://vercel.com/new)에서 저장소 Import
3. Environment Variables에 `OPENAI_API_KEY` 추가
4. Deploy

배포 후 `content/`를 수정하면: 로컬에서 `npm run ingest` 실행 → `data/embeddings.json` 커밋 → 다시 push 하면 자동 재배포됩니다.

## 다른 AI 제공자로 바꾸고 싶다면

`@ai-sdk/openai` 대신 `@ai-sdk/anthropic`, `@ai-sdk/google` 등으로 교체하고, `app/api/chat/route.ts`와 `scripts/ingest.ts`의 모델 생성 부분만 바꾸면 됩니다. Vercel AI SDK는 제공자별로 동일한 인터페이스(`streamText`, `embed`)를 제공합니다.
