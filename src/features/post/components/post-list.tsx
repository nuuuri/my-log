import { getAllPostsMetadata } from '../utils';

import PostItem from './post-item';

export default async function PostList() {
  const allPosts = await getAllPostsMetadata();

  return (
    <div>
      {allPosts
        .sort(
          (a, b) =>
            new Date(b.metadata.date).getTime() -
            new Date(a.metadata.date).getTime()
        )
        .map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
    </div>
  );
}
