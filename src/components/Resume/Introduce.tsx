interface ResumeIntroduceProps {
  data: string[];
}

export default function ResumeIntroduce({ data }: ResumeIntroduceProps) {
  return (
    <ul className="break-keep">
      {data.map((text, idx) => (
        <li key={idx}>{text}</li>
      ))}
    </ul>
  );
}
