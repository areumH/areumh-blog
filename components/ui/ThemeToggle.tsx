import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      className="relative flex w-7 h-7 md:w-8 md:h-8 rounded-full justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
      onClick={handleTheme}
    >
      <Sun className="w-5 h-5 md:w-6 md:h-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="w-5 h-5 md:w-6 md:h-6 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
}
