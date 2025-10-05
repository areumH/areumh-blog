'use client';

import { Post } from '@/types';
import { useSearchPosts } from '@/hooks/useSearchPosts';
import SearchBar from '@/components/ui/SearchBar';
import PostItem from '@/components/ui/PostItem';

export default function PostList({ posts }: { posts: Post[] }) {
  const { searchValue, debouncedSearchValue, setSearchValue, filteredPosts } = useSearchPosts(posts);

  return (
    <>
      <SearchBar value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">"{debouncedSearchValue}" 에 대한 검색 결과가 없습니다.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filteredPosts.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </div>
      )}
    </>
  );
}
