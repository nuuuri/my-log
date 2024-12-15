import { MDXRemote } from 'next-mdx-remote/rsc';

import {
  getAllPostsMetadata,
  getPostContent,
  getPostMetadata,
} from '@/utils/postUtils';

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const { metadata } = await getPostMetadata(slug.join('/'));

  const title = `${metadata.title ?? ''}`;
  const content = getPostContent(slug.join('/'));

  return (
    <article className="prose">
      <div>title: {title}</div>
      <MDXRemote source={content} />
    </article>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function generateStaticParams() {
  const allPosts = await getAllPostsMetadata();
  return allPosts.map((post) => ({
    slug: post.slug.split('/'),
  }));
}
