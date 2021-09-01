import React from 'react';
import Main from './src/Main';
import { ThemeContextProvider } from './src/store/ThemeContext';
import { UserContextProvider } from './src/store/UserContext';

export default function App() {
	return (
		<ThemeContextProvider>
			<UserContextProvider>
				<Main />
			</UserContextProvider>
		</ThemeContextProvider>
	);
}
