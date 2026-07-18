# 김진혁 | Frontend Engineer

> 지속 가능성과 원인 중심 사고로 복잡한 서비스를 단순하게 만드는 개발자

| 항목 | 내용 |
| --- | --- |
| 포트폴리오 | https://portfolio-hyukskees-projects.vercel.app/ |
| 이메일 | gin280833@gmail.com |
| 전화 | 010-4044-0728 |
| GitHub | https://github.com/HYUKSKEE |

---

## About

안녕하세요. 프론트엔드 엔지니어 김진혁입니다.

저는 단순히 기능을 구현하는 개발자가 아니라, 서비스가 오랫동안 유지될 수 있는 구조를 설계하고 개선하는 개발자가 되고자 합니다.

### 개발 전 고민하는 세 가지

- 기능 간 의존성은 어떻게 연결되어 있는가?
- 데이터는 어떤 흐름으로 움직이는가?
- 지금 작성한 코드가 1년 뒤에도 수정하기 쉬운가?

문제가 발생했을 때는 증상만 해결하기보다 원인을 찾으려고 노력합니다. 단기적인 해결책보다 장기적으로 유지 가능한 해결 방법을 선택하며, 제한된 일정 안에서 가장 큰 효과를 낼 수 있는 작업의 우선순위를 고민합니다.

### 핵심 역량

**원인 중심 사고**
버그나 장애가 발생했을 때 증상을 해결하는 데 그치지 않고, 근본적인 원인을 분석하여 재발하지 않는 구조를 만드는 것을 중요하게 생각합니다.

**지속 가능한 구조 설계**
기능 구현보다 유지보수성을 우선합니다. 새로운 개발자가 합류하더라도 빠르게 이해하고 수정할 수 있는 구조를 선호합니다.

**성과 밀도가 높은 개발**
제한된 일정 안에서 가장 큰 임팩트를 낼 수 있는 개선 작업을 우선적으로 수행합니다.

---

## Skills

### Frontend

React · Next.js · Angular · TypeScript · JavaScript · HTML · CSS · SCSS · TailwindCSS · MUI · styled-components

### State & Data Management

React Query · Recoil · Context API

### Architecture & Performance

Component Design · Domain Driven Structure · Rendering Optimization · Code Splitting · Lazy Loading · Memoization · Build Optimization

### Collaboration

Git · GitHub · Fork · Jira · Slack · Notion · Figma

---

## Career

### (주)크래프타

**Frontend Engineer** · 2024.03 - 2026.03

**기술 스택:** Next.js · TypeScript · styled-components · React Query

#### 담당 서비스

| 서비스 | 설명 | 세부 |
| --- | --- | --- |
| TMM (Take My Money) | 통합 커머스 플랫폼 | 상품 판매, 행사 티켓 판매, 해외 배송 대행 |
| TMMBOX | 해외 배송 대행 서비스 | — |
| TMM Event | 온·오프라인 행사 주문·결제 서비스 | — |

#### 담당 업무

- 주문/결제 도메인 개발 및 유지보수
- 레거시 코드 리팩토링
- 프론트엔드 아키텍처 개선
- 성능 최적화
- 빌드 최적화

#### 주요 성과

**1. 주문·결제 로직 리팩토링**

- **문제:** 동일한 결제 로직이 여러 페이지에 중복 구현. 신규 기능 추가 시 여러 페이지를 동시에 수정해야 했고, 버그 발생 시 영향 범위 파악이 어려웠음
- **해결:** 공통 컴포넌트 및 유틸 함수 분리, 주문/결제 비즈니스 로직 재설계, 책임 기반 구조로 리팩토링
- **결과:** 신규 기능 개발 시 수정 범위 감소, 디버깅 시간 단축, 유지보수성 향상

**2. React Query + Suspense 도입**

- **문제:** 동일 API를 여러 컴포넌트에서 반복 호출하여 불필요한 네트워크 요청과 렌더링 발생
- **해결:** React Query 도입, Query Key 표준화, 캐싱 전략 수립, Suspense 적용
- **결과:** 중복 API 요청 감소, 불필요한 렌더링 감소, Next.js 서버 CPU 사용률 약 20% 감소

**3. 빌드 최적화**

- **문제:** 빌드 결과물 크기 지속 증가, 배포 시간 증가
- **해결:** 불필요한 패키지 제거, 캐시 전략 개선, 빌드 프로세스 분석 및 최적화
- **결과:** 빌드 결과물 용량 약 60% 감소, 배포 시간 단축, CI/CD 효율 향상

#### 개선 경험 — 결제 시스템 구조 개선

**기존 구조**

```
PaymentPage
├── Product
├── Coupon
├── Delivery
├── Point
└── PG

각 화면에서 결제 계산 로직 수행
```

**개선 구조**

```
PaymentPage
└── PaymentService
    ├── CouponCalculator
    ├── PointCalculator
    ├── DeliveryCalculator
    └── OrderValidator
```

**개선 효과:** 책임 분리 · 재사용성 증가 · 테스트 용이성 향상 · 디버깅 범위 축소 · 신규 기능 추가 비용 감소

---

### 빅인사이트 주식회사

**Frontend Engineer** · 2023.03 - 2023.11

**기술 스택:** Angular · TypeScript · SCSS · MUI · TailwindCSS

#### 담당 업무

- Admin 플랫폼 유지보수
- 디지털 콘텐츠 커머스 플랫폼 개발
- 기획부터 출시까지 Full-cycle 개발 참여

#### 주요 성과

**1. Admin 플랫폼 개선**

- **해결:** 중복 기능 및 불필요한 라이브러리 제거, 컴포넌트 표준화, UML 기반 기능 설계
- **결과:** 유지보수성 향상, 개발 생산성 향상

**2. 디지털 콘텐츠 커머스 플랫폼 개발**

- **해결:** Use Case 작성, User Flow 설계, 주문/결제 비즈니스 로직 설계, 디자인 시스템 구축
- **결과:** 타이포그래피 및 UI 일관성 확보, 재사용 가능한 컴포넌트 구조 구축

---

## Side Projects

### MyFC

**기획 및 앱 개발** · 진행 중

> 축구·풋살 팀을 위한 매치·선수·스코어 관리 모바일 앱

**GitHub:** https://github.com/HYUKSKEE/MYFC_APP

동호회·친선 팀이 경기 일정, 선수 로스터, 쿼터별 스코어, MOM까지 한곳에서 관리할 수 있도록 만든 앱입니다. 매치 3단계 등록, 선수/용병 선발, 쿼터별 골·도움 기록, 홈 대시보드(리더보드·예정 매치·MOM)를 제공합니다.

**기술 스택:** React Native · Expo · TypeScript · TanStack Query · Zustand · Supabase · NativeWind

#### 구조 설계

| 레이어 | 설명 |
| --- | --- |
| Expo Router + Feature Modules | `app/`은 라우팅만, `src/features/`에 도메인별 api/hooks/screens 배치 |
| 상태 & API | React Query(서버 상태) + Zustand(팀·토큰), Hyukskee World API REST 통신 |
| 핵심 도메인 | teams, players, matches-registration, matches-participants, home |
| 인증 | 전화번호+비밀번호(API), Google·Kakao·Naver·Apple 소셜 로그인 |

#### 진행 과정

1. **앱 골격 & 아키텍처** — Expo SDK 54, Feature-Sliced 구조, Provider 구성
2. **핵심 기능 구현** — 팀·선수·매치 3단계 등록, 쿼터 스코어, 홈 대시보드
3. **Supabase & 배포** — DB 마이그레이션, Storage, EAS Build

**설계 포인트:** Feature-Sliced Design · React Query + Zustand · 쿼터별 스코어 트래킹 · Supabase + REST API · Expo Development Build

---

### Hyukskee World API

**백엔드 개발** · 진행 중

> MyFC 앱의 경기·선수·스코어·통계를 제공하는 FastAPI 서버

**GitHub:** https://github.com/HYUKSKEE/hyuskskee_word

축구·풋살 팀의 경기 기록, 선수 로스터, 쿼터별 골·도움, MOM, 리더보드를 REST API로 제공합니다. api → services → DB/Storage 3계층 구조.

**기술 스택:** Python · FastAPI · SQLAlchemy · MySQL · JWT · Docker · AWS

#### 구조 설계

| 레이어 | 설명 |
| --- | --- |
| API Layer | auth, team, player, match, score, home REST 엔드포인트 |
| Service Layer | 비즈니스 로직, 소셜 로그인, 리더보드 집계 |
| Data Layer | SQLAlchemy ORM + MySQL (users → teams → matches → ...) |
| Storage | 팀 로고·프로필·경기장·MOM 이미지 (local / S3) |

#### 진행 과정

1. **도메인 & API 설계** — Pydantic/SQLAlchemy, Swagger UI, 커스텀 예외 처리
2. **핵심 API 구현** — JWT·소셜 로그인, 팀/선수/경기/스코어, 리더보드
3. **배포 & 운영** — docker-compose, AWS EC2 + RDS + S3

**설계 포인트:** FastAPI 3-Layer · JWT + 소셜 로그인 · MySQL 도메인 모델 · local/S3 Storage · Docker & AWS

---

### TEAMMAKER (MWFC)

**기획 및 개발**

> MY WAY FUTSAL CLUB용 팀(조) 편성 웹 앱

**배포:** https://mwfc-feature.vercel.app

풋살 동호회 매 경기 팀 나누기를 빠르게 처리하는 웹 앱. 편성 담당자 단독 사용·결과 공유만 필요하다는 **필요성**에 따라, 서버·계정 없이 localStorage로 구현.

**기술 스택:** React · TypeScript · Vite · styled-components · @dnd-kit · html-to-image

#### 주요 기능

- 팀원 CRUD (이름·실력 하~상, 인라인 수정)
- @dnd-kit 드래그 앤 드롭 편성
- 실력 합·인원 수 기반 밸런스 랜덤 조짜기
- 리스트 복사, 팀별 PNG 이미지 저장

#### localStorage를 선택한 이유

팀 편성은 **조장 한 명**만 하고 결과는 **복사·이미지 공유**로 충분하다는 **필요성**에 따라, 서버·계정 없이 localStorage로 구현했습니다.

**설계 포인트:** 드래그 앤 드롭 편성 · 실력 기반 밸런스 · PNG·텍스트 공유 · localStorage(로컬 단일 사용자) · Vite + React

---

### AI Portfolio

**기획 및 개발** · 2026.03

> 경력·프로젝트 탐색과 AI Q&A를 하나의 Next.js 앱으로 통합한 개인 포트폴리오

**배포:** https://portfolio-hyukskees-projects.vercel.app/
**GitHub:** https://github.com/HYUKSKEE/portfolio

좌측 섹션형 포트폴리오 + 우측 RAG 기반 AI 챗봇. UI용 `profile.ts`와 챗봇용 `content/` 이중 데이터 구조.

**기술 스택:** Next.js 16 · TypeScript · Tailwind CSS · shadcn/ui · Vercel AI SDK · OpenAI · Vercel

#### 구조 설계

| 레이어 | 설명 |
| --- | --- |
| Presentation | 섹션형 UI + ChatWidget, 카드 요약 + 상세 페이지 IA |
| API Layer | `/api/chat` RAG + gpt-4o-mini 스트리밍 |
| Data Layer | profile.ts(UI) + content/*.md(챗봇 지식) + embeddings.json |
| RAG Pipeline | text-embedding-3-small + 코사인 유사도, 벡터 DB 없이 경량 구현 |

#### 진행 과정

1. **요구사항 & IA 설계** — profile/content 이중 구조, 홈 요약 + 상세 페이지
2. **포트폴리오 UI** — shadcn/ui, Career·Project 자세히 보기, 반응형 ChatWidget
3. **AI & RAG** — ingest 스크립트, retrieveContext, 스트리밍 챗 UI
4. **배포** — Vercel, OPENAI_API_KEY, embeddings.json 커밋 기반 운영

**설계 포인트:** UI/챗봇 이중 데이터 · 경량 RAG · 카드+상세 IA · 스트리밍 AI · Vercel 배포

---

## Education

### Wecode Bootcamp

2022.06 - 2022.10

- Agile 기반 프로젝트 진행
- 기업 협업 프로그램 참여
- AWS 배포 경험
- 현업 개발자 코드 리뷰 경험

### Sparta Coding Club

2022.01 - 2022.03

- 웹 개발 종합반 수료
- 팀 프로젝트 참여
- AWS EC2 배포 경험
- Flask 및 MongoDB 학습

### 순천대학교 정보통신공학과

- 데이터베이스 · 네트워크 · 분산 시스템 · C++ · Java · 웹 프로그래밍

---

## Interest

최근에는 **AI Native Engineering**에 관심을 가지고 있습니다. Cursor, Claude, ChatGPT 등의 AI 도구를 활용하여 개발 생산성을 높이는 방법과, AI를 활용한 코드 리뷰 및 설계 자동화에 대해 지속적으로 실험하고 있습니다.

---

## FAQ

### 지금 이직/입사 제안을 받을 수 있나요?

네, 좋은 기회가 있다면 언제든 환영합니다. 이메일이나 전화로 연락 주시면 빠르게 답변드리겠습니다.

### 가장 자신 있는 기술은 무엇인가요?

React와 Next.js, TypeScript 기반의 프론트엔드 아키텍처 설계, 그리고 원인 중심의 문제 해결과 성능/빌드 최적화입니다.

### 협업 스타일은 어떤가요?

기능 구현보다 유지보수성과 구조적 지속 가능성을 우선하며, 문서화와 커뮤니케이션을 중요하게 생각합니다. 문제가 생기면 증상이 아니라 원인을 먼저 분석합니다.

### 연락은 어떻게 하나요?

이메일(gin280833@gmail.com), 전화(010-4044-0728), GitHub(https://github.com/HYUKSKEE) 중 편한 방법으로 연락해주세요.
