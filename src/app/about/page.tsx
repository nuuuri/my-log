import {
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
    <div className="max-w-5xl m-auto tracking-wide font-gothicA1">
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
        <>
          <Title>{title}</Title>
          <div>
            {data.map((data) => (
              <Content key={data.title} {...options} {...data} />
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
