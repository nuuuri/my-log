import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Menu } from '@/types/Menu';

export default function HeaderMenu({ title, path }: Menu) {
  const pathname = usePathname();
  const isSelected = (path === '/about') === (pathname === '/about');

  const defaultStyle =
    'text-zinc-400 hover:text-zinc-500 dark:text-zinc-600 dark:hover:text-zinc-400';
  const selectedStyle = 'text-zinc-900 dark:text-foreground';

  return (
    <Link
      className={`font-poppins font-semibold tracking-wider ${isSelected ? selectedStyle : defaultStyle}`}
      href={path}>
      {title}
    </Link>
  );
}
