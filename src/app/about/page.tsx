import Contact from '@/components/resume/Contact';
import Introduce from '@/components/resume/Introduce';
import List from '@/components/resume/List';
import Project from '@/components/resume/Project';
import Title from '@/components/resume/Title';

export default function AboutPage() {
  return (
    <div className="max-w-4xl px-20 mx-auto tracking-wide font-gothicA1">
      <h1 className="text-4xl font-bold tracking-widest">박윤수</h1>
      <h3 className="text-2xl">Frontend Engineer</h3>
      <Introduce />
      <Contact />
      <Title>skill</Title>
      <Title>experience</Title>
      <Title>project</Title>
      <Project
        company="(주)티맥스알지"
        description="2025년 도입되는 AI 디지털교과서의 영어, 수학 평가지 문항 콘텐츠를 개발하였습니다.<br/>발행사와 SI업체 등 대규모 협업하여 수행하였으며, 약 80,000여개의 문항 콘텐츠 앱을 생산하였습니다."
        endDate="2024.09"
        startDate="2024.05"
        title="2025년 AI 디지털교과서 개발">
        <List
          data={[
            {
              text: '문항 콘텐츠 프로젝트 관리 및 개발 총괄',
              children: [
                { text: '고객사(발행사), 협업사와 소통 및 업무 대응' },
                {
                  text: '약 10만 개의 EBS 문항 데이터 분석 및 문항 콘텐츠 구조 설계',
                },
                {
                  text: '파트별 업무 분배 및 일정 관리를 통한 문항 콘텐츠 앱 양산 관리 (약 80,000개 양산 완료)',
                },
              ],
            },
            {
              text: '공통 컴포넌트 설계 및 개발',
              children: [
                { text: '웹 접근성을 고려한 컴포넌트 개발' },
                {
                  text: '텍스트 에디터 개발',
                  children: [
                    { text: '사내 프레임워크 연동을 위한 WYSIWYG 에디터 개발' },
                    { text: 'Latex to MathML 변환 기능 구현' },
                  ],
                },
              ],
            },
            {
              text: '수학 주관식 문항 템플릿 설계 및 개발',
              children: [
                { text: 'LaTex 문법을 지원하는 초중고 수식입력기 개발' },
                { text: '동일 수식 판별 로직 구현 및 채점 기능 개발' },
              ],
            },
            {
              text: '문항 콘텐츠 앱 저작도구 개발',
              children: [
                {
                  text: '사내 프레임워크 기반 Low Code 문항 콘텐츠 앱 저작도구 개발',
                },
                {
                  text: '사내 프레임워크 연동을 위한 자체 번들러 개발 및 팀 내 적용',
                },
                { text: '클라우드 서비스 보안 인증(CSAP) 대응' },
              ],
            },
            { text: '' },
          ]}
        />
      </Project>
      <Title>award</Title>
      <Title>education</Title>
    </div>
  );
}
