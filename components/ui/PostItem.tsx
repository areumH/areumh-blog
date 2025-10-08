import Link from 'next/link';
import { Post } from '@/types';
import { formatDate } from '@/utils/date';

export default function PostItem({ post }: { post: Post }) {
  const { title, description, date, category, slug } = post;

  return (
    <Link href={`/post/${category}/${slug}`}>
      <div className="flex flex-col w-full px-4 py-4 gap-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <div className="text-base md:text-2xl truncate">{title}</div>
            <span className="text-sm md:text-base text-indigo-400 whitespace-nowrap">{category}</span>
          </div>
          <div className="text-sm md:text-base text-gray-500 line-clamp-3">{description}</div>
        </div>
        <div className="text-xs md:text-sm text-gray-400 whitespace-nowrap">{formatDate(date)}</div>
      </div>
    </Link>
  );
}
