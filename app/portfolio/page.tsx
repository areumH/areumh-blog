import { Metadata } from 'next';
import Chip from '@/components/ui/Chip';

export const metadata: Metadata = {
  title: '포트폴리오',
  description: 'areumh.me',
  openGraph: {
    title: '포트폴리오',
    description: 'areumh.me',
    url: 'https://areumh.me/portfolio',
    siteName: '이것저것 블로그',
    images: [
      {
        url: '/image/areumh-thumbnail.png',
        width: 1200,
        height: 630,
        alt: '포트폴리오',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '포트폴리오',
    description: 'areumh.me',
    images: '/image/areumh-thumbnail.png',
  },
};

export default function Portfolio() {
  return (
    <div className="flex flex-col w-full max-w-[700px] mx-auto md:px-10 md:py-3 gap-10 md:gap-11">
      <div className="flex w-full">
        <p className="text-2xl md:text-4xl">한아름</p>
      </div>

      <div className="flex flex-col gap-1 md:gap-3">
        <div className="flex text-2xl md:text-3xl font-bold">About</div>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">소개글</p>
      </div>

      <div className="flex flex-col gap-2 md:gap-3 w-full">
        <div className="flex text-2xl md:text-3xl font-bold">Education</div>
        <div className="flex justify-between w-full gap-5 rounded-lg px-4 py-3 border border-gray-300 dark:border-gray-700">
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
            한국교통대학교 소프트웨어학전공 졸업 (3.73 / 4.5)
          </p>
          <p className="text-sm md:text-base text-gray-400 dark:text-gray-600">2024.02</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 md:gap-3">
        <div className="flex text-2xl md:text-3xl font-bold">Certification</div>
        <div className="flex justify-between w-full gap-5 rounded-lg px-4 py-3 border border-gray-300 dark:border-gray-700">
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">정보처리기사 (한국산업인력공단)</p>
          <p className="text-sm md:text-base text-gray-400 dark:text-gray-600">2023.06</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 md:gap-3">
        <div className="flex text-2xl md:text-3xl font-bold">Skills</div>

        <div className="flex flex-col gap-2 md:gap-3">
          <div className="flex text-base md:text-lg font-bold text-gray-700 dark:text-gray-300">Frontend</div>
          <div className="flex gap-3">
            <Chip text="React" />
            <Chip text="Next.js" />
            <Chip text="TypeScript" />
            <Chip text="JavaScript" />
          </div>
        </div>

        <div className="flex flex-col gap-2 md:gap-3">
          <div className="flex text-base md:text-lg font-bold text-gray-700 dark:text-gray-300">State Management</div>
          <div className="flex gap-3">
            <Chip text="Zustand" />
            <Chip text="Redux" />
            <Chip text="Tanstack Query" />
          </div>
        </div>

        <div className="flex flex-col gap-2 md:gap-3">
          <div className="flex text-base md:text-lg font-bold text-gray-700 dark:text-gray-300">Styling</div>
          <div className="flex gap-3">
            <Chip text="Tailwind CSS" />
            <Chip text="Styled-Component" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 md:gap-3">
        <div className="flex text-2xl md:text-3xl font-bold">Activities</div>
        <div className="flex flex-col w-full gap-1 rounded-lg px-4 py-3 border border-gray-300 dark:border-gray-700">
          <div className="flex justify-between w-full">
            <a
              href="https://stagehanghae99.spartacodingclub.kr/"
              target="_blank"
              className="text-base md:text-lg hover:underline font-bold text-gray-700 dark:text-gray-300"
            >
              항해99
            </a>
            <p className="text-sm md:text-base text-gray-400 dark:text-gray-600">2025.09</p>
          </div>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">항해 플러스 프론트엔드 6기 수료</p>
        </div>

        <div className="flex flex-col w-full gap-1 rounded-lg px-4 py-3 border border-gray-300 dark:border-gray-700">
          <div className="flex justify-between w-full">
            <a
              href="https://ject.kr/"
              target="_blank"
              className="text-base md:text-lg hover:underline font-bold text-gray-700 dark:text-gray-300"
            >
              JECT
            </a>
            <p className="text-sm md:text-base text-gray-400 dark:text-gray-600">2024.06 ~ </p>
          </div>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">IT 사이드 프로젝트 동아리 JECT</p>
        </div>

        <div className="flex flex-col w-full gap-1 rounded-lg px-4 py-3 border border-gray-300 dark:border-gray-700">
          <div className="flex justify-between w-full">
            <a
              href="https://comento.kr/?index"
              target="_blank"
              className="text-base md:text-lg hover:underline font-bold text-gray-700 dark:text-gray-300"
            >
              코멘토
            </a>
            <p className="text-sm md:text-base text-gray-400 dark:text-gray-600">2023.10</p>
          </div>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">프론트엔드 웹개발 직무부트캠프 수료</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 md:gap-3">
        <div className="flex text-2xl md:text-3xl font-bold">Projects</div>
      </div>
    </div>
  );
}
