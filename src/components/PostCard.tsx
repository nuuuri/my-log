import Link from 'next/link';

import dayjs from 'dayjs';

import { PostData } from '@/types/Post';

interface PostCardProps {
  post: PostData;
}

export default function PostCard({ post }: PostCardProps) {
  const { metadata } = post;
  const { title, category, date } = metadata;

  return (
    <Link
      className="flex flex-col w-full px-2 py-4 border-b hover:bg-zinc-100 hover:dark:bg-zinc-900 border-zinc-200 last:border-none"
      href={post.slug}>
      <span className="text-sm text-point">{category.join('/')}</span>
      <div className="flex justify-between">
        <span className="text-lg">{title}</span>
        <span className="text-sm text-zinc-400">
          {dayjs(date).utc().format('YYYY.MM.DD')}
        </span>
      </div>
    </Link>
  );
}
