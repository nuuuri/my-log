interface ListData {
  text: string;
  children?: ListData[];
}

interface ListProps {
  data: ListData[];
  level?: number;
}

export default function List({ data, level = 1 }: ListProps) {
  return (
    <ul className={'pt-[2px] pl-10 list-disc'}>
      {data.map(
        ({ text, children }, idx) =>
          text && (
            <li
              key={idx}
              className={`py-[2px] tracking-normal ${level === 1 ? 'mt-2 font-medium text-[17px]' : 'font-light text-base'}`}>
              {text}
              {children && <List data={children} level={level + 1} />}
            </li>
          )
      )}
    </ul>
  );
}
