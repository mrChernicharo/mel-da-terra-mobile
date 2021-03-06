import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import {
    asyncStorageGetFavoriteTheme,
    asyncStorageSetFavoriteTheme,
} from '../services/asyncStorageService';

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
    const [theme, setTheme] = useState<IAppTheme>('dark');

    function handleToggleTheme() {
        const t = theme === 'dark' ? 'light' : 'dark';
        setTheme(t);
        asyncStorageSetFavoriteTheme(t);
    }

    async function retrieveTheme() {
        const favorite = await asyncStorageGetFavoriteTheme();
        console.log('retrieved theme: ', favorite);
        setTheme(favorite);
    }

    useEffect(() => {
        retrieveTheme();
    }, []);

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
