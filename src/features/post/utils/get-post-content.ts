import { notFound } from 'next/navigation';

import matter from 'gray-matter';

import { getFileContent } from './get-file-content';

export const getPostContent = (slug: string) => {
  const postFile = getFileContent(slug);

  if (!postFile) return notFound();

  const { content } = matter(postFile);

  return content;
};
