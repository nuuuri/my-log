/* eslint-disable react/jsx-sort-props */
/* 내용 파악을 쉽게 하기 위하여 해당 파일에서는 props 순서를 정렬하지 않음 */

import { Metadata } from 'next';

import ResumeContact from '@/components/Resume/Contact';
import ResumeExperiences from '@/components/Resume/Experiences';
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
    <div className="max-w-5xl m-auto tracking-wide font-gothicA1">
      <ResumeTitle job="Frontend Engineer" name="박윤수" />
      <div className="flex flex-col justify-between gap-5 mt-5 ml-5 md:flex-row">
        <ResumeIntroduce
          data={[
            '사용자에게 가치를 전달하는 서비스를 만드는 프론트엔드 엔지니어가 되고 싶습니다.',
            '업무 수행력만큼 커뮤니케이션 능력도 중요하다고 생각합니다. 다양한 직무의 사람들과 원활히 소통하며 협업하는 과정을 즐깁니다.',
            '주도적으로 일하고 책임감이 강하다라는 말을 자주 들으며, 어떤 업무를 맡더라도 매사에 최선을 다하려 노력합니다.',
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
              link: 'https://nuuuri.vercel.app/',
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
      <ResumeExperiences
        data={[
          {
            title: '(주)티맥스알지',
            date: '2021.06 ~ 2024.10',
            careerPeriod: '총 3년 5개월',
            content: [
              {
                position: '연구본부/팀장',
                date: '2023.01 ~ 2024.10',
                tasks: [
                  '2023년 2분기 우수사원 수상',
                  '2025년 AI 디지털교과서 프로젝트 리딩 및 프론트엔드 개발',
                  '디지털 앱북 플랫폼 & 플레이어 프로젝트 리딩 및 프론트엔드 개발',
                ],
              },
              {
                position: '연구본부/연구원',
                date: '2021.06 ~ 2022.12',
                tasks: [
                  '서술형 자동 평가 서비스 프론트엔드 개발',
                  '와플수학 교사용 서비스 프론트엔드 개발',
                ],
              },
            ],
          },
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
