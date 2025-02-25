import { IconMoonStars } from '@tabler/icons-react';
import { useTheme } from '../hooks';
import { ButtonIcon } from './ButtonIcon';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div>
            <ButtonIcon
                icon={<IconMoonStars />}
                onClick={toggleTheme}
                ariaLabel="Toggle Dark Mode"
            />
        </div>
    );
}
