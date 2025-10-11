'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function TagList({ tags }: { tags: string[] }) {
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get('tag');

  return (
    <div className="flex gap-2 md:mx-3 overflow-x-auto md:flex-wrap md:overflow-visible horizontal-scroll">
      <Link
        href="/"
        className={`flex-shrink-0 px-3 py-1 text-sm md:text-base rounded-full border transition-colors ${
          !selectedTag
            ? 'bg-indigo-500 text-white border-indigo-500'
            : 'border-gray-300 text-gray-600 hover:border-indigo-400 hover:text-indigo-500 dark:text-gray-300 dark:border-gray-600'
        }`}
      >
        전체
      </Link>

      {tags.map((tag) => {
        const isActive = selectedTag === tag;
        return (
          <Link
            key={tag}
            href={`?tag=${encodeURIComponent(tag)}`}
            className={`flex-shrink-0 px-3 py-1 text-sm md:text-base rounded-full border transition-colors ${
              isActive
                ? 'bg-indigo-500 text-white border-indigo-500'
                : 'border-gray-300 text-gray-600 hover:border-indigo-400 hover:text-indigo-500 dark:text-gray-300 dark:border-gray-600'
            }`}
          >
            #{tag}
          </Link>
        );
      })}
    </div>
  );
}
