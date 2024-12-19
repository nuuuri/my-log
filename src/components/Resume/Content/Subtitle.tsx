interface ResumeContentSubtitleProps {
  className?: string;
  children: string;
}

export default function ResumeContentSubtitle({
  className,
  children,
}: ResumeContentSubtitleProps) {
  return (
    <p
      className={`pb-1 font-medium text-zinc-500 ${className}`}
      style={{ whiteSpace: 'pre-wrap' }}>
      {children}
    </p>
  );
}
