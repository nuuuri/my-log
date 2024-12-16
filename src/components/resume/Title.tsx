export default function Title(props: { children: string }) {
  return (
    <h1 className="w-full pb-2 mt-5 mb-2 text-3xl font-medium tracking-widest text-blue-600 border-b border-zinc-300">
      {props.children.toUpperCase()}
    </h1>
  );
}
