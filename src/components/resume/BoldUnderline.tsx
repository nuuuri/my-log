export default function BoldUnderline(props: { children: string }) {
  return (
    <span className="font-bold underline underline-offset-4">
      {props.children}
    </span>
  );
}
