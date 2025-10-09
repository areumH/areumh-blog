import { Metadata } from 'next';
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const { meta } = getPostBySlug(`${category}/${slug}`);

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://areumh.me/post/${category}/${slug}`,
      siteName: '이것저것 블로그',
      images: [
        {
          url: '/image/areumh-thumbnail.png',
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
      locale: 'ko_KR',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: '/image/areumh-thumbnail.png',
    },
  };
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
