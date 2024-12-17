interface TagProps {
  children: string;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="px-1 py-[1px] rounded-[4px] bg-zinc-500  text-xs text-white">
      {children}
    </span>
  );
}
