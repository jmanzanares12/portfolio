import { useEffect, useState } from 'react'

const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'light';
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export const useTheme = () => {
    const [theme, setTheme] = useState(getInitialTheme());

    useEffect(() => {
        const root = window.document.documentElement;
        const isDark = theme === 'dark';
        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const changeTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

    return { theme, changeTheme };
}