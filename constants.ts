export const CATEGORIES = [
  { key: '개발', label: 'tech' },
  { key: '회고', label: 'review' },
];

export const PORTFOLIO_INFO = {
  name: '한아름',
  about: '소개글',
  education: {
    school: '한국교통대학교 소프트웨어학전공 졸업 (3.73 / 4.5)',
    date: '2024.02',
  },
  certification: [
    {
      name: '정보처리기사 (한국산업인력공단)',
      date: '2023.06',
    },
  ],
  skills: {
    frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript'],
    state: ['Zustand', 'Redux', 'Tanstack Query'],
    styling: ['Tailwind CSS', 'Styled-Component'],
  },
  activities: [
    {
      name: '항해99',
      date: '2025.09',
      link: 'https://stagehanghae99.spartacodingclub.kr/',
      description: '항해 플러스 프론트엔드 6기 수료',
    },
    {
      name: 'JECT',
      date: '2024.06 ~ ',
      link: 'https://ject.kr/',
      description: 'IT 사이드 프로젝트 동아리 JECT 2기',
    },
    {
      name: '코멘토',
      date: '2023.10',
      link: 'https://comento.kr/?index',
      description: '프론트엔드 웹개발 직무부트캠프 수료',
    },
  ],
  projects: [
    {
      name: 'PICK-O',
      date: '2024.07 ~ 2025.03',
      link: 'https://github.com/areumH/PICK-O-Client',
      description:
        '다양한 주제의 밸런스 게임을 통해 선호하는 선택지를 고르고, 다른 의견을 가진 사람들과 토론을 즐기는 서비스',
      stack: ['React', 'TypeScript', 'Emotion', 'React Query', 'Redux', 'StoryBook'],
    },
    {
      name: 'GJ-NEWS',
      date: '2025.05 ~ 2025.10',
      link: 'https://github.com/areumH/GJ-NEWS',
      description:
        '네이버 뉴스 검색 API와 구글 감정 분석 API를 활용해 뉴스 피드에서 긍정적인 기사만 필터링해 보여주는 서비스',
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'React Query'],
    },
    {
      name: 'areumh-blog',
      date: '2025.10 ~ ',
      link: 'https://github.com/areumH/areumh-blog',
      description: 'MDX 기반 개인 블로그 프로젝트',
      stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    },
  ],
};
