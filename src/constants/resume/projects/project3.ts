import { ResumeContentData } from '@/types/Resume';

export const project3: ResumeContentData = {
  title: '서술형 자동 평가 서비스 개발',
  subtitle: '(주)티맥스알지',
  date: '2022.02 ~ 2022.04',
  description:
    '에세이 자동 채점(AES), 문법 오류 교정(GEC) AI 기술을 기반으로 주제에 따른 서술형 에세이를 자동으로 채점 및 평가하는 서비스를 개발하였습니다.',
  skills: ['React', 'Vite', 'TypeScript', 'MobX', 'styled-components'],
  tasks: [
    {
      text: '대시보드 서비스 설계 및 개발',
      children: [
        { text: '차트 라이브러리를 활용한 그래프 구현 및 애니메이션 적용' },
        {
          text: 'Custom 정규분포 그래프 컴포넌트 개발',
          children: [
            { text: '라이브러리에서 미지원되는 정규분포 그래프 구현' },
            { text: '평균값, 표준편차를 활용한 정규분포 데이터 생성' },
          ],
        },
      ],
    },
    {
      text: '팀 개발 문화 개선',
      children: [
        {
          text: 'Vite 도입으로 인한 개발 서버 구동 시간 97.5% 개선 (약 40초 → 1초로 단축)',
        },
        {
          text: 'Atomic, Compound Component 디자인 패턴 및  BEM 방식 제안을 통한 코드 컨벤션 정립',
        },
        {
          text: '격주 간격의 기술 세미나 주최를 통한 최신 기술 트렌드 공유 및 개발 역량 강화',
        },
      ],
    },
  ],
};
