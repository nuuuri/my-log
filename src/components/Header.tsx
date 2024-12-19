'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useCallback } from 'react';
import { FaGithub } from 'react-icons/fa';
import { ImSun } from 'react-icons/im';
import { IoMenu } from 'react-icons/io5';
import { LuMoon } from 'react-icons/lu';

import { useSidebarActions } from '@/stores/useSidebarStore';

import { Theme } from '@/types/Theme';

import HeaderMenu from './HeaderMenu';

export default function Header() {
  const { openSidebar } = useSidebarActions();
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    if (theme === Theme.LIGHT) {
      setTheme(Theme.DARK);
    } else {
      setTheme(Theme.LIGHT);
    }
  }, [theme, setTheme]);

  return (
    <nav className="fixed w-full px-5 border-b shadow-sm bg-background border-zinc-300 h-14 dark:border-zinc-700">
      <div className="flex items-center justify-between h-full m-auto max-w-7xl">
        <div className="flex gap-6">
          <IoMenu
            className="w-6 h-6 cursor-pointer hover:text-zinc-800 dark:hover:text-zinc-400"
            onClick={() => openSidebar()}
          />
          <HeaderMenu path="/" title="My Log" />
          <HeaderMenu path="/about" title="About" />
        </div>
        <div className="flex items-center gap-5">
          <button className="icon" onClick={toggleTheme}>
            <ImSun className="dark:hidden" />
            <LuMoon className="hidden dark:block" />
          </button>
          <Link className="icon" href="https://github.com/nuuuri">
            <FaGithub />
          </Link>
        </div>
      </div>
    </nav>
  );
}
