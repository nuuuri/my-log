import { ResumeContentData } from '@/types/Resume';

import ResumeContent from './Content';
import ResumeSubtitle from './Subtitle';

interface ResumeProjectsProps {
  title: string;
  data: ResumeContentData[];
  isFirstLevelOrdered?: boolean;
}

export default function ResumeProjects({
  title,
  data,
  isFirstLevelOrdered = false,
}: ResumeProjectsProps) {
  return (
    <div>
      <ResumeSubtitle>{title}</ResumeSubtitle>
      {data.map(
        ({ title, date, subtitle, description, skills, tasks }, idx) => (
          <ResumeContent
            key={idx}
            className={`flex flex-col gap-2 pb-5 mb-5 border-b md:p-0 only:border-none last:border-none last:mb-0 md:border-none md:gap-8 md:flex-row ${skills ? 'md:mb-14' : ''}`}>
            <ResumeContent.Date className="md:text-right">
              {date}
            </ResumeContent.Date>
            <div className="flex-grow">
              <ResumeContent.Title>{title}</ResumeContent.Title>
              {subtitle && (
                <ResumeContent.Subtitle>{subtitle}</ResumeContent.Subtitle>
              )}
              {description && (
                <ResumeContent.Description className="my-3 ml-2">
                  {description}
                </ResumeContent.Description>
              )}
              {skills && (
                <ResumeContent.Skills className="my-3 ml-2" skills={skills} />
              )}
              {tasks && (
                <ResumeContent.Tasks
                  data={tasks}
                  isFirstLevelOrdered={isFirstLevelOrdered}
                />
              )}
            </div>
          </ResumeContent>
        )
      )}
    </div>
  );
}
