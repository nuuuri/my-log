/* eslint-disable react/jsx-sort-props */
/* 내용 파악을 쉽게 하기 위하여 해당 파일에서는 props 순서를 정렬하지 않음 */

import { Metadata } from 'next';

import ResumeContact from '@/components/Resume/Contact';
import ResumeIntroduce from '@/components/Resume/Introduce';
import ResumeTitle from '@/components/Resume/Title';

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
      {/*
      <Skills />
      <Experiences />
      <Projects />
      <ETC />
      <Education /> */}
    </div>
  );
}
