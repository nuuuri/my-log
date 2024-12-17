interface BoldUnderlineProps {
  children: string;
}

export default function BoldUnderline({ children }: BoldUnderlineProps) {
  return (
    <span className="font-bold underline underline-offset-4">{children}</span>
  );
}
