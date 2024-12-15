export interface PostMetadata {
  title: string;
  description: string;
  category: string;
  tags: string[];
  date: Date;
}

export interface Post {
  slug: string;
  metadata: PostMetadata;
}
