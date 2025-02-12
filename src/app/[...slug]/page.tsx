/* eslint-disable react-refresh/only-export-components */
import { Metadata } from 'next';

import dayjs from 'dayjs';

import { MdxContent } from '@/components/mdx-content';
import { classNames } from '@/utils';

import {
  getAllPostsMetadata,
  getPostContent,
  getPostMetadata,
} from '@/features/post';

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const { metadata } = await getPostMetadata(slug.join('/'));

  const { title, category, date, tags } = metadata;

  const content = getPostContent(slug.join('/'));
  const categories = category.join('/');

  return (
    <div className="w-full max-w-3xl m-auto">
      <div
        className={classNames(
          'flex flex-col w-full gap-3 pb-6 text-center border-b border-zinc-200'
        )}>
        <p className="text-3xl font-bold">{title}</p>
        <p className="text-point">{categories}</p>
        <p className="text-sm text-zinc-400">
          {dayjs(date).utc().format('YYYY년 MM월 DD일')}
        </p>
      </div>
      <article className="my-10 prose">
        <MdxContent content={content} />
      </article>
      <div className="flex gap-3 pt-6 border-t border-zinc-200">
        {tags.map((tag) => (
          <div key={tag} className="text-point">
            #{tag}
          </div>
          // <Link key={tag} className="text-point" href={`/tag/${tag}`}>
          //   #{tag}
          // </Link>
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const allPosts = await getAllPostsMetadata();

  return allPosts.map((post) => ({
    slug: post.slug.split('/'),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await getPostMetadata(slug.join('/'));

  return {
    title: `${metadata.title} | My Log`,
    description: metadata.description || '',
    openGraph: {
      type: 'website',
      title: `${metadata.title} | My Log`,
      description: metadata.description || '',
      url: `https://nuuuri.vercel.app/${slug}`,
      locale: 'ko_KR',
    },
  };
}
