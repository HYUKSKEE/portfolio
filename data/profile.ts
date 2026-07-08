export const profile = {
  siteUrl: "https://kimjinhyuk.com",
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
    },
    {
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
    },
  ],

  caseStudy: {
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

  projects: [
    {
      slug: "ssave",
      title: "SSAVE",
      period: "",
      role: "Admin 기획 및 개발",
      description: "AI 기반 영상 검색 자동화 서비스",
      stack: ["React", "styled-components", "Recoil", "Axios"],
      duties: [
        "Admin 기획 및 개발",
        "QnA 페이지 개발",
        "공지사항 페이지 개발",
        "Promotion 페이지 퍼블리싱",
      ],
      link: "",
      github: "",
    },
    {
      slug: "pia-gate",
      title: "Pia Gate",
      period: "",
      role: "모바일 웹 기획 및 개발",
      description: "모바일 웹 서비스",
      stack: [] as string[],
      duties: ["모바일 웹 기획 및 개발", "반응형 UI 구축", "UI/UX 개선"],
      link: "",
      github: "",
    },
    {
      slug: "wenb",
      title: "WeNB",
      period: "",
      role: "",
      description: "숙박 예약 서비스",
      stack: [] as string[],
      duties: [
        "JWT 기반 사용자 인증",
        "Naver Map API 연동",
        "다중 이미지 업로드",
        "날짜 선택 기능 구현",
      ],
      link: "",
      github: "",
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
