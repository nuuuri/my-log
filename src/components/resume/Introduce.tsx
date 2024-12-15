import BoldUnderline from './BoldUnderline';

export default function Introduce() {
  return (
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
  );
}
