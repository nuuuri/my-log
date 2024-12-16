import { ReactNode } from 'react';

interface ProjectProps {
  title: string;
  startDate: string;
  endDate: string;
  company?: string;
  description?: string;
  children?: ReactNode;
}
export default function Project({
  title,
  startDate,
  endDate,
  company,
  description,
  children,
}: ProjectProps) {
  return (
    <div className="flex gap-5 overflow-hidden">
      <p className="flex-shrink-0 mt-[2px] text-xl font-medium text-zinc-400 ">
        {startDate} ~ {endDate}
      </p>
      <div className="flex-grow">
        <h2 className="pb-1 text-[22px] font-semibold tracking-wide">
          {title}
        </h2>
        {company && (
          <p
            className="pb-1 font-medium text-zinc-600"
            style={{ whiteSpace: 'pre-wrap' }}>
            {company}
          </p>
        )}
        <blockquote className="ml-1 mt-1 mb-3 border-l-[3px] text-sm border-zinc-400 text-zinc-400">
          <p
            className="ml-5 break-words"
            dangerouslySetInnerHTML={{ __html: description || '' }}
          />
        </blockquote>
        {children}
      </div>
    </div>
  );
}
