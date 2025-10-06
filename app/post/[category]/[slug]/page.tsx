import { getAllPosts, getPostBySlug } from '@/lib/post';
import PostHeader from '@/components/ui/PostHeader';
import PostContent from '@/components/ui/PostContent';
import Toc from '@/components/ui/Toc';

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
    <div className="flex w-full max-w-[800px] mx-auto ">
      <div className="flex flex-col gap-4 md:gap-6 md:px-10 md:py-5">
        <PostHeader meta={meta} />
        <div className="border-t border-gray-200"></div>
        <PostContent content={content} />
      </div>

      <aside
        className="hidden xl:block fixed top-30 w-60 overflow-y-auto"
        style={{
          right: `calc((100vw - 800px) / 2 - 225px)`,
          width: '230px',
          maxHeight: `calc(100vh - 300px)`,
        }}
      >
        <Toc />
      </aside>
    </div>
  );
}
