// app/post/[category]/[slug]/PostBody.tsx
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

interface PostBodyProps {
  content: string;
}

export const PostBody = ({ content }: PostBodyProps) => {
  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [
              remarkGfm,
            ],
            rehypePlugins: [
              [
                // @ts-ignore
                rehypePrettyCode,
                {
                  theme: 'github-dark',
                },
              ],
            ],
          },
        }}
      />
    </div>
  );
};
