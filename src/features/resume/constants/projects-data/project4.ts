import { ResumeContent } from '../../model/resume-type';

export const project4: ResumeContent = {
  title: '와플수학 교사용 서비스 개발',
  subtitle: '(주)티맥스알지',
  date: '2021.07 ~ 2021.11',
  description:
    '학생들의 학습 현황 확인 및 개별 학습 수준 분석 등의 학생 관리 기능을 제공하는 교사용 서비스입니다. <br/>유저 서비스 및 1:1 문의 서비스를 개발하였으며, 2021년 11월 경에 릴리즈 완료되어 여러 학교에 납품 되었습니다.',
  skills: ['React', 'TypeScript', 'MobX', 'styled-components'],
  tasks: [
    {
      text: '공통 컴포넌트 설계 및 개발',
    },
    {
      text: '유저 서비스 설계 및 개발',
    },
    {
      text: '본인 확인 서비스 설계 및 개발',
      children: [
        { text: 'NICE 본인인증 모듈을 적용한 휴대폰 인증 기능 개발' },
        { text: '인증코드 기반 이메일 인증 기능 개발' },
      ],
    },
    {
      text: '1:1 문의 게시판 설계 및 개발',
      children: [
        {
          text: 'Tree 구조의 댓글, 대댓글 기능 개발',
        },
        {
          text: '이미지 파일 다중 업로드 및 다운로드 기능 개발',
        },
      ],
    },
  ],
};
