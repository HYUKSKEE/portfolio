# Side Projects

## MyFC

축구·풋살 팀을 위한 모바일 앱. 매치 등록, 선수/용병 관리, 쿼터별 스코어 입력, 홈 대시보드(리더보드·매치·MOM) 제공. GitHub: https://github.com/HYUKSKEE/MYFC_APP

### 기술 스택

React Native 0.81 + Expo SDK 54, Expo Router 6, TypeScript, TanStack React Query, Zustand, React Native Paper, NativeWind, Supabase(Storage·Edge Functions). REST API는 Hyukskee World API(FastAPI)와 통신.

### 주요 기능

- **teams / players** — 팀 CRUD, 정식 선수 로스터·등번호 관리
- **matches-registration** — 매치 3단계 등록(종목 → 일정 → 상대팀)
- **matches-participants** — 선수 선발, 용병 관리, 쿼터별 골·도움 기록
- **home** — 리더보드(v_leaderboard_player_stats), 예정 매치, MOM
- **auth** — 전화번호 로그인, Google·Kakao·Naver·Apple 소셜 로그인

### 아키텍처

- `app/` — Expo Router, 라우팅만 (얇게 유지)
- `src/features/<domain>/` — api, hooks, components, screens, types (Feature-Sliced)
- 서버 상태: React Query / 전역: Zustand(팀 선택·토큰만)
- Supabase: teams, players, matches, match_participants, match_goal_events, match_mom, team_members + Storage

### 화면 흐름

로그인 → 팀 선택/생성 → 홈 → 매치 목록·등록·스코어 입력·팀원 관리

---

## Hyukskee World API

MyFC(Expo) 앱의 API 서버. 축구·풋살 팀의 경기 기록, 선수 관리, 득점·도움·MOM 통계를 제공하는 FastAPI 백엔드. GitHub: https://github.com/HYUKSKEE/hyuskskee_word

### 기술 스택

Python 3.12+, FastAPI, Uvicorn, SQLAlchemy 2.x, MySQL 8.0, JWT(PyJWT), bcrypt, Docker, AWS S3(boto3)

### 주요 기능

- **인증** — 전화번호 회원가입/로그인, Google·Kakao·Naver·Apple 소셜 로그인, JWT(HS256)
- **팀/선수** — 팀 CRUD, 로고 업로드, owner/manager/member 권한, 선수 로스터 CRUD
- **경기/스코어** — 경기 등록(축구/풋살), 쿼터별 골·도움, 용병 참가, MOM 선정
- **홈** — 최근 경기, MOM 기록, 리더보드(득점·도움·MOM·출전)

### 아키텍처

- **Client** → MyFC App(Expo) → HTTPS → FastAPI(Uvicorn)
- **api/** — HTTP 라우터 (auth, team, player, match, score, home)
- **services/** — 비즈니스 로직, DB 트랜잭션, Storage(local/S3)
- **models/ + schemas/** — SQLAlchemy ORM, Pydantic 입출력 검증
- 요청 흐름: Client → API Router → Service → MySQL / Storage

### 주요 API

- `/auth` — signup, login, `{provider}/login`
- `/teams`, `/teams/{id}/players` — 팀·선수 CRUD
- `/teams/{id}/matches`, `/matches/{id}/score` — 경기·스코어
- `/teams/{id}/home`, `/leaderboard` — 홈·리더보드

### 배포

docker-compose(로컬 MySQL + API), AWS EC2 + RDS + S3(DEPLOYMENT.md)

---

## AI Portfolio

경력·프로젝트 탐색과 AI Q&A를 하나의 Next.js 앱으로 통합한 개인 포트폴리오입니다. 2026년 3월, 기획부터 개발·배포까지 직접 진행했습니다.

### 프로젝트 배경

정적인 이력서 페이지만으로는 채용 담당자나 협업 제안자가 궁금한 점을 바로 물어보기 어렵다고 판단했습니다. 좌측 섹션형 포트폴리오 + 우측 RAG 기반 AI 챗봇 구조로 설계했습니다.

### 아키텍처

**Presentation Layer** — Hero, Career, Projects 등 섹션형 UI와 ChatWidget(데스크톱 패널 / 모바일 Sheet). Career·Project는 홈에서 카드 요약만 보여주고 상세는 `/career/[slug]`, `/project/[slug]` 페이지로 분리합니다.

**API Layer** — `/api/chat` Route Handler에서 RAG 컨텍스트 검색 후 gpt-4o-mini 스트리밍 응답. Vercel AI SDK의 streamText + useChat 조합.

**Data Layer** — `data/profile.ts`는 UI용 구조화 데이터, `content/*.md`는 챗봇용 서술형 지식 베이스. `npm run ingest`로 embeddings.json 생성.

**RAG Pipeline** — text-embedding-3-small 쿼리 임베딩 → 코사인 유사도 검색 → 상위 4청크를 system prompt 주입. 별도 벡터 DB 없이 동작.

### 진행 과정

1. **요구사항 & IA 설계** — 섹션 범위 정의, profile/content 이중 데이터 구조, 홈 요약 + 상세 페이지 분리
2. **포트폴리오 UI** — shadcn/ui 섹션 컴포넌트, 반응형 ChatWidget, Career·Project 자세히 보기 UX
3. **AI & RAG** — ingest 스크립트, retrieveContext, 스트리밍 챗 UI
4. **배포** — Vercel, OPENAI_API_KEY, embeddings.json 커밋 기반 운영

### 기술 스택

Next.js 16 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui, Vercel AI SDK, OpenAI (gpt-4o-mini, text-embedding-3-small), Vercel

### 설계 포인트

- UI 요약 vs 챗봇 지식 이중 데이터 구조
- 벡터 DB 없는 경량 RAG
- 카드 요약 + 상세 페이지 IA
- 스트리밍 AI 응답
- Vercel 원클릭 배포

### 링크

- 배포: https://portfolio-hyukskees-projects.vercel.app/
- GitHub: https://github.com/HYUKSKEE/portfolio
