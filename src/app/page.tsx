import Link from 'next/link';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { getAllPostsMetadata } from '@/utils/postUtils';

dayjs.extend(utc);

export default async function Home() {
  const allPosts = await getAllPostsMetadata();

  return (
    <div>
      <div className="text-xl font-bold">전체글</div>
      <div>
        {allPosts
          .sort(
            (a, b) =>
              new Date(a.metadata.date).getDate() -
              new Date(b.metadata.date).getDate()
          )
          .map((post, idx) => (
            <Link key={idx} href={`/${post.slug}`}>
              <div className="font-bold">{post.metadata.title}</div>
              <div className="text-sm text-gray-400">
                {dayjs(post.metadata.date).utc().format('YYYY. MM. DD')}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
