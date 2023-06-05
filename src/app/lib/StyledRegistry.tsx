'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { useStyledRegistry } from './useStyledRegistry';

export default function StyledRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledRegistry();

  useServerInsertedHTML(() => <>{styledComponentsFlushEffect()}</>);

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
