'use client';

import { useState, useMemo } from 'react';
import { Post } from '@/types';
import { useDebounce } from './useDebounce';

export function useSearchPosts(posts: Post[]) {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const filteredPosts = useMemo(() => {
    if (!debouncedSearchValue) return posts;

    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(debouncedSearchValue.toLowerCase()) ||
        (post.description && post.description.toLowerCase().includes(debouncedSearchValue.toLowerCase()))
    );
  }, [debouncedSearchValue, posts]);

  return {
    searchValue,
    debouncedSearchValue,
    setSearchValue,
    filteredPosts,
  };
}
