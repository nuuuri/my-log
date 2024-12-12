import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Menu } from '@/types/Menu';

export default function HeaderMenu({ title, path }: Menu) {
  const pathname = usePathname();

  return (
    <Link
      className={`font-poppins font-semibold ${pathname === path ? 'text-zinc-800' : 'text-zinc-400'} hover:text-zinc-800 tracking-wider`}
      href={path}>
      {title}
    </Link>
  );
}
