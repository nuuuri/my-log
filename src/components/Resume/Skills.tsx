import ResumeSubtitle from './Subtitle';

interface ResumeSkillsProps {
  data: { category: string; skills: string }[];
}

export default function ResumeSkills({ data }: ResumeSkillsProps) {
  return (
    <div>
      <ResumeSubtitle>Skills</ResumeSubtitle>
      <ul>
        {data.map(({ category, skills }, idx) => (
          <li key={idx} className="ml-2 py-0.5 font-light">
            <span className="pr-2 font-semibold">{category} : </span>
            {skills}
          </li>
        ))}
      </ul>
    </div>
  );
}
