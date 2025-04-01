import { useState, useEffect } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'),
    );

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    return { theme, setTheme };
};
