import { ReactNode } from 'react';

import { classNames } from '@/utils';

import { ResumeContent } from '../../model/resume-type';
import List from '../list';
import Tag from '../tag';

interface ContentProps extends ResumeContent {
  className?: string;
  isFirstLevelOrdered?: boolean;
  titleTag?: string;
  children?: ReactNode;
}

function ContentMain({
  title,
  titleTag,
  date,
  subtitle,
  description,
  skills,
  tasks,
  className,
  isFirstLevelOrdered = false,
  children,
}: ContentProps) {
  return (
    <div
      className={classNames(
        'mb-5 pb-5 last:mb-0 md:mb-14 md:p-0',
        'border-b only:border-none last:border-none md:border-none',
        className || ''
      )}>
      <div
        className={classNames(
          'flex flex-col gap-2 md:flex-row md:gap-8',
          children ? 'mb-1' : ''
        )}>
        <ContentDate>{date}</ContentDate>
        <div>
          <div className="flex gap-2">
            <ContentTitle>{title}</ContentTitle>
            {titleTag && (
              <Tag className="!py-1 mt-0.5 font-semibold">{titleTag}</Tag>
            )}
          </div>
          {subtitle && <ContentSubtitle>{subtitle}</ContentSubtitle>}
          {description && (
            <ContentDescription>{description}</ContentDescription>
          )}
          {skills && <ContentSkillList data={skills} />}
          {tasks && (
            <List data={tasks} isFirstLevelOrdered={isFirstLevelOrdered} />
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

function ContentTitle({
  className,
  children,
}: {
  className?: string;
  children: string;
}) {
  return (
    <div
      className={classNames(
        'pb-1 text-xl font-semibold tracking-wide',
        className || ''
      )}>
      {children}
    </div>
  );
}

function ContentSubtitle({
  className,
  children,
}: {
  className?: string;
  children: string;
}) {
  return (
    <div
      className={classNames(
        'pb-1 font-medium text-zinc-550 whitespace-pre-wrap',
        className || ''
      )}>
      {children}
    </div>
  );
}

function ContentDate({
  className,
  children,
}: {
  className?: string;
  children: string;
}) {
  return (
    <div
      className={classNames(
        'flex-shrink-0 w-48 text-xl font-semibold text-zinc-450 md:text-right',
        className || ''
      )}>
      {children}
    </div>
  );
}

function ContentDescription({ children }: { children: string }) {
  return (
    <blockquote
      className={classNames(
        'my-3 ml-2 border-l-[3px] text-sm border-zinc-400 text-zinc-400'
      )}>
      <p
        className="ml-5 break-words leading-relaxed"
        dangerouslySetInnerHTML={{ __html: children || '' }}
      />
    </blockquote>
  );
}

function ContentSkillList({ data }: { data: string[] }) {
  return (
    <div className="flex flex-wrap gap-1 my-3 ml-2">
      {data.map((skill) => (
        <Tag key={skill}>{skill}</Tag>
      ))}
    </div>
  );
}

const Content = Object.assign(ContentMain, {
  Title: ContentTitle,
  Subtitle: ContentSubtitle,
  Date: ContentDate,
  Description: ContentDescription,
  SkillList: ContentSkillList,
});

export default Content;
