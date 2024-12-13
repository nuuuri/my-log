'use client';

import { useSidebarActions, useSidebarIsOpen } from '@/stores/useSidebarStore';

import { Menu } from '@/types/Menu';

import SidebarMenu from './SidebarMenu';

export default function Sidebar() {
  const isOpen = useSidebarIsOpen();
  const { closeSidebar } = useSidebarActions();

  const menuList: Menu[] = [
    { title: 'Home', path: '/' },
    {
      title: 'Category',
      path: '/category',
      children: [
        {
          title: 'Test',
          path: '/test',
        },
        { title: 'Test2', path: '/test2' },
      ],
    },
    {
      title: 'Tag',
      path: '/tag',
      children: [
        {
          title: 'Tag1',
          path: '/tag1',
        },
        {
          title: 'Tag2',
          path: '/tag2',
        },
      ],
    },
  ];

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-black/40 backdrop-blur transition duration-200 ${isOpen ? '' : 'opacity-0 pointer-events-none'}`}
        onClick={closeSidebar}
      />
      <aside
        className={`fixed top-0 w-48 md:w-60 xl:w-80 h-full p-10 bg-zinc-100 transition duration-200 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col gap-4">
          {menuList.map((menu) => (
            <SidebarMenu key={menu.path} {...menu} onClick={closeSidebar} />
          ))}
        </div>
      </aside>
    </>
  );
}
