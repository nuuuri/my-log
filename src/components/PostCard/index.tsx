import { Post } from '@/contentlayer/generated';
import moment from 'moment';
import { Roboto_Condensed } from 'next/font/google';
import Link from 'next/link';
import tw from 'tailwind-styled-components';

const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const Comment = tw.div`
  relative
  before:absolute
  before:left-[-20px]
  before:top-[11px]
  before:content-['*']
  before:mr-3 
  before:w-2 
  before:leading-[1px]
   before:text-orange-300 
   before:font-bold
`;

const Tag = tw.div`
  px-1.5 py-0.5
  border
  border-zinc-300
  rounded-md
  text-xs
  text-zinc-400
  tracking-widest
  cursor-pointer
`;

export default function PostCard({ post }: { post: Post }) {
  return (
    <div>
      <div
        className={`${roboto.className} text-orange-400 tracking-widest cursor-pointer`}>
        {post.category}
      </div>
      <Link href={`/${post._raw.flattenedPath}`}>
        <div className="my-1.5 font-bold text-2xl text-zinc-700">
          {post.title}
        </div>
        <div className="flex gap-8 text-sm text-zinc-400">
          <div className="">{moment(post.date).format('MMM DD, YYYY')}</div>
          <Comment>0 comments</Comment>
        </div>
        <div className="my-5 font-medium text-zinc-500">{post.description}</div>
      </Link>
      <div className="flex gap-1.5 mt-2">
        {post.tags?.map((tag) => (
          <Tag key={tag} className={roboto.className}>{`#${tag}`}</Tag>
        ))}
      </div>
    </div>
  );
}
