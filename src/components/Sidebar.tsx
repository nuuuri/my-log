'use client';

import { useSidebarActions, useSidebarIsOpen } from '@/stores/useSidebarStore';

export default function Sidebar() {
  const isOpen = useSidebarIsOpen();
  const { closeSidebar } = useSidebarActions();

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-black/40 backdrop-blur transition duration-200 ${isOpen ? '' : 'opacity-0 pointer-events-none'}`}
        onClick={() => closeSidebar()}
      />
      <aside
        className={`fixed top-0 w-1/3 xl:w-80 h-full bg-zinc-100 transition duration-200 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        LNB
      </aside>
    </>
  );
}
