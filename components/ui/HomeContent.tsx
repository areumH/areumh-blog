'use client';

import { useSearchParams } from 'next/navigation';
import { Post } from '@/types';
import { useSearchPosts } from '@/hooks/useSearchPosts';
import SearchBar from '@/components/ui/SearchBar';
import TagList from '@/components/ui/TagList';
import PostList from '@/components/ui/PostList';

export default function HomeContent({ posts, tags }: { posts: Post[]; tags: string[] }) {
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag');

  const tagFilteredPosts = tag ? posts.filter((post) => post.tags?.includes(tag)) : posts;
  const { searchValue, debouncedSearchValue, setSearchValue, filteredPosts } = useSearchPosts(tagFilteredPosts);

  return (
    <div className="flex flex-col w-full gap-4 md:gap-6 ">
      <SearchBar value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <TagList tags={tags} />

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">"{debouncedSearchValue}" 에 대한 검색 결과가 없습니다.</p>
        </div>
      ) : (
        <PostList posts={filteredPosts} />
      )}
    </div>
  );
}
