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
      className={`flex-shrink-0 w-48 text-xl font-semibold text-zinc-450 ${className}`}>
      {children}
    </p>
  );
}
