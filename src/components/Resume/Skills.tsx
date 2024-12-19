import { ResumeSkillData } from '@/types/Resume';

import ResumeSubtitle from './Subtitle';

interface ResumeSkillsProps {
  data: ResumeSkillData[];
}

export default function ResumeSkills({ data }: ResumeSkillsProps) {
  return (
    <div>
      <ResumeSubtitle>Skill</ResumeSubtitle>
      <ul>
        {data.map(({ category, skills }, idx) => (
          <li key={idx} className="py-1 ml-3">
            <span className="pr-2 font-semibold">{category} : </span>
            {skills}
          </li>
        ))}
      </ul>
    </div>
  );
}
