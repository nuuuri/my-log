import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { classNames } from '@/utils';

interface HeaderMenuProps {
  title: string;
  path: string;
}

export default function HeaderMenu({ title, path }: HeaderMenuProps) {
  const pathname = usePathname();
  const isSelected = (path === '/about') === (pathname === '/about');

  return (
    <Link
      className={classNames(
        'font-poppins font-semibold tracking-wider',
        isSelected
          ? 'text-zinc-900 dark:text-foreground'
          : 'text-zinc-400 hover:text-zinc-500 dark:text-zinc-600 dark:hover:text-zinc-400'
      )}
      href={path}>
      {title}
    </Link>
  );
}
