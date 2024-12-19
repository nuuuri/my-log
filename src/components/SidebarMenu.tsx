import Link from 'next/link';

import { MenuData } from '@/types/Menu';

interface SidebarMenuProps extends MenuData {
  className?: string;
  onClick: () => void;
}

export default function SidebarMenu({
  className,
  children,
  title,
  path,
  onClick,
}: SidebarMenuProps) {
  return (
    <div className="flex flex-col gap-2">
      <Link
        className={`${className} block font-extrabold text-zinc-500 tracking-wider hover:text-zinc-800 dark:text-zinc-400 dark:hover:!text-zinc-200`}
        href={path}
        onClick={onClick}>
        {title}
      </Link>
      {children && (
        <div className="pl-5">
          {children.map((child) => (
            <SidebarMenu
              key={child.path}
              className="!font-semibold !text-zinc-400 hover:!text-zinc-800 dark:!text-zinc-500"
              {...child}
              path={`${path}${child.path}`}
              onClick={onClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}
