import { Poppins } from 'next/font/google';
import Link from 'next/link';
import tw from 'tailwind-styled-components';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const Menu = tw(Link)`
  py-3
  font-semibold
  text-zinc-500
  hover:text-zinc-800
`;

export default function LNB() {
  return (
    <div
      className={`${poppins.className} flex flex-col justify-center items-center w-80 bg-zinc-100`}>
      <div className="mb-2 text-3xl font-bold cursor-default">My Log</div>
      <div className="font-light mb-14 text-sm text-zinc-400 tracking-wider cursor-default">
        Blog Project With Next.js
      </div>
      <Menu href="/">Home</Menu>
      <Menu href="/category">Category</Menu>
      <Menu href="/tag">Tags</Menu>
      <Menu href="/">About</Menu>
      <Menu href="https://github.com/nuuuri">Github</Menu>
      <div className="h-32" />
    </div>
  );
}
