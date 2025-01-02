import { ResumeContent } from '../../model/resume-type';

export const project1: ResumeContent = {
  title: '2025년 AI 디지털교과서 개발',
  subtitle: '(주)티맥스알지',
  date: '2023.04 ~ 2024.09',
  description:
    '2025년 도입되는 AI 디지털교과서의 영어, 수학 평가지 문항 콘텐츠를 개발하였습니다.<br/>발행사와 SI업체 등 대규모 협업하여 수행하였으며, 약 80,000여개의 문항 콘텐츠 앱을 생산하였습니다.',
  skills: [
    'React',
    'TypeScript',
    'MobX',
    'Emotion',
    'Storybook',
    'GAIA(사내 개발 프레임워크)',
  ],
  tasks: [
    {
      text: '영어/수학 문항 콘텐츠 프로젝트 관리 및 개발 총괄',
      children: [
        {
          text: 'PL(Project Leader)로서 고객사(발행사), 협업사와 지속적인 소통 및 대면 미팅을 통한 업무 대응',
        },
        {
          text: '약 10만 개의 EBS 문항 데이터 분석 및 문항 콘텐츠 구조 설계',
        },
        {
          text: '사내 개발 프레임워크로 생성된 문항 콘텐츠 앱에 대한 일일 신규 배포 및 재배포 관리 <br/>(초등 3,4학년, 중등 1학년, 고등 1학년 전체 단원 범위 / 검인정 심사 기준 약 80,000개 양산 완료)',
        },
      ],
    },
    {
      text: 'AI 디지털교과서 개발 가이드라인 준수',
      children: [
        {
          text: 'UDL(Universal Design for Learning), 웹 접근성을 고려한 공통 컴포넌트 개발',
          children: [
            {
              text: 'Chrome, Safari, 삼성 인터넷 등 다양한 브라우저에 대한 크로스 브라우징 지원',
            },
            {
              text: 'Focus Trapping을 적용한 모달 컴포넌트 개발',
            },
            {
              text: '대체 텍스트 적용, 특수 문자 변환, Latex to MathML 로직 구현 등을 통한 스크린리더 지원',
            },
          ],
        },
        {
          text: '클라우드 서비스 보안 인증(CSAP) 취득',
          children: [
            {
              text: '부적절한 난수 생성 함수 제거, XSS 공격 방지 코드 삽입 등을 통한 보안 준수',
            },
          ],
        },
      ],
    },
    {
      text: '수학 주관식 문항 템플릿 설계 및 개발',
      children: [
        {
          text: '단답형, 빈칸뚫기형, 새끼문제형 등 다양한 유형의 주관식 문항 템플릿 제공',
        },
        {
          text: '드래그앤드랍 및 Latex 문법을 지원하는 초중고 수식입력기 개발',
        },
        { text: '동일 수식 판별 로직 구현 및 채점 기능 개발' },
      ],
    },
  ],
};
