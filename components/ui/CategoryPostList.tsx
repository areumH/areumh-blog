import { getPostsByCategory } from '@/lib/post';
import CategoryPostItem from '@/components/ui/CategoryPostItem';

export default function CategoryPostList({ category }: { category: string }) {
  const posts = getPostsByCategory(category);

  if (!posts?.length) return null;

  return (
    <div className="flex flex-col lg:flex-row justify-between w-full max-w-[800px]">
      <div className="text-5xl text-indigo-400">{category}</div>
      <div className="flex flex-col w-full max-w-[600px] mt-5">
        {posts.map((post) => (
          <CategoryPostItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
