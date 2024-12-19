interface ResumeTitleProps {
  name: string;
  job: string;
}

export default function ResumeTitle({ name, job }: ResumeTitleProps) {
  return (
    <>
      <h1 className="mb-1 text-4xl font-bold tracking-widest">{name}</h1>
      <h3 className="ml-[2px] font-medium text-2xl">{job}</h3>
    </>
  );
}
