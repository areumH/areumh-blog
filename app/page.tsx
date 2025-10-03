import { postArray } from '@/types';
import PostItem from '@/components/ui/PostItem';

export default function Home() {
  return (
    <div className="flex flex-col gap-3 md:px-10">
      {postArray.map((post) => (
        <PostItem key={post.title} post={post} />
      ))}
    </div>
  );
}
