import { ReactNode } from 'react';

export default function AboutPage() {
  return (
    <div className="w-full !max-w-full p-20">
      <p className="text-3xl font-extrabold tracking-wider">
        박윤수 | Yunsoo Park
      </p>
      <ul className="list-disc pl-5">
        <li>
          4년차 프론트엔드 개발자로,{' '}
          <BoldUnderline>프론트엔드 개발 팀장</BoldUnderline>
          으로서의 경험이 있습니다.
        </li>
        <li>
          주도적으로 일하며 <BoldUnderline>책임감이 강하다</BoldUnderline>
          라는 말을 자주 듣습니다.
        </li>
        <li>
          <BoldUnderline>사용자 중심의 서비스</BoldUnderline>를 제공하기 위하여
          노력합니다.
        </li>
        <li>
          다양한 직무의 사람들과 <BoldUnderline>소통하며 협업</BoldUnderline>
          하는 것을 즐깁니다.
        </li>
      </ul>
      <div>
        <div>1997.03.21</div>
        <div>sbfl125@gmail.com</div>
      </div>
      <Title># S K I L L</Title>
      <Title># E X P E R I E N C E</Title>
      <Title># P R O J E C T</Title>
      <Project
        title="2025년 AI 디지털교과서 개발"
        startDate="2024.05"
        endDate="2024.09"
        description="2025년 도입되는 AI 디지털교과서의 영어, 수학 평가지 문항 콘텐츠를 개발하였습니다.\n 발행사와 SI업체 등 대규모 협업하여 수행하였으며, 약 80,000여개의 문항 콘텐츠 앱을 생산하였습니다."
      />
      <Title># A W A R D</Title>
      <Title># E D U C A T I O N</Title>
    </div>
  );
}

function BoldUnderline(props: { children: string }) {
  return (
    <span className="font-bold underline underline-offset-4">
      {props.children}
    </span>
  );
}

function Title(props: { children: string }) {
  return (
    <p className="w-full mt-5 mb-2 pb-2 border-b border-zinc-300 font-semibold text-2xl text-indigo-500 tracking-wide">
      {props.children}
    </p>
  );
}

function Project(props: {
  title: string;
  startDate: string;
  endDate: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl tracking-wide">{props.title}</p>
        <p className="text-zinc-500">
          {props.startDate} ~ {props.endDate}
        </p>
      </div>
      <p className="whitespace-pre-wrap">{props.description}</p>
      {props.children}
    </>
  );
}
