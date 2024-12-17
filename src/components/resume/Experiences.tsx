import Project from '@/components/resume/common/Project';
import Title from '@/components/resume/common/Title';

export default function Experiences() {
  return (
    <div>
      <Title>experience</Title>
      <Project
        date="2021.06 ~ 2024.10"
        experienceDate="3년 5개월"
        tasks={[
          { text: '연구원 / 프론트엔드 개발' },
          {
            text: '연구원 / 팀장 <span class="text-zinc-400 font-normal">(2023.01 ~ 2024.10)</span>',
          },
          { text: '2023년 2분기 우수사원 수상' },
        ]}
        title="(주)티맥스알지"
        type="EXPERIENCE"
      />
    </div>
  );
}
