import PostList from '@/components/ui/PostList';
import { getAllPosts } from '@/lib/post';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col gap-4 md:gap-6 md:px-10">
      <PostList posts={posts} />
    </div>
  );
}
