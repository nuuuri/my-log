import Project from '@/components/resume/common/Project';
import Title from '@/components/resume/common/Title';

import { projects } from '@/constants/resume/projects';

export default function Projects() {
  return (
    <div>
      <Title>project</Title>
      {projects.map((project, idx) => (
        <Project key={idx} {...project} />
      ))}
    </div>
  );
}
