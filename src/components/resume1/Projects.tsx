import ResumeItem from '@/components/resume/common/ResumeItem';
import Title from '@/components/resume/common/Title';

import { projects } from '@/constants/resume/projects';

export default function Projects() {
  return (
    <div>
      <Title>project</Title>
      {projects.map((project, idx) => (
        <ResumeItem key={idx}>
          <ResumeItem.Title title={project.title} />
          <ResumeItem.Date date={project.date} />
          <ResumeItem.Company company={project.company} />
          <ResumeItem.Description description={project.description} />
          <ResumeItem.Skills skills={project.skills} />
          <ResumeItem.Tasks tasks={project.tasks} type="PROJECT" />
        </ResumeItem>
      ))}
    </div>
  );
}
