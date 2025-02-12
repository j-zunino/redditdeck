import { IconMoonStars } from '@tabler/icons-react';
import { useTheme } from '../hooks';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            role="button"
            aria-label="Toggle Dark Mode"
            className="max-h-fit p-2 hover:rounded-full hover:bg-gray-50 dark:hover:bg-zinc-900"
        >
            <IconMoonStars />
        </button>
    );
}
