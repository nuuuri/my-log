export interface PostMetadata {
  title: string;
  category: string[];
  description: string;
  tags: string[];
  date: Date;
}

export interface PostData {
  slug: string;
  metadata: PostMetadata;
}
