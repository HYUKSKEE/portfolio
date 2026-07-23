export const profile = {
  siteUrl: "https://portfolio-hyukskees-projects.vercel.app/",
  name: "김진혁",
  role: "Frontend Engineer",
  tagline: "지속 가능성과 원인 중심 사고로 복잡한 서비스를 단순하게 만드는 개발자",
  email: "gin280833@gmail.com",
  phone: "010-4044-0728",
  avatarUrl: "/assets/frofile_image.jpeg",
  links: {
    github: "https://github.com/HYUKSKEE",
  },

  about: {
    paragraphs: [
      "안녕하세요. 프론트엔드 엔지니어 김진혁입니다.",
      "저는 단순히 기능을 구현하는 개발자가 아니라, 서비스가 오랫동안 유지될 수 있는 구조를 설계하고 개선하는 개발자가 되고자 합니다.",
    ],
    questions: [
      "기능 간 의존성은 어떻게 연결되어 있는가?",
      "데이터는 어떤 흐름으로 움직이는가?",
      "지금 작성한 코드가 1년 뒤에도 수정하기 쉬운가?",
    ],
    closing:
      "문제가 발생했을 때는 증상만 해결하기보다 원인을 찾으려고 노력합니다. 단기적인 해결책보다 장기적으로 유지 가능한 해결 방법을 선택하며, 제한된 일정 안에서 가장 큰 효과를 낼 수 있는 작업의 우선순위를 고민합니다.",
  },

  coreCompetencies: [
    {
      title: "원인 중심 사고",
      description:
        "버그나 장애가 발생했을 때 증상을 해결하는 데 그치지 않고, 근본적인 원인을 분석하여 재발하지 않는 구조를 만드는 것을 중요하게 생각합니다.",
    },
    {
      title: "지속 가능한 구조 설계",
      description:
        "기능 구현보다 유지보수성을 우선합니다. 새로운 개발자가 합류하더라도 빠르게 이해하고 수정할 수 있는 구조를 선호합니다.",
    },
    {
      title: "성과 밀도가 높은 개발",
      description:
        "제한된 일정 안에서 가장 큰 임팩트를 낼 수 있는 개선 작업을 우선적으로 수행합니다.",
    },
  ],

  skills: [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "Angular",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "SCSS",
        "TailwindCSS",
        "MUI",
        "styled-components",
      ],
    },
    {
      category: "State & Data Management",
      items: ["React Query", "Recoil", "Context API"],
    },
    {
      category: "Architecture & Performance",
      items: [
        "Component Design",
        "Domain Driven Structure",
        "Rendering Optimization",
        "Code Splitting",
        "Lazy Loading",
        "Memoization",
        "Build Optimization",
      ],
    },
    {
      category: "Collaboration",
      items: ["Git", "GitHub", "Fork", "Jira", "Slack", "Notion", "Figma"],
    },
  ],

  experience: [
    {
      slug: "crafta",
      company: "(주)크래프타",
      role: "Frontend Engineer",
      period: "2024.03 - 2026.03",
      stack: ["Next.js", "TypeScript", "styled-components", "React Query"],
      services: [
        {
          name: "TMM (Take My Money)",
          description: "통합 커머스 플랫폼",
          details: ["상품 판매", "행사 티켓 판매", "해외 배송 대행"],
        },
        { name: "TMMBOX", description: "해외 배송 대행 서비스", details: [] },
        {
          name: "TMM Event",
          description: "온·오프라인 행사 주문·결제 서비스",
          details: [],
        },
      ],
      duties: [
        "주문/결제 도메인 개발 및 유지보수",
        "레거시 코드 리팩토링",
        "프론트엔드 아키텍처 개선",
        "성능 최적화",
        "빌드 최적화",
      ],
      achievements: [
        {
          title: "주문·결제 로직 리팩토링",
          problem:
            "서비스 초기에 작성된 코드로 인해 동일한 결제 로직이 여러 페이지에 중복 구현되어 있었습니다. 신규 기능 추가 시 여러 페이지를 동시에 수정해야 했고, 버그 발생 시 영향 범위를 파악하기 어려웠습니다.",
          solution: [
            "공통 컴포넌트 및 유틸 함수 분리",
            "주문/결제 비즈니스 로직 재설계",
            "책임 기반 구조로 리팩토링",
          ],
          result: [
            "신규 기능 개발 시 수정 범위 감소",
            "디버깅 시간 단축",
            "유지보수성 향상",
          ],
        },
        {
          title: "React Query + Suspense 도입",
          problem:
            "동일한 API를 여러 컴포넌트에서 반복 호출하여 불필요한 네트워크 요청과 렌더링이 발생했습니다.",
          solution: [
            "React Query 도입",
            "Query Key 표준화",
            "캐싱 전략 수립",
            "Suspense 적용",
          ],
          result: [
            "중복 API 요청 감소",
            "불필요한 렌더링 감소",
            "Next.js 서버 CPU 사용률 약 20% 감소",
          ],
        },
        {
          title: "빌드 최적화",
          problem:
            "빌드 결과물의 크기가 지속적으로 증가하고 배포 시간이 길어지고 있었습니다.",
          solution: [
            "불필요한 패키지 제거",
            "캐시 전략 개선",
            "빌드 프로세스 분석 및 최적화",
          ],
          result: [
            "빌드 결과물 용량 약 60% 감소",
            "배포 시간 단축",
            "CI/CD 효율 향상",
          ],
        },
      ],
      improvements: [
        {
          title: "결제 시스템 구조 개선",
          before: `PaymentPage
├── Product
├── Coupon
├── Delivery
├── Point
└── PG

각 화면에서 결제 계산 로직 수행`,
          after: `PaymentPage
└── PaymentService
    ├── CouponCalculator
    ├── PointCalculator
    ├── DeliveryCalculator
    └── OrderValidator`,
          effects: [
            "책임 분리",
            "재사용성 증가",
            "테스트 용이성 향상",
            "디버깅 범위 축소",
            "신규 기능 추가 비용 감소",
          ],
        },
      ],
    },
    {
      slug: "biginsight",
      company: "빅인사이트 주식회사",
      role: "Frontend Engineer",
      period: "2023.03 - 2023.11",
      stack: ["Angular", "TypeScript", "SCSS", "MUI", "TailwindCSS"],
      services: [],
      duties: [
        "Admin 플랫폼 유지보수",
        "디지털 콘텐츠 커머스 플랫폼 개발",
        "기획부터 출시까지 Full-cycle 개발 참여",
      ],
      achievements: [
        {
          title: "Admin 플랫폼 개선",
          problem: "",
          solution: [
            "중복 기능 및 불필요한 라이브러리 제거",
            "컴포넌트 표준화",
            "UML 기반 기능 설계",
          ],
          result: ["유지보수성 향상", "개발 생산성 향상"],
        },
        {
          title: "디지털 콘텐츠 커머스 플랫폼 개발",
          problem: "",
          solution: [
            "Use Case 작성",
            "User Flow 설계",
            "주문/결제 비즈니스 로직 설계",
            "디자인 시스템 구축",
          ],
          result: [
            "타이포그래피 및 UI 일관성 확보",
            "재사용 가능한 컴포넌트 구조 구축",
          ],
        },
      ],
      improvements: [],
    },
  ],

  projects: [
    {
      slug: "myfc-app",
      title: "MyFC",
      period: "진행 중",
      role: "기획 및 앱 개발",
      description:
        "축구·풋살 팀을 위한 매치·선수·스코어 관리 모바일 앱",
      overview:
        "동호회·친선 팀이 경기 일정, 선수 로스터, 쿼터별 스코어, MOM까지 한곳에서 관리할 수 있도록 만든 앱입니다. 매치 3단계 등록, 선수/용병 선발, 쿼터별 골·도움 기록, 홈 대시보드(리더보드·예정 매치·MOM)를 제공합니다. Expo Router는 라우팅만 담당하고, 도메인 로직은 Feature-Sliced 구조로 분리했습니다.",
      stack: [
        "React Native",
        "Expo",
        "TypeScript",
        "TanStack Query",
        "Zustand",
        "Supabase",
        "NativeWind",
      ],
      architecture: [
        {
          title: "Expo Router + Feature Modules",
          description:
            "`app/`은 라우팅만, `src/features/`에 auth·home·teams·players·matches 등 도메인별 api/hooks/screens 배치. Container/Presentational 패턴으로 화면과 데이터 fetch를 분리합니다.",
        },
        {
          title: "상태 & API",
          description:
            "서버 상태는 React Query, 팀 선택·인증 토큰 등 cross-screen 상태만 Zustand. REST API(http-client)와 통신하고, Supabase는 Storage·매치 공유 Edge Function에 활용합니다.",
        },
        {
          title: "핵심 도메인",
          description:
            "teams(팀 CRUD), players(로스터), matches-registration(3단계 매치 등록), matches-participants(선발·용병·쿼터 스코어), home(리더보드·MOM·예정 매치).",
        },
        {
          title: "인증",
          description:
            "전화번호+비밀번호는 REST API(/auth/login, /auth/signup), Google·Kakao·Naver·Apple은 네이티브 소셜 로그인(Development Build).",
        },
      ],
      phases: [
        {
          title: "앱 골격 & 아키텍처",
          description: "Expo 기반 프로젝트 셋업과 Feature-Sliced 구조를 먼저 잡았습니다.",
          items: [
            "Expo SDK 54 + Expo Router 6 셋업, Feature-Sliced 폴더 구조",
            "React Query + Zustand + Paper 테마 Provider",
            "pnpm 기반 monorepo-style feature 모듈",
          ],
        },
        {
          title: "핵심 기능 구현",
          description: "팀·선수·매치·스코어 도메인을 feature 모듈 단위로 구현했습니다.",
          items: [
            "팀 생성·선택, 선수 CRUD, 매치 3단계 등록(종목→일정→상대팀)",
            "선수 선발·용병 관리, 쿼터별 골/도움 스코어 입력",
            "홈 대시보드: 리더보드, 예정 매치 공유, MOM",
          ],
        },
        {
          title: "Supabase & 배포",
          description: "DB·Storage·Edge Function과 EAS Build로 실기기 테스트까지 연결했습니다.",
          items: [
            "teams·players·matches·match_goal_events 등 DB 마이그레이션",
            "Storage(팀 로고·선수 프로필·경기장·MOM 이미지), RLS",
            "EAS Build / Development Build(iOS·Android 실기기)",
          ],
        },
      ],
      duties: [
        "Expo Router 화면 흐름 및 Feature 모듈(api/hooks/screens) 설계",
        "매치 등록·참가자·쿼터 스코어 도메인 UI/훅 구현",
        "REST API 클라이언트 및 React Query 캐시·mutation 설계",
        "Supabase 마이그레이션, Storage, match-share Edge Function",
        "소셜 로그인(카카오·네이버·Apple) 네이티브 빌드 설정",
      ],
      highlights: [
        "Feature-Sliced Design",
        "React Query + Zustand",
        "쿼터별 스코어 트래킹",
        "Supabase + REST API",
        "Expo Development Build",
      ],
      link: "",
      github: "https://github.com/HYUKSKEE/MYFC_APP",
    },
    {
      slug: "teammaker-mwfc",
      title: "TEAMMAKER (MWFC)",
      period: "",
      role: "기획 및 개발",
      description: "MY WAY FUTSAL CLUB용 팀(조) 편성 웹 앱",
      overview:
        "풋살 동호회에서 매 경기마다 팀을 나누는 과정을 빠르게 처리하기 위해 만든 웹 앱입니다. 팀원을 등록하고 실력 등급(하~상)을 부여한 뒤, 드래그 앤 드롭으로 직접 편성하거나 밸런스 랜덤으로 자동 배정할 수 있습니다. 완성된 명단은 텍스트 복사 또는 팀별 PNG 이미지로 공유합니다. 팀 편성은 조장 한 명만 하고 결과는 채팅 공유로 충분하다는 필요성에 따라, 서버·계정 없이 localStorage로 구현했습니다.",
      stack: [
        "React",
        "TypeScript",
        "Vite",
        "styled-components",
        "@dnd-kit",
        "html-to-image",
      ],
      architecture: [
        {
          title: "UI & 상태",
          description:
            "`App.tsx`에서 팀원·팀 편성 상태를 관리. components/에 팀원 카드, 팀 컬럼, 컨트롤, 내보내기 UI를 분리해 화면별 책임을 나눴습니다.",
        },
        {
          title: "드래그 앤 드롭",
          description:
            "@dnd-kit으로 대기 인원 ↔ 팀 이동, 팀 내 순서 변경을 지원. utils/에 DnD 충돌 감지 및 랜덤 배정 알고리즘을 분리했습니다.",
        },
        {
          title: "밸런스 랜덤 조짜기",
          description:
            "실력 등급(하·중하·중·중상·상) 합과 인원 수를 고르게 맞춰 팀을 자동 배정. constants/에 등급 정의, utils/에 배정 로직.",
        },
        {
          title: "내보내기 & 저장",
          description:
            "리스트 복사·PNG 다운로드로 결과를 바로 공유. 편성 담당자 단독 사용·결과 공유만 필요하다는 필요성에 따라, 서버·계정 없이 localStorage로 새로고침 대응까지 처리했습니다.",
        },
      ],
      phases: [
        {
          title: "핵심 UX 구현",
          description: "팀원 등록과 편성 UI를 먼저 완성했습니다.",
          items: [
            "팀원 CRUD — 이름·실력 인라인 수정",
            "팀 개수 설정 및 팀 컬럼 UI",
            "@dnd-kit 드래그 앤 드롭 편성",
          ],
        },
        {
          title: "밸런스 & 공유",
          description: "자동 배정과 결과 공유 기능을 추가했습니다.",
          items: [
            "실력 합·인원 수 기반 밸런스 랜덤 조짜기",
            "클립보드 리스트 복사, 팀별 PNG 이미지 저장",
            "localStorage 데이터 유지",
          ],
        },
        {
          title: "배포",
          description: "Vercel에 배포해 동호회에서 바로 사용할 수 있게 했습니다.",
          items: [
            "Vite 프로덕션 빌드",
            "OG 이미지(public/mwfc-og.jpg) 설정",
            "https://mwfc-feature.vercel.app 배포",
          ],
        },
      ],
      duties: [
        "팀원·팀 편성 상태 관리 및 컴포넌트 구조 설계",
        "@dnd-kit 기반 드래그 앤 드롭 UX 구현",
        "실력 등급 기반 밸런스 랜덤 배정 알고리즘",
        "html-to-image 팀별 PNG 내보내기, 클립보드 복사",
        "localStorage 영속화 및 Vercel 배포",
      ],
      highlights: [
        "드래그 앤 드롭 편성",
        "실력 기반 밸런스 랜덤",
        "PNG·텍스트 공유",
        "localStorage",
        "Vite + React",
      ],
      link: "https://mwfc-feature.vercel.app",
      github: "",
    },
    {
      slug: "portfolio",
      title: "AI Portfolio",
      period: "2026.03",
      role: "기획 및 개발",
      description:
        "경력·프로젝트 탐색과 AI Q&A를 하나의 Next.js 앱으로 통합한 개인 포트폴리오",
      overview:
        "정적인 이력서 페이지만으로는 방문자가 궁금한 점을 바로 물어보기 어렵다고 판단했습니다. 그래서 좌측에는 섹션형 포트폴리오, 우측에는 RAG 기반 AI 챗봇을 배치해 '읽기'와 '질문하기'를 동시에 지원하는 구조로 설계했습니다. UI에 보여줄 요약 데이터와 챗봇이 참고할 상세 지식을 분리하고, 별도 벡터 DB 없이도 동작하는 가벼운 RAG 파이프라인을 구성하는 것을 목표로 했습니다.",
      stack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Vercel AI SDK",
        "OpenAI",
        "Vercel",
      ],
      architecture: [
        {
          title: "Presentation Layer",
          description:
            "Hero, Career, Projects 등 섹션형 UI와 ChatWidget(데스크톱 패널 / 모바일 Sheet)으로 구성. Career·Project는 홈에서 카드 요약만 보여주고 상세는 별도 페이지로 분리해 스크롤 길이를 줄였습니다.",
        },
        {
          title: "API Layer",
          description:
            "`/api/chat` Route Handler에서 사용자 질문을 받아 RAG 컨텍스트를 검색한 뒤, gpt-4o-mini로 스트리밍 응답을 반환합니다. Vercel AI SDK의 streamText + useChat 조합으로 서버·클라이언트를 일관되게 연결했습니다.",
        },
        {
          title: "Data Layer",
          description:
            "`data/profile.ts`는 카드·뱃지 등 UI 렌더링용 구조화 데이터, `content/*.md`는 챗봇이 참고하는 서술형 지식 베이스입니다. `npm run ingest`로 마크다운을 청크·임베딩해 `data/embeddings.json`에 저장합니다.",
        },
        {
          title: "RAG Pipeline",
          description:
            "질문마다 text-embedding-3-small로 쿼리 임베딩 → embeddings.json과 코사인 유사도 비교 → 상위 4개 청크를 system prompt에 주입. Pinecone 등 외부 DB 없이 소규모 지식 베이스에 적합한 구조입니다.",
        },
      ],
      phases: [
        {
          title: "요구사항 정의 & 정보 구조 설계",
          description:
            "포트폴리오의 목적을 '채용 담당자가 빠르게 이해하고, 세부 질문도 바로 할 수 있는 경험'으로 정의했습니다.",
          items: [
            "섹션별 콘텐츠 범위 결정 (About, Skills, Career, Case Study, Projects 등)",
            "UI용 profile.ts와 챗봇용 content/ 이중 데이터 구조 설계",
            "홈은 요약, 상세는 /career·/project 페이지로 분리하는 IA 수립",
          ],
        },
        {
          title: "포트폴리오 UI 구현",
          description:
            "먼저 정적 콘텐츠를 안정적으로 보여주는 UI를 완성한 뒤 AI 기능을 얹는 순서로 진행했습니다.",
          items: [
            "shadcn/ui + Tailwind로 섹션 컴포넌트 및 반응형 레이아웃 구성",
            "Career·Project 카드 + '자세히 보기' 상세 페이지 패턴 적용",
            "Pretendard 로컬 폰트, ChatWidget 반응형 배치(데스크톱 sticky / 모바일 floating)",
          ],
        },
        {
          title: "AI 챗봇 & RAG 구축",
          description:
            "챗봇이 profile 요약만이 아니라 content/의 구체적인 경력·프로젝트 서술까지 근거로 답하도록 RAG를 연결했습니다.",
          items: [
            "content/*.md 청크 분할 및 ingest 스크립트 작성",
            "retrieveContext()로 관련 청크 검색 후 system prompt에 주입",
            "useChat 기반 스트리밍 UI, quota·에러 메시지 처리",
          ],
        },
        {
          title: "배포 & 운영",
          description:
            "Vercel 배포 환경에서 API 키, 배포 보호, 임베딩 파일 커밋 전략까지 포함해 마무리했습니다.",
          items: [
            "Vercel Production에 OPENAI_API_KEY 설정",
            "Deployment Protection 해제로 공개 접근 허용",
            "embeddings.json 커밋 기반 배포로 별도 ingest 빌드 스텝 없이 운영",
          ],
        },
      ],
      duties: [
        "App Router 기반 페이지·API Route 구조 설계 및 TypeScript 타입 정의",
        "profile.ts 단일 소스에서 홈 카드, 상세 페이지, sitemap 메타데이터 연동",
        "lib/rag/chunk.ts · retrieve.ts와 scripts/ingest.ts로 RAG 파이프라인 구현",
        "ChatInterface 마크다운 렌더링, suggestedQuestions, 대화 초기화 UX",
        "경력·프로젝트 상세 컴포넌트(ExperienceDetail, ProjectDetail) 분리로 가독성 확보",
      ],
      highlights: [
        "UI 요약 vs 챗봇 지식 이중 데이터 구조",
        "벡터 DB 없는 경량 RAG",
        "카드 요약 + 상세 페이지 IA",
        "스트리밍 AI 응답",
        "Vercel 원클릭 배포",
      ],
      link: "https://portfolio-hyukskees-projects.vercel.app/",
      github: "https://github.com/HYUKSKEE/portfolio",
    },
  ],

  education: [
    {
      school: "Wecode Bootcamp",
      period: "2022.06 - 2022.10",
      highlights: [
        "Agile 기반 프로젝트 진행",
        "기업 협업 프로그램 참여",
        "AWS 배포 경험",
        "현업 개발자 코드 리뷰 경험",
      ],
    },
    {
      school: "Sparta Coding Club",
      period: "2022.01 - 2022.03",
      highlights: [
        "웹 개발 종합반 수료",
        "팀 프로젝트 참여",
        "AWS EC2 배포 경험",
        "Flask 및 MongoDB 학습",
      ],
    },
    {
      school: "순천대학교 정보통신공학과",
      period: "",
      highlights: ["데이터베이스", "네트워크", "분산 시스템", "C++", "Java", "웹 프로그래밍"],
    },
  ],

  interest:
    "최근에는 AI Native Engineering에 관심을 가지고 있습니다. Cursor, Claude, ChatGPT 등의 AI 도구를 활용하여 개발 생산성을 높이는 방법과, AI를 활용한 코드 리뷰 및 설계 자동화에 대해 지속적으로 실험하고 있습니다.",

  suggestedQuestions: [
    "가장 자신 있는 기술은 무엇인가요?",
    "크래프타에서 어떤 성과를 냈나요?",
    "결제 시스템 구조는 어떻게 개선했나요?",
    "지금 이직 제안을 받을 수 있나요?",
  ],
} as const;

export type Profile = typeof profile;
