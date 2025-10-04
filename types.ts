export interface PostMeta {
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export interface Post extends PostMeta {
  slug: string;
  category: string;
}
