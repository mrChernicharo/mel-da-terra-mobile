import React, { createContext, useState } from 'react';

export type IAppTheme = 'light' | 'dark';

export interface IThemeContext {
	theme: IAppTheme;
	toggleTheme: () => void;
}

export interface IThemeContextProviderProps {
	children: JSX.Element[] | JSX.Element;
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

	return (
		<ThemeContext.Provider value={context}>
			{children}
		</ThemeContext.Provider>
	);
}
