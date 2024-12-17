import Contact from '@/components/resume/Contact';
import Introduce from '@/components/resume/Introduce';
import Project from '@/components/resume/Project';
import Title from '@/components/resume/Title';

import { award } from '@/constants/resume/award';
import { projects } from '@/constants/resume/projects';

export default function AboutPage() {
  return (
    <div className="max-w-5xl px-20 mx-auto tracking-wide font-gothicA1">
      <h1 className="mb-1 text-4xl font-bold tracking-widest">박윤수</h1>
      <h3 className="ml-[2px] font-medium text-2xl">Frontend Engineer</h3>
      <div className="flex items-center justify-between gap-10">
        <Introduce />
        <Contact />
      </div>
      <Title>skill</Title>
      <Title>experience</Title>
      <Title>project</Title>
      {projects.map((project, idx) => (
        <Project key={idx} {...project} />
      ))}
      <Title>ETC</Title>
      <Project {...award} />
      <Project date="2019.11" title="정보처리기사 획득" />
      <Title>education</Title>
      <Project
        date="2016.03 ~ 2021.02"
        tasks={[
          {
            text: '정보통신공학과 제 18대 부학생회장 역임 (2018.01 ~ 2018.12)',
          },
          { text: '정보통신공학과 학사 (2016.03 ~ 2021.02)' },
        ]}
        title="인하대학교"
      />
    </div>
  );
}
