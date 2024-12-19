import { ResumeContentData } from '@/types/Resume';

export const project2: ResumeContentData = {
  title: '디지털 앱북 플랫폼 & 플레이어 개발',
  subtitle: '(주)티맥스알지',
  date: '2023.01 ~ 2024.02',
  description:
    '디지털 앱북을 제작 및 배포할 수 있는 Low Code 저작도구와  다양한 뷰어 기능을 포함한 플레이어를 개발하였습니다. <br/>2023 에듀테크 코리아 페어에 참가하여 참여자들이 직접 플레이어 기능을 체험할 수 있도록 부스 시연을 진행하였습니다.',
  skills: [
    'React',
    'TypeScript',
    'MobX',
    'styled-components',
    'Three.js',
    'Storybook',
    'MSW',
    'GitLab CI/CI',
    'Docker',
    'Nginx',
    'HyperCloud',
    'GAIA(사내 개발 프레임워크)',
  ],
  tasks: [
    {
      text: '다양한 뷰어 서비스 설계 및 개발',
      children: [
        {
          text: '메모, 북마크, 보관함, 화면 확대/축소, 목차 기능 개발',
        },
        {
          text: '브라우저별 웹/모바일 기본 Context Menu 제어 및 Custom Context Menu 구현',
        },
        {
          text: '본문 내 텍스트/이미지 스크랩 기능 및 OX 퀴즈 서비스 개발',
        },
        {
          text: '데스크탑, 태블릿, 모바일 반응형 UI 적용',
        },
        { text: 'PDF to HTML 라이브러리를 활용한 PDF import 기능 구현' },
      ],
    },
    {
      text: '다중 Element에 대한 형광펜 서비스 설계 및 개발',
      children: [
        {
          text: '형광펜 데이터 저장을 위한 Element 기반 Custom Selection 구조 설계',
        },
        {
          text: 'Node 및 Element 데이터 처리 로직 구현',
          children: [
            {
              text: 'TextNode에 대한 parentElement 및 offset 추출 로직 구현',
            },
            {
              text: 'Element, offset 데이터를 통한 anchorNode, focusNode 추출 로직 구현',
            },
          ],
        },
        {
          text: '다중 Element를 드래그하는 경우에 대한 Range 파싱 로직 구현',
          children: [
            {
              text: '여러 HTML 요소에 걸쳐 생성된 Range에 대한 파싱 및 span 태그 삽입 로직 구현',
            },
            { text: '역방향으로 생성된 Range 처리 로직 구현' },
          ],
        },
        {
          text: '형광펜이 겹치는 경우 처리 로직 구현',
          children: [
            {
              text: 'span 태그가 중복되어 생성되지 않도록 경우에 따른 span 태그 분리 로직 구현',
            },
            { text: '겹치는 범위에 대한 RGB 색상 혼합 로직 구현' },
          ],
        },
      ],
    },
    {
      text: 'TTS 오디오 플레이어 서비스 설계 및 개발',
      children: [
        {
          text: 'TTS AI 바이너리 데이터 인코딩을 통한 Blob 객체 생성 로직 구현',
        },
        {
          text: '현재 재생 중인 텍스트에 형광펜 기능 적용',
        },
      ],
    },
    {
      text: 'Three.js 웹 3D 컨텐츠 개발',
      children: [
        {
          text: '키보드 이벤트에 의한 1인칭 카메라 제어 및 캐릭터 이동 기능 개발',
        },
        {
          text: '캐릭터 상태에 따른 다양한 애니메이션 적용',
        },
      ],
    },
    {
      text: '정부 사업 K-클라우드 프로젝트 사업 대응',
      children: [
        {
          text: '사업 제안서, 착수보고, 최종보고서 등 프로젝트의 핵심 문서 작성 및 관리',
        },
        {
          text: '플랫폼 호환성 확인서비스 및 클라우드 서비스 확인제 인증 대응',
        },
      ],
    },
    {
      text: '성능 개선 및 최적화 진행',
      children: [
        {
          text: 'Lazy Loading 적용을 통한 페이지 로딩 속도 79.8% 개선 (FCP 8.9초 → 1.8초로 단축)',
        },
        {
          text: 'compression 및 대용량 이미지 제거를 통한 렌더링 시간 82.7% 개선 (LCP 64.3초 → 11.1초로 단축)',
        },
      ],
    },
    {
      text: 'CI/CD 파이프라인 구축',
      children: [
        {
          text: 'kubernetes 기반 사내 클라우드 환경에서 Deployment, Service 구성 및 Ingress 설정',
        },
        {
          text: 'GitLab Runner를 활용하여 CI 자동화 테스트 및 CD 파이프라인 설계 및 구현으로 배포 자동화 구축',
          children: [
            {
              text: '캐싱 기법 적용으로 빌드 시간 60% 개선 (약 10분 → 4분으로 단축)',
            },
          ],
        },
      ],
    },
  ],
};
