'use client';

import { useState, useMemo } from 'react';
import { postArray } from '@/types';
import { useDebounce } from '@/utils/hooks/useDebounce';
import SearchBar from '@/components/ui/SearchBar';
import PostList from '@/components/ui/PostList';

export default function Home() {
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const filteredPosts = useMemo(() => {
    if (!debouncedSearchValue) return postArray;
    return postArray.filter(
      (post) =>
        post.title.toLowerCase().includes(debouncedSearchValue.toLowerCase()) ||
        (post.description && post.description.toLowerCase().includes(debouncedSearchValue.toLowerCase()))
    );
  }, [debouncedSearchValue]);

  return (
    <div className="flex flex-col gap-4 md:gap-6 md:px-10">
      <SearchBar value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <PostList searchValue={searchValue} posts={filteredPosts} />
    </div>
  );
}
