import { useTheme as useNextTheme } from 'next-themes';
import { useCallback } from 'react';

import { Theme } from '../model/theme-type';

export const useTheme = () => {
  const { theme, setTheme } = useNextTheme();

  const toggleTheme = useCallback(() => {
    if (theme === Theme.LIGHT) {
      setTheme(Theme.DARK);
    } else {
      setTheme(Theme.LIGHT);
    }
  }, [theme, setTheme]);

  return { theme, toggleTheme };
};
