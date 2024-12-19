import { Children, isValidElement, ReactNode, useEffect } from 'react';

import { List as ListType } from '@/types/List';
import { ResumeContent, ResumeContentType } from '@/types/Resume';

import List from './List';
import Tag from './Tag';

interface ResumeItemMainProps {
  children?: ReactNode;
}

const useResumeItem = (children: ReactNode) => {
  const types = {
    date: (<ResumeItemDate date="" />).type,
    experienceDate: (<ResumeItemExperienceDate experienceDate="" />).type,
  };

  const getChildrenOfType = (type: any) => {
    return Children.toArray(children).filter(
      (child) => isValidElement(child) && child.type === type
    );
  };
  const getResumeItemDate = () => getChildrenOfType(types.date).slice(0, 1);

  const getResumeItemExperienceDate = () =>
    getChildrenOfType(types.experienceDate).slice(0, 1);

  const getRestChildren = () => {
    return Children.toArray(children).filter(
      (child) =>
        isValidElement(child) && !Object.values(types).includes(child.type)
    );
  };

  return {
    date: getResumeItemDate(),
    experienceDate: getResumeItemExperienceDate(),
    restChildren: getRestChildren(),
  };
};

function ResumeItemMain({ children }: ResumeItemMainProps) {
  const { date, experienceDate, restChildren } = useResumeItem(children);

  return (
    <div className="flex flex-col gap-2 pb-5 mb-5 overflow-hidden border-b md:p-0 only:border-none last:border-none md:border-none md:gap-8 md:flex-row">
      <div className="flex flex-row gap-1 md:items-end md:flex-col">
        {date}
        {experienceDate}
      </div>
      <div className="flex-grow">{restChildren}</div>
    </div>
  );
}

function ResumeItemDate({ date }: { date: string }) {
  return (
    <p className="flex-shrink-0 w-48 text-xl font-medium text-zinc-400">
      {date}
    </p>
  );
}

function ResumeItemCompany({ company }: { company: string }) {
  return (
    <p
      className="pb-1 font-medium text-zinc-500"
      style={{ whiteSpace: 'pre-wrap' }}>
      {company}
    </p>
  );
}

function ResumeItemDescription({ description }: { description: string }) {
  return (
    <blockquote className="ml-2 my-3 border-l-[3px] text-sm border-zinc-400 text-zinc-400">
      <p
        className="ml-5 break-words leading-relaxed"
        dangerouslySetInnerHTML={{ __html: description || '' }}
      />
    </blockquote>
  );
}

function ResumeItemSkills({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-1 my-3 ml-2">
      {skills.map((skill, idx) => (
        <Tag key={idx}>{skill}</Tag>
      ))}
    </div>
  );
}

function ResumeItemTasks({
  type,
  tasks,
}: {
  type: ResumeContentType;
  tasks: ListType[];
}) {
  return (
    <List
      // className={
      //   type === 'EXPERIENCE' ? '!p-0 !font-normal !text-base' : undefined
      // }
      data={tasks}
      type={type}
    />
  );
}

function ResumeItemExperienceDate({
  experienceDate,
}: {
  experienceDate: string;
}) {
  return (
    <p className="mr-2 px-[6px] py-[3px] rounded-[4px] text-xs text-white bg-blue-600 w-fit h-fit dark:bg-zinc-600 dark:!text-[#fff]">
      {experienceDate}
    </p>
  );
}

const ResumeItem = Object.assign(ResumeItemMain, {
  Title: ({ title }: { title: string }) => (
    <h2 className="pb-1 text-xl font-semibold tracking-wide">{title}</h2>
  ),
  Date: ResumeItemDate,
  ExperienceDate: ResumeItemExperienceDate,
  Description: ResumeItemDescription,
  Company: ResumeItemCompany,
  Skills: ResumeItemSkills,
  Tasks: ResumeItemTasks,
});

export default ResumeItem;
