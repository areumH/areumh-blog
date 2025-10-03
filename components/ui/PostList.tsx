import { PostMeta } from '@/types';
import PostItem from './PostItem';

export default function PostList({ searchValue, posts }: { searchValue: string; posts: PostMeta[] }) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">"{searchValue}" 에 대한 검색 결과가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </div>
  );
}
