import { IconMoonStars } from '@tabler/icons-react';
import { useTheme } from '../hooks';
import { Button } from './Button';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div>
            <Button
                icon={<IconMoonStars />}
                onClick={toggleTheme}
                ariaLabel="Toggle Dark Mode"
            />
        </div>
    );
}
