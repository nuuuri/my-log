'use client';

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { ImSun } from 'react-icons/im';
import { IoMenu } from 'react-icons/io5';

import { useSidebarActions } from '@/stores/useSidebarStore';

import HeaderMenu from './HeaderMenu';

export default function Header() {
  const { openSidebar } = useSidebarActions();

  return (
    <nav className="flex justify-between items-center w-full h-14 px-5 border-b bg-background shadow-sm">
      <div className="flex gap-6">
        <IoMenu
          className="w-6 h-6 text-zinc-600 hover:text-zinc-800 cursor-pointer"
          onClick={() => openSidebar()}
        />
        <HeaderMenu path="/" title="My Log" />
        <HeaderMenu path="/about" title="About" />
      </div>
      <div className="flex items-center gap-5 text-zinc-600">
        <ImSun className="w-5 h-5 hover:text-zinc-800 cursor-pointer" />
        <Link className="hover:text-zinc-800" href="https://github.com/nuuuri">
          <FaGithub className="w-5 h-5" />
        </Link>
      </div>
    </nav>
  );
}
