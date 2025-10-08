import { Post } from '@/types';
import { formatDate } from '@/utils/date';

export default function PostHeader({ meta }: { meta: Post }) {
  const { title, date, tags, category } = meta;

  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="max-w-3xl text-2xl md:text-4xl font-bold text-center">{title}</div>
      <div className="flex gap-2 text-xs md:text-sm text-gray-600">{tags && tags.map((tag) => <p key={tag}>#{tag}</p>)}</div>
      <div className="flex items-center gap-3">
        <div className="text-sm md:text-base text-gray-500">{formatDate(date)}</div>
        <div className="text-sm md:text-lg text-indigo-400">{category}</div>
      </div>
    </div>
  );
}
