import React from 'react';
import Main from './src';
import Routes from './src/routes';
import { ThemeContextProvider } from './src/store/ThemeContext';
import { UserContextProvider } from './src/store/UserContext';

export default function App() {
	return (
		<ThemeContextProvider>
			<UserContextProvider>
				<Routes />
			</UserContextProvider>
		</ThemeContextProvider>
	);
}
