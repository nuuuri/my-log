interface ResumeIntroduceProps {
  data: string[];
}

export default function ResumeIntroduce({ data }: ResumeIntroduceProps) {
  return (
    <ul className="my-5 ml-4 text-[15px] break-keep">
      {data.map((text, idx) => (
        <li key={idx}>{text}</li>
      ))}
    </ul>
  );
}
