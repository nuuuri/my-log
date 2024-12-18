import Link from 'next/link';

export default function Contact() {
  return (
    <div className="flex flex-col justify-center flex-shrink-0 w-full gap-1 p-6 border rounded-md border-zinc-200 md:w-fit">
      <div>🎂 1997.03.21</div>
      <div>📨 sbfl125@gmail.com</div>
      <Link
        href="https://github.com/nuuuri"
        rel="noopener noreferrer"
        target="_blank">
        💻 https://github.com/nuuuri
      </Link>
      <Link
        href="https://nuuuri.vercel.app/"
        rel="noopener noreferrer"
        target="_blank">
        📝 https://nuuuri.vercel.app/
      </Link>
    </div>
  );
}
