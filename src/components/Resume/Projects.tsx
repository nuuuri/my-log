import { ResumeProjectData } from '@/types/Resume';

import ResumeContent from './Content';
import ResumeSubtitle from './Subtitle';

interface ResumeProjectsProps {
  data: ResumeProjectData[];
}

export default function ResumeProjects({ data }: ResumeProjectsProps) {
  return (
    <div>
      <ResumeSubtitle>Project</ResumeSubtitle>
      {data.map(
        ({ title, date, subtitle, description, skills, tasks }, idx) => (
          <ResumeContent
            key={idx}
            className="flex flex-col gap-2 pb-5 mb-5 overflow-hidden border-b md:p-0 only:border-none last:border-none md:border-none md:gap-8 md:flex-row">
            <ResumeContent.Date className="flex flex-row gap-1 md:items-end md:flex-col">
              {date}
            </ResumeContent.Date>
            <div className="flex-grow">
              <ResumeContent.Title>{title}</ResumeContent.Title>
              <ResumeContent.Subtitle>{subtitle}</ResumeContent.Subtitle>
              <ResumeContent.Description className="ml-2 my-3">
                {description}
              </ResumeContent.Description>
              <ResumeContent.Skills className="my-3 ml-2" skills={skills} />
              <ResumeContent.Tasks isFirstLevelOrdered data={tasks} />
            </div>
          </ResumeContent>
        )
      )}
    </div>
  );
}
