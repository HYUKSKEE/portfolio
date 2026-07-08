/**
 * 포트폴리오에 표시되는 요약 정보입니다.
 * 아래 값들을 본인 정보로 교체하세요.
 * (챗봇이 참고하는 상세한 이야기는 /content/*.md 파일에서 관리합니다.)
 */
export const profile = {
  siteUrl: "https://kimjinhyuk.com",
  name: "홍길동",
  role: "Frontend Developer",
  tagline: "사용자 경험과 성능을 함께 고민하는 프론트엔드 개발자입니다.",
  location: "Seoul, South Korea",
  email: "you@example.com",
  avatarUrl: "/avatar.png",
  links: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    blog: "https://your-blog.example.com",
  },
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "협업",
      items: ["Git/GitHub", "Figma", "Jira", "Linear"],
    },
    {
      category: "품질 / 테스트",
      items: ["Jest", "React Testing Library", "Playwright"],
    },
    {
      category: "인프라",
      items: ["Vercel", "AWS", "GitHub Actions"],
    },
  ],
  projects: [
    {
      slug: "commerce-renewal",
      title: "커머스 플랫폼 리뉴얼",
      period: "2024.01 - 2024.06",
      role: "프론트엔드 리드 (3인 팀)",
      description:
        "Next.js App Router 마이그레이션으로 LCP를 3.8초에서 1.6초로 단축하고 모바일 전환율을 22% 개선했습니다.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query"],
      link: "#",
      github: "#",
      problem:
        "기존 서비스의 첫 화면 로딩 속도가 느리고, 모바일 전환율이 낮았습니다.",
      solution:
        "Next.js App Router로 마이그레이션하며 서버 컴포넌트를 적극 활용, 이미지 최적화와 코드 스플리팅을 적용했습니다.",
      result: "LCP를 3.8초에서 1.6초로 단축했고, 모바일 전환율이 22% 개선되었습니다.",
    },
    {
      slug: "design-system",
      title: "사내 디자인 시스템 구축",
      period: "2023.03 - 2023.09",
      role: "디자인 시스템 오너",
      description:
        "Figma 디자인 토큰 기반 컴포넌트 라이브러리를 구축해 5개 팀의 개발 속도를 약 30% 향상시켰습니다.",
      stack: ["React", "TypeScript", "Storybook", "styled-components"],
      link: "#",
      github: "#",
      problem:
        "여러 서비스 팀이 각자 다른 스타일과 컴포넌트를 사용해 일관성이 부족했습니다.",
      solution:
        "Figma 디자인 토큰을 기반으로 React 컴포넌트 라이브러리를 구축하고, Storybook으로 문서화했습니다.",
      result: "신규 화면 개발 속도가 약 30% 향상되었고, 5개 팀이 공통으로 사용하게 되었습니다.",
    },
    {
      slug: "side-project",
      title: "개인 사이드 프로젝트",
      period: "진행중",
      role: "개인 프로젝트",
      description: "여기에 사이드 프로젝트나 오픈소스 기여 내역을 소개하세요.",
      stack: ["Next.js", "AI SDK"],
      link: "#",
      github: "#",
      problem: "여기에 어떤 문제를 해결하고 싶었는지 적어주세요.",
      solution: "여기에 어떻게 해결했는지 적어주세요.",
      result: "여기에 결과나 배운 점을 적어주세요.",
    },
  ],
  experience: [
    {
      company: "주식회사 예시테크",
      role: "프론트엔드 개발자",
      period: "2022.03 - 재직중",
      highlights: [
        "레거시 jQuery 코드베이스를 React로 점진적으로 마이그레이션",
        "팀 내 코드 리뷰 문화 정착에 기여",
      ],
    },
    {
      company: "주식회사 스타트업예시",
      role: "프론트엔드 개발자 (인턴 → 정규직)",
      period: "2020.07 - 2022.02",
      highlights: ["초기 서비스 MVP의 프론트엔드를 처음부터 구축"],
    },
  ],
  suggestedQuestions: [
    "가장 자신 있는 기술은 무엇인가요?",
    "최근에 진행한 프로젝트를 소개해주세요.",
    "협업 스타일이 어떻게 되나요?",
    "지금 이직 제안을 받을 수 있나요?",
  ],
} as const;

export type Profile = typeof profile;
