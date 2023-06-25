import PostCard from '@/components/PostCard';
import { allPosts } from '@/contentlayer/generated';
import { Roboto_Condensed } from 'next/font/google';

const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export default function CategoryDetail({
  params: { category },
}: {
  params: { category: string };
}) {
  const posts = allPosts.filter((post) => post.category === category);

  return (
    <div className="p-10">
      <div
        className={`${roboto.className} mb-7 font-bold text-2xl text-zinc-700 tracking-wider cursor-default`}>
        {`${category.toLocaleUpperCase()} (${posts.length})`}
      </div>
      <div>
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </div>
  );
}
