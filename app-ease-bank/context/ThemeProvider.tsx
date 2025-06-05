// theme/ThemeContext.tsx
import _colors from '@/utils/colors';
import React, { createContext, ReactNode, useContext, useState } from 'react';

interface ThemeContextType {
    theme: ThemeType;
    taskBarColor: string;
    handleTheme: (color: ThemeType) => void;
    handleTaskBarColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<ThemeType>('dark');
    const [taskBarColor, setTaskBarColor] = useState<string>("#f7f9fc"); // default color

    const handleTheme = (color: ThemeType) => {
        setTheme(color);
    };

    const handleTaskBarColor = (color: string) => {
        setTaskBarColor(color);
    };

    return (
        <ThemeContext.Provider value={{ theme, taskBarColor, handleTheme, handleTaskBarColor }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useThemeContext must be used within a ThemeProvider');
    return context;
};