interface ResumeContentTitleProps {
  className?: string;
  children: string;
}

export default function ResumeContentTitle({
  className,
  children,
}: ResumeContentTitleProps) {
  return (
    <h2 className={`pb-1 text-xl font-semibold tracking-wide ${className}`}>
      {children}
    </h2>
  );
}
