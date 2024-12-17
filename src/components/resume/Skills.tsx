import Title from '@/components/resume/common/Title';

export default function Skills() {
  return (
    <div>
      <Title>skill</Title>
      <div className="flex flex-col gap-4 px-4 md:flex-row">
        <ul className="md:w-1/2">
          <li>React</li>
          <li>JavaScript / TypeScript</li>
          <li>Next.js</li>
          <li>Three.js</li>
        </ul>
        <ul>
          <li>Git / GitLab</li>
          <li>GitLab CI/CD</li>
          <li>Docker</li>
          <li>Nginx</li>
        </ul>
      </div>
    </div>
  );
}
