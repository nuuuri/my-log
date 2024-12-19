import Project from '@/components/resume/common/ResumeItem';
import Title from '@/components/resume/common/Title';

import { award } from '@/constants/resume/award';

export default function ETC() {
  return (
    <div>
      <Title>ETC</Title>
      <Project {...award} />
      <Project date="2019.11" title="정보처리기사 획득" />
    </div>
  );
}
