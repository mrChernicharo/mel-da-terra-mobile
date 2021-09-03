import React from 'react';
import Main from './src';
import Header from './src/components/Header';
import Routes from './src/routes';
import { OrdersContextProvider } from './src/store/OrdersContext';
import { ThemeContextProvider } from './src/store/ThemeContext';
import { UserContextProvider } from './src/store/UserContext';

export default function App() {
	return (
		<ThemeContextProvider>
			<UserContextProvider>
				<OrdersContextProvider>
					<Routes />
				</OrdersContextProvider>
			</UserContextProvider>
		</ThemeContextProvider>
	);
}
