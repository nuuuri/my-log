import { classNames } from '@/utils';

export interface ListData {
  text: string;
  children?: ListData[];
}

interface ListProps {
  className?: string;
  data: ListData[];
  level?: number;
  isFirstLevelOrdered?: boolean;
}

export default function List({
  className,
  data,
  level = 1,
  isFirstLevelOrdered = false,
}: ListProps) {
  const Tag = isFirstLevelOrdered && level === 1 ? 'ol' : 'ul';
  return (
    <Tag className="pl-6 md:pl-10">
      {data.map(
        ({ text, children }, idx) =>
          text && (
            <div key={idx}>
              <li
                className={classNames(
                  'py-0.5 last:pb-1 text-[${18 - level}px]',
                  level === 1
                    ? 'mt-1 !font-medium tracking-normal dark:!text-white'
                    : 'font-light tracking-tight',
                  className || ''
                )}
                dangerouslySetInnerHTML={{ __html: text }}></li>
              {children && <List data={children} level={level + 1} />}
            </div>
          )
      )}
    </Tag>
  );
}
