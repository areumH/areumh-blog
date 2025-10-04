import { PostBody } from '@/components/ui/PostBody';
import PostHeader from '@/components/ui/PostHeader';
import { getAllPosts, getPostBySlug } from '@/lib/post';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const { meta, content } = getPostBySlug(`${category}/${slug}`);

  return (
    <div className="flex flex-col gap-4 md:gap-6 md:px-10 md:py-5">
      <PostHeader meta={meta} />
      <div className="flex gap-2 border-1 border-gray-100"></div>
      <PostBody content={content} />
    </div>
  );
}
