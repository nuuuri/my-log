import { Metadata } from 'next';

import Contact from '@/components/resume/Contact';
import ETC from '@/components/resume/ETC';
import Education from '@/components/resume/Education';
import Experiences from '@/components/resume/Experiences';
import Introduce from '@/components/resume/Introduce';
import Projects from '@/components/resume/Projects';
import Skills from '@/components/resume/Skills';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'About | My Log',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl m-auto tracking-wide font-gothicA1">
      <h1 className="mb-1 text-4xl font-bold tracking-widest">박윤수</h1>
      <h3 className="ml-[2px] font-medium text-2xl">Frontend Engineer</h3>
      <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:gap-10">
        <Introduce />
        <Contact />
      </div>
      <Skills />
      <Experiences />
      <Projects />
      <ETC />
      <Education />
    </div>
  );
}
