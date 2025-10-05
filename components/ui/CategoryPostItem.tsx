import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Post } from '@/types';
import { formatDate } from '@/utils/date';

export default function CategoryPostItem({ post }: { post: Post }) {
  const { title, date, category, slug } = post;

  return (
    <Link href={`/post/${category}/${slug}`}>
      <div className="flex justify-between items-center px-3 py-2 gap-3 border-b border-gray-200 dark:border-gray-700 cursor-pointer group">
        <div className="relative flex items-center group cursor-pointer">
          <ChevronRight
            size={18}
            className="absolute left-0 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 "
          />
          <span className="ml-0 group-hover:ml-6 transition-all duration-200 truncate group-hover:text-indigo-400">
            {title}
          </span>
        </div>
        <div className="text-sm text-gray-400 whitespace-nowrap">{formatDate(date)}</div>
      </div>
    </Link>
  );
}
