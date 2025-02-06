import { classNames } from '@/utils';

import { PostList } from '@/features/post';

export default function Home() {
  return (
    <div className="max-w-3xl m-auto">
      <div
        className={classNames(
          'mb-5 text-2xl font-bold tracking-widest text-point'
        )}>
        전체글
      </div>
      <PostList />
    </div>
  );
}
