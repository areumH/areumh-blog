import { Metadata } from 'next';

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
        url: '/areumh-thumbnail.png',
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
    images: '/areumh-thumbnail.png',
  },
};

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center">
      <p>포트폴리오 페이지는 준비 중입니다!</p>
    </div>
  );
}
