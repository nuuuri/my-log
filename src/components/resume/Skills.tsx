import Title from '@/components/resume/common/Title';

export default function Skills() {
  return (
    <>
      <Title>skill</Title>
      <div className="flex px-4">
        <ul className="w-1/2">
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
    </>
  );
}
