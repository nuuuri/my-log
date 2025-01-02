import Link from 'next/link';

import dayjs from 'dayjs';

import { classNames } from '@/utils';

import { Post } from '../model/post-type';

interface PostCardProps {
  post: Post;
}

export default function PostItem({ post }: PostCardProps) {
  const { metadata } = post;
  const { title, category, date } = metadata;

  return (
    <Link
      className={classNames(
        'flex flex-col w-full px-2 py-4 border-b border-zinc-200',
        'hover:bg-zinc-100 hover:dark:bg-zinc-900 last:border-none'
      )}
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
