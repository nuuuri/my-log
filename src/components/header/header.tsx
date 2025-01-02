'use client';

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';

import { useSidebarActions } from '@/components/sidebar';
import { classNames } from '@/utils';

import { ThemeToggleButton } from '@/features/theme';

import HeaderMenu from './header-menu';

export default function Header() {
  const { openSidebar } = useSidebarActions();

  return (
    <nav
      className={classNames(
        'fixed w-full h-14 px-5 border-b shadow-sm bg-background border-zinc-300',
        'dark:border-zinc-700'
      )}>
      <div className="flex items-center justify-between h-full m-auto max-w-7xl">
        <div className="flex gap-6">
          <IoMenu
            className={classNames(
              'w-6 h-6 cursor-pointer hover:text-zinc-800',
              'dark:hover:text-zinc-400'
            )}
            onClick={() => openSidebar()}
          />
          <HeaderMenu path="/" title="My Log" />
          <HeaderMenu path="/about" title="About" />
        </div>
        <div className="flex items-center gap-5">
          <ThemeToggleButton />
          <Link className="icon" href="https://github.com/nuuuri">
            <FaGithub />
          </Link>
        </div>
      </div>
    </nav>
  );
}
