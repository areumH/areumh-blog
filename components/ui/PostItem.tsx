// export const examplePost: PostMeta = {
//   title: '블로그 예시 글 제목',
//   date: '2025-10-04',
//   description: '블로그 예시 글입니다.',
//   category: '회고',
//   tags: ['Next.js', 'React'],
//   slug: 'example-post',
// };

import { PostMeta } from '@/types';
import { formatDate } from '@/utils/date';

export default function PostItem({ post }: { post: PostMeta }) {
  return (
    <div className="flex flex-col w-full px-4 py-4 gap-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 items-center">
          <div className="text-2xl truncate">{post.title}</div>
          <span className="text-indigo-400 whitespace-nowrap">{post.category}</span>
        </div>
        <div className="text-gray-500 line-clamp-3">{post.description}</div>
      </div>
      <div className="text-sm text-gray-400 whitespace-nowrap">{formatDate(post.date)}</div>
    </div>
  );
}
