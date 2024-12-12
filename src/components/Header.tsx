'use client';

import Link from 'next/link';
import { IoMenu } from 'react-icons/io5';

import { useSidebarActions } from '@/stores/useSidebarStore';

export default function Header() {
  const { openSidebar } = useSidebarActions();

  return (
    <div className="flex justify-between items-center w-full h-14 px-5 bg-rose-50">
      <IoMenu
        className="w-6 h-6 text-zinc-800 cursor-pointer"
        onClick={() => openSidebar()}
      />
      <Link href="/">{"Nuuuri's Blog"}</Link>
      <div />
    </div>
  );
}
