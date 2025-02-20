import { IconMoonStars } from '@tabler/icons-react';
import { useTheme } from '../hooks';
import { ButtonIcon } from './ButtonIcon';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <ButtonIcon
            icon={<IconMoonStars />}
            parentMethod={toggleTheme}
            role="button"
            ariaLabel="Toggle Dark Mode"
        />
    );
}
