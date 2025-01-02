import { classNames } from '@/utils';

interface TitleProps {
  children: string;
}

export default function Title({ children }: TitleProps) {
  return (
    <div
      className={classNames(
        'w-full mt-12 mb-6 border-b border-zinc-300',
        'font-semibold text-3xl text-blue-600 tracking-widest',
        'dark:text-white md:mt-20'
      )}>
      {children.toUpperCase()}
    </div>
  );
}
