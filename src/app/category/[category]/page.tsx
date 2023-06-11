export default function CategoryDetail({
  params: { category },
}: {
  params: { category: string };
}) {
  return <div>category : {category}</div>;
}
