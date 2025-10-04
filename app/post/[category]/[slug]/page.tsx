import { PostBody } from '@/components/ui/PostBody';
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
    <div>
      <PostBody content={content} />
    </div>
  );
}
