'use client';

import { useCallback } from 'react';
import { LuArrowUpToLine } from 'react-icons/lu';

export default function FloadtingButton() {
  const movePageUp = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <button
      className="fixed bottom-4 right-4 flex items-center justify-center w-8 h-8 border rounded-[4px] border-zinc-200 text-zinc-600 hover:bg-zinc-300"
      onClick={movePageUp}>
      <LuArrowUpToLine className="w-5 h-5" />
    </button>
  );
}
