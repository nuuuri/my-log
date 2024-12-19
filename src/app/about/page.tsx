/* eslint-disable react/jsx-sort-props */
/* 내용 파악을 쉽게 하기 위하여 해당 파일에서는 props 순서를 정렬하지 않음 */

import { Metadata } from 'next';

import ResumeContact from '@/components/Resume/Contact';
import ResumeIntroduce from '@/components/Resume/Introduce';
import ResumeProjects from '@/components/Resume/Projects';
import ResumeSkills from '@/components/Resume/Skills';
import ResumeTitle from '@/components/Resume/Title';

import { projects } from '@/constants/resume/projects';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'About | My Log',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl m-auto tracking-wide font-gothicA1">
      <ResumeTitle job="Frontend Engineer" name="박윤수" />
      <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:gap-10">
        <ResumeIntroduce
          data={[
            '4년차 프론트엔드 개발자로, 프론트엔드 개발 팀장 으로서의 경험이 있습니다.',
            '주도적으로 일하며 책임감이 강하다 라는 말을 자주 듣습니다.',
            '사용자 중심의 서비스를 제공하기 위하여 노력합니다.',
            '다양한 직무의 사람들과 소통하며 협업 하는 것을 즐깁니다.',
          ]}
        />
        <ResumeContact
          data={[
            { text: '🎂 1997.03.21' },
            { text: '📨 sbfl125@gmail.com' },
            {
              text: '💻 https://github.com/nuuuri',
              link: 'https://github.com/nuuuri',
            },
            {
              text: '📝 https://nuuuri.vercel.app/',
              link: '"https://nuuuri.vercel.app/"',
            },
          ]}
        />
      </div>
      <ResumeSkills
        data={[
          { category: 'Language', skills: 'JavaScript, TypeScript, Python' },
          { category: 'Frontend', skills: 'React, Next.js, Three.js' },
          { category: 'Infra', skills: 'GitLab CI/CD, Docker, Nginx' },
        ]}
      />
      <ResumeProjects title="Project" data={projects} isFirstLevelOrdered />
      <ResumeProjects
        title="ETC"
        data={[
          {
            title: '청년 희망이음 Problem Solving 경진대회 5차 (은상)',
            subtitle: '고용노동부/인천광역시',
            date: '2020.10 ~ 2020.11',
            description:
              '전자 붓을 활용한 영유아 색칠 공부 어플리케이션(Android)을 개발하여 은상을 수상하였습니다.',
            tasks: [
              {
                text: '딥러닝을 활용한 사진 윤곽선 추출 및 윤곽선 조절 기능 개발',
              },
              {
                text: 'Canvas, Paint 기반의 색칠하기 기능 개발',
              },
            ],
          },
          {
            title: '정보처리기사 획득',
            date: '2019.11',
          },
        ]}
      />
      <ResumeProjects
        title="Education"
        data={[
          {
            title: '인하대학교',
            date: '2016.03 ~ 2021.02',
            tasks: [
              {
                text: '정보통신공학과 학사 <span class="text-zinc-400">(2016.03 ~ 2021.02)</span>',
              },
              {
                text: '정보통신공학과 제 18대 부학생회장 역임 <span class="text-zinc-400">(2018.01 ~ 2018.12)</span>',
              },
            ],
          },
        ]}
      />
    </div>
  );
}
