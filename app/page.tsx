import { Suspense } from 'react';
import { getAllPosts, getAllTags } from '@/lib/post';
import HomeContent from '@/components/ui/HomeContent';

export default function Home() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="flex flex-col w-full max-w-[800px] mx-auto items-center md:px-10">
      <Suspense fallback={null}>
        <HomeContent posts={posts} tags={tags} />
      </Suspense>
    </div>
  );
}
