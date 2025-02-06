import { Fragment } from 'react';

import { contactData } from '@/features/resume/constants/contact-data';
import { introduceData } from '@/features/resume/constants/introduce-data';

import {
  Contact,
  Content,
  educationsData,
  etcData,
  ExperienceContent,
  experiencesData,
  projectsData,
  skillsData,
  Title,
} from '@/features/resume';

export default function About() {
  const contentData = [
    {
      title: 'project',
      data: projectsData,
      options: { isFirstLevelOrdered: true },
    },
    {
      title: 'etc',
      data: etcData,
      options: { className: '!mb-5' },
    },
    {
      title: 'education',
      data: educationsData,
    },
  ];

  return (
    <div className="max-w-5xl m-auto tracking-wide">
      <h1 className="mb-1 text-4xl font-bold tracking-widest">박윤수</h1>
      <h3 className="ml-[2px] font-medium text-2xl">Frontend Engineer</h3>
      <div className="flex flex-col justify-between gap-5 mt-5 ml-5 md:flex-row">
        <ul className="break-keep">
          {introduceData.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </ul>
        <Contact data={contactData} />
      </div>

      <Title>skill</Title>
      <ul>
        {skillsData.map(({ category, skills }, idx) => (
          <li key={idx} className="py-1 ml-3">
            <span className="pr-2 font-semibold">{category} : </span>
            {skills}
          </li>
        ))}
      </ul>

      <Title>experience</Title>
      <div>
        {experiencesData.map((data) => (
          <ExperienceContent key={data.title} {...data} />
        ))}
      </div>

      {contentData.map(({ title, data, options }) => (
        <Fragment key={title}>
          <Title>{title}</Title>
          <div>
            {data.map((data) => (
              <Content key={data.title} {...options} {...data} />
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
