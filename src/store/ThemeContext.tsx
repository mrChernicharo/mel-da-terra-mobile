import React, { createContext, useState, useContext } from 'react';
import { ReactNode } from 'react-native-vector-icons/node_modules/@types/react';
import { AppColors } from '../styles/colors';

export type IAppTheme = 'light' | 'dark';

export interface IThemeContext {
    theme: IAppTheme;
    toggleTheme: () => void;
}

export interface IThemeContextProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext<IThemeContext>({
    theme: 'dark',
    toggleTheme: () => {},
});

export function ThemeContextProvider({ children }: IThemeContextProviderProps) {
    const [theme, setTheme] = useState<IAppTheme>('light');

    function handleToggleTheme() {
        const t = theme === 'dark' ? 'light' : 'dark';
        setTheme(t);
    }

    const context: IThemeContext = {
        theme,
        toggleTheme: handleToggleTheme,
    };

    return <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const colors = AppColors(theme);
    return { theme, colors, toggleTheme };
}
