import { List as ListType } from '@/types/List';

interface ListProps {
  className?: string;
  data: ListType[];
  level?: number;
  type?: 'PROJECT' | 'ETC';
}

export default function List({
  className,
  data,
  level = 1,
  type = 'ETC',
}: ListProps) {
  const Tag = type === 'PROJECT' && level === 1 ? 'ol' : 'ul';

  return (
    <Tag className={level === 1 ? 'pl-6 md:pl-8' : 'pl-6 md:pl-10'}>
      {data.map(
        ({ text, children }, idx) =>
          text && (
            <div key={idx}>
              <li
                className={`py-[2px] last:pb-1 ${level === 1 ? 'mt-1 !font-medium text-[17px] tracking-normal dark:!text-white' : 'font-light text-[15px] tracking-tight'} ${className}`}
                dangerouslySetInnerHTML={{ __html: text }}></li>
              {children && <List data={children} level={level + 1} />}
            </div>
          )
      )}
    </Tag>
  );
}
