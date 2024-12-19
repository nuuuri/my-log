import Link from 'next/link';

interface ContactData {
  text: string;
  link?: string;
}

interface ResumeContact {
  data: ContactData[];
}

export default function ResumeContact({ data }: ResumeContact) {
  return (
    <div className="flex flex-col justify-center flex-shrink-0 w-full h-fit gap-0.5 px-8 py-4 border rounded-md border-zinc-200 md:w-fit">
      {data.map(({ text, link }, idx) =>
        link ? (
          <Link key={idx} href={link} rel="noopener noreferrer" target="_blank">
            {text}
          </Link>
        ) : (
          <div key={idx}>{text}</div>
        )
      )}
    </div>
  );
}
