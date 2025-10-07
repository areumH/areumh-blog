import { Metadata } from 'next';
import CategoryPostList from '@/components/ui/CategoryPostList';

export const metadata: Metadata = {
  title: '카테고리',
  description: 'areumh.me',
  openGraph: {
    title: '카테고리',
    description: 'areumh.me',
    url: 'https://areumh.me/category',
    siteName: '이것저것 블로그',
    images: [
      {
        url: '/areumh-thumbnail.png',
        width: 1200,
        height: 630,
        alt: '카테고리',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '카테고리',
    description: 'areumh.me',
    images: '/areumh-thumbnail.png',
  },
};

const categories = [
  { key: '개발', label: 'tech' },
  { key: '회고', label: 'review' },
];

export default function Category() {
  return (
    <div className="flex flex-col items-center gap-10 md:px-10 py-3 md:py-5">
      {categories.map(({ key, label }) => (
        <CategoryPostList key={key} category={label} />
      ))}
    </div>
  );
}
