import Project from '@/components/resume/common/Project';
import Title from '@/components/resume/common/Title';

export default function Education() {
  return (
    <>
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
    </>
  );
}
