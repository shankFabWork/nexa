import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react'; // Ensure installed via: npm i lucide-react

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    // Default to light mode if not set
    const enabled = savedTheme === 'dark';
    setIsDark(enabled);
    document.documentElement.classList.toggle('dark', enabled);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 m-4 rounded-full border border-gray-300 dark:border-gray-600 text-yellow-600 dark:text-yellow-300 bg-white dark:bg-gray-800 transition"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
