'use client';

import { classNames } from '@/utils';

import SidebarMenu, { SidebarMenuData } from './sidebar-menu';
import { useSidebarActions, useSidebarIsOpen } from './sidebar-store';

export default function Sidebar() {
  const isOpen = useSidebarIsOpen();
  const { closeSidebar } = useSidebarActions();

  const menuList: SidebarMenuData[] = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    // {
    //   title: 'Category',
    //   path: '/category',
    //   children: [
    //     { title: 'Test', path: '/test' },
    //     { title: 'Test2', path: '/test2' },
    //   ],
    // },
  ];

  return (
    <>
      <div
        className={classNames(
          'fixed top-0 left-0 right-0 bottom-0 bg-black/40 backdrop-blur',
          'transition duration-200',
          isOpen ? '' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeSidebar}
      />
      <aside
        className={classNames(
          'fixed top-0 w-48 h-full p-10 bg-zinc-100 transition duration-200',
          'dark:bg-zinc-800 md:w-60 xl:w-80',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}>
        <div className="flex flex-col gap-4">
          {menuList.map((menu) => (
            <SidebarMenu key={menu.path} {...menu} onClick={closeSidebar} />
          ))}
        </div>
      </aside>
    </>
  );
}
