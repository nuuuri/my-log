'use client';

import { useCallback } from 'react';
import { LuArrowUpToLine } from 'react-icons/lu';

import { classNames } from '@/utils';

export default function FloatingButton() {
  const movePageUp = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <button
      className={classNames(
        'fixed right-4 bottom-4 bg-background flex items-center justify-center w-8 h-8',
        'border border-zinc-200 rounded-[4px] text-zinc-600 hover:bg-zinc-300',
        'dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-700'
      )}
      onClick={movePageUp}>
      <LuArrowUpToLine className="w-5 h-5" />
    </button>
  );
}
