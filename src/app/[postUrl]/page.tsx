import { allPosts } from '@/contentlayer/generated';
import moment from 'moment';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function PostDetail({
  params: { postUrl },
}: {
  params: { postUrl: string };
}) {
  const post = allPosts.find(({ url }) => url === `/${postUrl}`);
  const MDXComponent = useMDXComponent(post?.body.code || '');

  if (!post) return null;

  return (
    <div className="p-10">
      <div className="mb-4 flex gap-2 items-center text-sm text-zinc-500">
        <Link href="/">Home</Link>
        {'>'}
        <Link href="/category">Category</Link>
        {'>'}
        <Link
          className="text-orange-400"
          href={post.category.toLocaleLowerCase()}>
          {post.category}
        </Link>
      </div>
      <div className={`${poppins.className} font-bold text-3xl text-zinc-700`}>
        {post.title}
      </div>
      <div className="mt-1 text-sm text-zinc-500">
        {moment(post.date).format('MMMM DD, YYYY')}
      </div>
      <div className="py-10">
        <MDXComponent />
      </div>
      <div className={`${poppins.className} mb-2 font-bold text-zinc-700`}>
        Tags
      </div>
      <div className="flex gap-3">
        {post.tags?.map((tag) => (
          <Link
            key={tag}
            className={`${poppins.className} text-sm tracking-wide hover:text-orange-400`}
            href={`/tag/${tag.toLocaleLowerCase()}`}>
            #{tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
