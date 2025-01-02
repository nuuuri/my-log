import { ResumeExperienceContent } from '../../model/resume-type';

import Content from './content';

export default function ExperienceContent({
  title,
  date,
  careerPeriod,
  content,
}: ResumeExperienceContent) {
  return (
    <Content date={date} title={title} titleTag={careerPeriod}>
      {content.map(({ position, date: subDate, tasks }) => (
        <div
          key={position}
          className="flex flex-col gap-2 mb-4 md:gap-8 md:flex-row">
          <Content.Date className="!text-base !text-zinc-400">
            {subDate}
          </Content.Date>
          <div>
            <Content.Subtitle>{position}</Content.Subtitle>
            <ul className="pl-6 md:pl-10">
              {tasks.map((task) => (
                <li key={task} className="px-1 py-0.5">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </Content>
  );
}
