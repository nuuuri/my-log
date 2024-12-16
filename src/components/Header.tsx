'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { ImSun } from 'react-icons/im';
import { IoMenu } from 'react-icons/io5';
import { LuMoon } from 'react-icons/lu';

import { useSidebarActions } from '@/stores/useSidebarStore';

import { Theme } from '@/types/Theme';

import HeaderMenu from './HeaderMenu';

export default function Header() {
  const { openSidebar } = useSidebarActions();

  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem('theme') as Theme) || 'LIGHT'
  );

  const toggleTheme = useCallback(() => {
    setTheme((state) => (state === 'LIGHT' ? 'DARK' : 'LIGHT'));
    localStorage.setItem('theme', theme === 'LIGHT' ? 'DARK' : 'LIGHT');
  }, [theme]);

  useEffect(() => {
    if (
      theme === 'DARK' ||
      (theme === 'OS' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <nav className="fixed flex items-center justify-between w-full px-5 bg-white border-b shadow-sm h-14 bg-background">
      <div className="flex gap-6">
        <IoMenu
          className="w-6 h-6 cursor-pointer text-zinc-600 hover:text-zinc-800"
          onClick={() => openSidebar()}
        />
        <HeaderMenu path="/" title="My Log" />
        <HeaderMenu path="/about" title="About" />
      </div>
      <div className="flex items-center gap-5 text-zinc-600">
        <button
          className="flex items-center justify-center cursor-pointer hover:text-zinc-800"
          onClick={toggleTheme}>
          {theme === 'LIGHT' ? (
            <ImSun className="w-5 h-5" />
          ) : (
            <LuMoon className="w-5 h-5" />
          )}
        </button>
        <Link className="hover:text-zinc-800" href="https://github.com/nuuuri">
          <FaGithub className="w-5 h-5" />
        </Link>
      </div>
    </nav>
  );
}
