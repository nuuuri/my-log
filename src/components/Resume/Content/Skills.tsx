import Tag from '@/components/Tag';

interface ResumeContentSkillsProps {
  className?: string;
  skills: string[];
}

export default function ResumeContentSkills({
  className,
  skills,
}: ResumeContentSkillsProps) {
  return (
    <div className={`flex flex-wrap gap-1 ${className}`}>
      {skills.map((skill, idx) => (
        <Tag key={idx}>{skill}</Tag>
      ))}
    </div>
  );
}
