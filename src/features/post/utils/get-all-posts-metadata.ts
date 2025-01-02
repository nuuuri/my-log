import { sync } from 'glob';

import { getPostMetadata } from './get-post-metadata';

export const getAllPostsMetadata = async () => {
  try {
    const fileNames = sync('mdx/**/*.mdx');

    const posts = await Promise.all(
      fileNames.map(async (fileName) => {
        const slug = fileName
          .replace(/\\/g, '/')
          .replace('mdx/', '')
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
