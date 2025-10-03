export interface PostMeta {
  title: string;
  date: string;
  description: string;
  category: string;
  tags: string[];
  slug: string;
}

// 기능 구현 후 삭제
export const examplePost: PostMeta = {
  title: '블로그 예시 글 제목',
  date: '2025-10-04',
  description: '블로그 예시 글입니다.',
  category: '회고',
  tags: ['Next.js', 'React'],
  slug: 'example-post',
};

export const postArray: PostMeta[] = Array.from({ length: 30 }, (_, i) => ({
  ...examplePost,
  slug: `${examplePost.slug}-${i + 1}`,
  title: `${examplePost.title} ${i + 1}`,
}));
