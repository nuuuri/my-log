interface TagProps {
  className?: string;
  children: string;
}

export default function Tag({ className, children }: TagProps) {
  return (
    <span
      className={`h-fit px-1 py-[1px] rounded-[4px] bg-zinc-500  text-xs text-white ${className}`}>
      {children}
    </span>
  );
}
