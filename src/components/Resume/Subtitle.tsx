interface ResumeSubtitleProps {
  children: string;
}

export default function ResumeSubtitle({ children }: ResumeSubtitleProps) {
  return (
    <h1 className="w-full mt-12 mb-6 text-3xl font-semibold tracking-widest text-blue-600 border-b md:mt-20 border-zinc-300">
      {children.toUpperCase()}
    </h1>
  );
}
