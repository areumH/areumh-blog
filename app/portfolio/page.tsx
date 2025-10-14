import { Metadata } from 'next';
import { PORTFOLIO_INFO } from '@/constants';
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
        <p className="text-2xl md:text-4xl">{PORTFOLIO_INFO.name}</p>
      </div>
      <div className="flex flex-col gap-2 md:gap-3">
        <div className="flex text-2xl md:text-3xl font-bold">About</div>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{PORTFOLIO_INFO.about}</p>
      </div>
      <div className="flex flex-col gap-2 md:gap-3 w-full">
        <div className="flex text-2xl md:text-3xl font-bold">Education</div>
        <div className="flex justify-between w-full gap-5 rounded-lg px-4 py-3 border border-gray-300 dark:border-gray-700">
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{PORTFOLIO_INFO.education.school}</p>
          <p className="text-sm md:text-base text-gray-400 dark:text-gray-600">{PORTFOLIO_INFO.education.date}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:gap-3">
        <div className="flex text-2xl md:text-3xl font-bold">Certification</div>
        {PORTFOLIO_INFO.certification.map((el) => (
          <div
            key={el.name}
            className="flex justify-between w-full gap-5 rounded-lg px-4 py-3 border border-gray-300 dark:border-gray-700"
          >
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{el.name}</p>
            <p className="text-sm md:text-base text-gray-400 dark:text-gray-600">{el.date}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 md:gap-3">
        <div className="flex text-2xl md:text-3xl font-bold">Skills</div>
        <div className="flex flex-col gap-2 md:gap-3">
          <div className="flex text-base md:text-lg font-bold text-gray-700 dark:text-gray-300">Frontend</div>
          <div className="flex gap-3">
            {PORTFOLIO_INFO.skills.frontend.map((el) => (
              <Chip key={el} text={el} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 md:gap-3">
          <div className="flex text-base md:text-lg font-bold text-gray-700 dark:text-gray-300">State Management</div>
          <div className="flex gap-3">
            {PORTFOLIO_INFO.skills.state.map((el) => (
              <Chip key={el} text={el} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 md:gap-3">
          <div className="flex text-base md:text-lg font-bold text-gray-700 dark:text-gray-300">Styling</div>
          <div className="flex gap-3">
            {PORTFOLIO_INFO.skills.styling.map((el) => (
              <Chip key={el} text={el} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:gap-3">
        <div className="flex text-2xl md:text-3xl font-bold">Activities</div>
        {PORTFOLIO_INFO.activities.map((el) => (
          <div
            key={el.name}
            className="flex flex-col w-full gap-1 rounded-lg px-4 py-3 border border-gray-300 dark:border-gray-700"
          >
            <div className="flex justify-between w-full">
              <a
                href={el.link}
                target="_blank"
                className="text-base md:text-lg hover:underline font-bold text-gray-700 dark:text-gray-300"
              >
                {el.name}
              </a>
              <p className="text-sm md:text-base text-gray-400 dark:text-gray-600">{el.date}</p>
            </div>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{el.description}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 md:gap-3">
        <div className="flex text-2xl md:text-3xl font-bold">Projects</div>
      </div>
    </div>
  );
}
