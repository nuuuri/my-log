import Link from 'next/link';

export default function Contact() {
  return (
    <div className="flex flex-col justify-center flex-shrink-0 p-6 border rounded-md w-fit border-zinc-200">
      <div>🎂 1997.03.21</div>
      <div>📨 sbfl125@gmail.com</div>
      <Link href="https://github.com/nuuuri">💻 https://github.com/nuuuri</Link>
    </div>
  );
}
