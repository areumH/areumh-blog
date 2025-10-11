'use client';

import { Post } from '@/types';
import PostItem from '@/components/ui/PostItem';

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="flex flex-col gap-2">
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </div>
  );
}
