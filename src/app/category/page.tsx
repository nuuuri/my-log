'use client';

import { Category } from '@/constant/Category';
import { allPosts } from '@/contentlayer/generated';
import { Roboto_Condensed } from 'next/font/google';
import { useState } from 'react';

const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export default function CategoryList() {
  const [selected, setSelected] = useState('');

  return (
    <div>
      <div className="flex gap-5">
        {Array.from(
          Object.values(Category).map((category) => (
            <div
              key={category}
              className={`${roboto.className} font-bold text-xl text-zinc-700 tracking-wider cursor-pointer`}
              onClick={() => setSelected(category)}>
              {category}
            </div>
          ))
        )}
      </div>
      <div>
        {allPosts
          .filter((post) => !selected || post.category === selected)
          .map((post) => (
            <div key={post._id}>{post.title}</div>
          ))}
      </div>
    </div>
  );
}
