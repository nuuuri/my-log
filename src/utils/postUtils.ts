import fs from 'fs';
import path from 'path';

import { notFound } from 'next/navigation';

import { sync } from 'glob';
import matter from 'gray-matter';

import { PostMetadata } from '@/types/Post';

const getFilePath = (slug: string) =>
  path.join(process.cwd(), 'src', 'posts', `${slug}.mdx`);

const getFileContent = (filePath: string) => {
  if (!fs.existsSync(filePath)) return null;

  return fs.readFileSync(filePath, 'utf-8');
};

export const getPostContent = (slug: string) => {
  const postPath = getFilePath(slug);
  const postFile = getFileContent(postPath);

  if (!postFile) return notFound();

  const { content } = matter(postFile);

  return content;
};

const parseMetadata = (content: string) => {
  const { data: metadata } = matter(content);

  if (!metadata.title) {
    throw new Error('Missing required metadata fields');
  }

  return metadata as PostMetadata;
};

export const getPostMetadata = async (slug: string) => {
  try {
    const filePath = getFilePath(slug);
    const content = getFileContent(filePath);

    if (!content) {
      throw new Error(`Post not found: ${slug}`);
    }

    const categories = slug.split('/');
    categories.pop(); // 파일명 제거

    const metadata = { ...parseMetadata(content), category: categories };

    return {
      slug,
      metadata,
    };
  } catch (error) {
    console.error(error);
    return notFound();
  }
};

export const getAllPostsMetadata = async () => {
  try {
    const fileNames = sync('src/posts/**/*.mdx');

    const posts = await Promise.all(
      fileNames.map(async (fileName) => {
        const slug = fileName
          .replace(/\\/g, '/')
          .replace('src/posts/', '')
          .replace('.mdx', '');
        return await getPostMetadata(slug);
      })
    );

    return posts;
  } catch (error) {
    console.error('Failed to fetch posts: ', error);
    return [];
  }
};
