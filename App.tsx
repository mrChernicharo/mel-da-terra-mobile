import React from 'react';
import Main from './src/Main';
import { ThemeContextProvider } from './src/store/ThemeContext';

export default function App() {
	return (
		<ThemeContextProvider>
			<Main />
		</ThemeContextProvider>
	);
}
