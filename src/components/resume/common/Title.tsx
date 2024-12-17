interface TitleProps {
  children: string;
}

export default function Title({ children }: TitleProps) {
  return (
    <h1 className="w-full mt-10 mb-6 text-3xl font-medium tracking-widest text-blue-600 border-b md:mt-16 border-zinc-300">
      {children.toUpperCase()}
    </h1>
  );
}
