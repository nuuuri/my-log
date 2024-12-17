import { Project as ProjectType } from '@/types/Project';

import List from './List';
import Tag from './Tag';

interface ProjectProps extends ProjectType {
  type?: 'PROEJCT' | 'EXPERIENCE';
}

export default function Project({
  type = 'EXPERIENCE',
  title,
  date,
  company,
  description,
  skills,
  tasks,
}: ProjectProps) {
  return (
    <div className="flex gap-8 mb-5 overflow-hidden">
      <p className="flex-shrink-0 w-48 text-xl font-medium text-right text-zinc-400">
        {date}
      </p>
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
          <blockquote className="ml-1 my-3 border-l-[3px] text-sm border-zinc-400 text-zinc-400">
            <p
              className="ml-5 break-words"
              dangerouslySetInnerHTML={{ __html: description || '' }}
            />
          </blockquote>
        )}
        {skills && (
          <div className="flex flex-wrap gap-1 my-3 ml-1">
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
