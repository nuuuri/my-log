import PostCard from '@/components/PostCard';
import { allPosts } from '@/contentlayer/generated';
import { Roboto_Condensed } from 'next/font/google';

const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export default function Home() {
  const posts = allPosts.sort((a, b) => -a.date.localeCompare(b.date));

  return (
    <div>
      <div className="h-96 bg-slate-200" />
      <div className="p-10 ">
        <div
          className={`${roboto.className} font-bold text-xl text-zinc-700 tracking-wider cursor-default`}>
          RECENT POSTS
        </div>
        <div className="flex flex-col gap-12 py-4">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
