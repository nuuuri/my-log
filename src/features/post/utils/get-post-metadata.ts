import { notFound } from 'next/navigation';

import matter from 'gray-matter';

import { PostMetadata } from '../model/post-type';

import { getFileContent } from './get-file-content';

const parseMetadata = (content: string) => {
  const { data: metadata } = matter(content);

  if (!metadata.title) {
    throw new Error('Missing required metadata fields');
  }

  return metadata as PostMetadata;
};

export const getPostMetadata = async (slug: string) => {
  try {
    const content = getFileContent(slug);

    if (!content) {
      throw new Error(`Post not found: ${slug}`);
    }

    const categories = slug.split('/');
    categories.pop(); // 파일명 제거

    const parsedContent = parseMetadata(content);
    const metadata = {
      ...parsedContent,
      title: parsedContent.title.replace(/\\(\[|\])/g, '$1'),
      category: categories,
    };

    return {
      slug,
      metadata,
    };
  } catch (error) {
    console.error(error);
    return notFound();
  }
};
