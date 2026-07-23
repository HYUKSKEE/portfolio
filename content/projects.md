# Side Projects

## MyFC

축구·풋살 팀을 위한 모바일 앱. 매치 등록, 선수/용병 관리, 쿼터별 스코어 입력, 홈 대시보드(리더보드·매치·MOM) 제공. GitHub: https://github.com/HYUKSKEE/MYFC_APP

### 기술 스택

React Native 0.81 + Expo SDK 54, Expo Router 6, TypeScript, TanStack React Query, Zustand, React Native Paper, NativeWind, Supabase(Storage·Edge Functions). REST API와 통신.

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

## TEAMMAKER (MWFC)

MY WAY FUTSAL CLUB용 팀(조) 편성 웹 앱. 팀원 등록, 드래그 앤 드롭 또는 실력 기반 밸런스 랜덤 편성, 명단 복사·이미지 저장. 배포: https://mwfc-feature.vercel.app

### 기술 스택

React, TypeScript, Vite, styled-components, @dnd-kit, html-to-image, localStorage

### 주요 기능

- **팀원 CRUD** — 이름·실력(하~상) 추가, 카드 인라인 수정·삭제
- **드래그 앤 드롭** — 대기 인원 ↔ 팀 이동, 팀 내 순서 변경
- **밸런스 랜덤 조짜기** — 실력 합·인원 수 균형 자동 배정
- **리스트 복사** — `1팀: 이름, 이름...` 클립보드 복사
- **각 팀별 PNG 저장** — html-to-image로 이미지 다운로드
- **localStorage** — 편성 담당자 단독 사용·결과 공유만 필요하다는 필요성에 따라, 서버·계정 없이 localStorage로 구현

### 설계 의도 (localStorage)

팀 편성은 **조장 한 명**만 하고, 결과는 **복사·PNG**로 채팅에 공유하면 되는 **필요성**에 따라, 서버·계정 없이 localStorage로 구현했습니다. 실시간 협업·DB 동기화가 필요 없어 인프라와 배포 부담을 최소화했습니다.

### 사용 흐름

1. 팀원 이름·실력 추가
2. 팀 개수 설정 → 밸런스 랜덤 또는 DnD로 직접 편성
3. 리스트 복사 또는 팀별 이미지 저장으로 공유

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
