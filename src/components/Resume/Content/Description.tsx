interface ResumeContentDescriptionProps {
  className?: string;
  children: string;
}

export default function ResumeContentDescription({
  className,
  children,
}: ResumeContentDescriptionProps) {
  return (
    <blockquote
      className={`border-l-[3px] text-sm border-zinc-400 text-zinc-400 ${className}`}>
      <p
        className="ml-5 break-words leading-relaxed"
        dangerouslySetInnerHTML={{ __html: children || '' }}
      />
    </blockquote>
  );
}
