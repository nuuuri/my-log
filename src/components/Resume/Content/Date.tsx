interface ResumeContentDateProps {
  className?: string;
  children: string;
}

export default function ResumeContentDate({
  className,
  children,
}: ResumeContentDateProps) {
  return (
    <p
      className={`flex-shrink-0 w-48 text-xl font-medium text-zinc-400 ${className}`}>
      {children}
    </p>
  );
}
