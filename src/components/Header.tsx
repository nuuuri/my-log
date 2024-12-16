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
    <nav className="fixed flex items-center justify-between w-full px-5 border-b shadow-sm bg-background border-zinc-300 h-14 dark:border-zinc-700">
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
          {theme === 'LIGHT' ? <ImSun /> : <LuMoon />}
        </button>
        <Link className="icon" href="https://github.com/nuuuri">
          <FaGithub />
        </Link>
      </div>
    </nav>
  );
}
