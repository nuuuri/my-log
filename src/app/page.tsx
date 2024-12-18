import PostCard from '@/components/PostCard';

import { getAllPostsMetadata } from '@/utils/postUtils';

export default async function Home() {
  const allPosts = await getAllPostsMetadata();

  return (
    <div className="max-w-3xl m-auto">
      <div className="mb-5 text-2xl font-bold tracking-widest text-point font-nanumGothic">
        전체글
      </div>
      <div>
        {allPosts
          .sort(
            (a, b) =>
              new Date(a.metadata.date).getDate() -
              new Date(b.metadata.date).getDate()
          )
          .map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
      </div>
    </div>
  );
}
