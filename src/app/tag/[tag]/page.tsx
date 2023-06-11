export default function TagDetail({
  params: { tag },
}: {
  params: { tag: string };
}) {
  return <div>tag : {tag}</div>;
}
