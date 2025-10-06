import { getAllPosts } from '@/lib/post';
import PostList from '@/components/ui/PostList';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col w-full max-w-[800px] mx-auto items-center md:px-10">
      <PostList posts={posts} />
    </div>
  );
}
