import { List as ListType } from '@/types/List';

interface ListProps {
  className?: string;
  data: ListType[];
  level?: number;
}

export default function List({ className, data, level = 1 }: ListProps) {
  return (
    <ul className={level === 1 ? 'pl-8' : 'pl-10'}>
      {data.map(
        ({ text, children }, idx) =>
          text && (
            <div key={idx}>
              <li
                className={`py-[2px] tracking-normal last:pb-1 ${level === 1 ? 'mt-1 font-medium text-[17px] dark:!text-white' : 'font-light text-base'} ${className}`}
                dangerouslySetInnerHTML={{ __html: text }}></li>
              {children && <List data={children} level={level + 1} />}
            </div>
          )
      )}
    </ul>
  );
}
