import Link from 'next/link';

import { Menu } from '@/types/Menu';

interface SidebarMenuProps extends Menu {
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
        className={`${className} block font-extrabold text-zinc-500 hover:text-zinc-800 tracking-wider`}
        href={path}
        onClick={onClick}>
        {title}
      </Link>
      {children && (
        <div className="pl-5">
          {children.map((child) => (
            <SidebarMenu
              key={child.path}
              className="!font-semibold !text-zinc-400 hover:!text-zinc-800 "
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
