interface TitleProps {
  children: string;
}

export default function Title({ children }: TitleProps) {
  return (
    <h1 className="w-full mt-16 mb-6 text-3xl font-medium tracking-widest text-blue-600 border-b border-zinc-300">
      {children.toUpperCase()}
    </h1>
  );
}
