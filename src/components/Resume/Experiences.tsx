import { ResumeExperienceData } from '@/types/Resume';

import ResumeContent from './Content';
import ResumeSubtitle from './Subtitle';

interface ResumeExperiencesProps {
  data: ResumeExperienceData[];
}

export default function ResumeExperiences({ data }: ResumeExperiencesProps) {
  return (
    <div>
      <ResumeSubtitle>Experiences</ResumeSubtitle>
      {data.map(({ title, date, content }, idx) => (
        <ResumeContent key={idx} className="pb-5 mb-5">
          <div className="flex flex-col gap-2 mb-1 md:gap-8 md:flex-row">
            <ResumeContent.Date className="md:text-right">
              {date}
            </ResumeContent.Date>
            <ResumeContent.Title>{title}</ResumeContent.Title>
          </div>
          {content.map(({ position, date: positionDate, tasks }, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2 mb-4 md:gap-8 md:flex-row">
              <p className="w-48 text-[16px] font-semibold text-zinc-400 md:text-right">
                {positionDate}
              </p>
              <div>
                <ResumeContent.Subtitle className="!text-zinc-600">
                  {position}
                </ResumeContent.Subtitle>
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
        </ResumeContent>
      ))}
    </div>
  );
}
