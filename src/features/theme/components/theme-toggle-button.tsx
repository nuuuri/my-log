import { ImSun } from 'react-icons/im';
import { LuMoon } from 'react-icons/lu';

import { useTheme } from '../hooks/use-theme';

export default function ThemeToggleButton() {
  const { toggleTheme } = useTheme();

  return (
    <button className="icon" onClick={toggleTheme}>
      <ImSun className="dark:hidden" />
      <LuMoon className="hidden dark:block" />
    </button>
  );
}
