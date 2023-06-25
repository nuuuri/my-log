import { Category } from '@/constant/Category';
import { allPosts } from '@/contentlayer/generated';
import { Roboto_Condensed } from 'next/font/google';
import Link from 'next/link';

const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export default function CategoryList() {
  return (
    <div className="p-10">
      <div
        className={`${roboto.className} mb-7 font-bold text-2xl text-zinc-700 tracking-wider cursor-default`}>
        ALL CATEGORIES
      </div>
      <div className="flex gap-10">
        {Array.from(
          Object.values(Category).map((category) => (
            <Link
              key={category}
              className={`${roboto.className} font-bold text-2xl text-zinc-700 tracking-wider cursor-pointer hover:text-orange-300`}
              href={`/category/${category}`}>
              {category}
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
