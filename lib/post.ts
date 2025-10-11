import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/types';

const postsDirectory = path.join(process.cwd(), 'posts');

/**
 * 모든 slug 가져오기
 * category - 폴더명, slug - 파일명
 */
export function getPostSlugs(): string[] {
  const categories = fs.readdirSync(postsDirectory).filter((name) => {
    const categoryPath = path.join(postsDirectory, name);
    return fs.statSync(categoryPath).isDirectory();
  });

  const slugs: string[] = [];

  categories.forEach((category) => {
    const files = fs.readdirSync(path.join(postsDirectory, category));
    files.forEach((file) => {
      if (file.endsWith('.mdx')) {
        const slug = path.basename(file, '.mdx');
        slugs.push(`${category}/${slug}`);
      }
    });
  });

  return slugs;
}

/**
 * 특정 slug의 post 가져오기
 */
export function getPostBySlug(url: string) {
  const [category, slug] = url.split('/');
  const fullPath = path.join(postsDirectory, category, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  const meta: Post = {
    title: data.title,
    date: data.date,
    description: data.description,
    tags: data.tags || [],
    slug,
    category,
  };

  return { meta, content };
}

/**
 * 전체 글 목록 가져오기
 */
export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  return slugs.map((slug) => getPostBySlug(slug).meta).sort((a, b) => (a.date < b.date ? 1 : -1)); // 최신순
}

/**
 * 카테고리별 글 가져오기
 */
export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((post) => post.category === category);
}

/**
 * 전체 태그 목록 가져오기
 */
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = posts.flatMap((post) => post.tags || []);
  return Array.from(new Set(tags));
}
