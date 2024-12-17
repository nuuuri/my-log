import { Project as ProjectType } from '@/types/Project';

import List from './List';
import Tag from './Tag';

interface ProjectProps extends ProjectType {
  type?: 'PROEJCT' | 'EXPERIENCE';
  experienceDate?: string;
}

export default function Project({
  type = 'EXPERIENCE',
  title,
  date,
  experienceDate,
  company,
  description,
  skills,
  tasks,
}: ProjectProps) {
  return (
    <div className="flex flex-col gap-2 pb-5 mb-5 overflow-hidden border-b md:p-0 only:border-none last:border-none md:border-none md:gap-8 md:flex-row">
      <div className="flex flex-row gap-1 md:items-end md:flex-col">
        <p className="flex-shrink-0 w-48 text-xl font-medium text-zinc-400">
          {date}
        </p>
        {experienceDate && (
          <p className="mr-2 px-[6px] py-[3px] rounded-[4px] text-xs text-white bg-blue-600 w-fit h-fit dark:bg-zinc-600 dark:!text-[#fff]">
            {experienceDate}
          </p>
        )}
      </div>

      <div className="flex-grow">
        <h2 className="pb-1 text-xl font-semibold tracking-wide">{title}</h2>
        {company && (
          <p
            className="pb-1 font-medium text-zinc-600"
            style={{ whiteSpace: 'pre-wrap' }}>
            {company}
          </p>
        )}
        {description && (
          <blockquote className="ml-2 my-3 border-l-[3px] text-sm border-zinc-400 text-zinc-400">
            <p
              className="ml-5 break-words"
              dangerouslySetInnerHTML={{ __html: description || '' }}
            />
          </blockquote>
        )}
        {skills && (
          <div className="flex flex-wrap gap-1 my-3 ml-2">
            {skills.map((skill, idx) => (
              <Tag key={idx}>{skill}</Tag>
            ))}
          </div>
        )}
        {tasks && (
          <List
            className={
              type === 'EXPERIENCE' ? '!p-0 !font-normal !text-base' : undefined
            }
            data={tasks}
          />
        )}
      </div>
    </div>
  );
}
