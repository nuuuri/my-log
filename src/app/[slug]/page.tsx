import { MDXRemote } from 'next-mdx-remote/rsc';

import {
  getAllPostsMetadata,
  getPostContent,
  getPostMetadata,
} from '@/utils/postUtils';

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string; post: string }>;
}) {
  const { slug } = await params;
  const { metadata } = await getPostMetadata(slug);

  const title = `${metadata.title ?? ''}`;
  const content = getPostContent(slug);

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
  const postStaticParams = allPosts.map((post) => ({
    slug: post.slug,
  }));

  return postStaticParams;
}
