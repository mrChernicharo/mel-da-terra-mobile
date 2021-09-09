import React from 'react';
import Routes from './src/routes';

import { OrdersContextProvider } from './src/store/OrdersContext';
import { ThemeContextProvider } from './src/store/ThemeContext';
import { UserContextProvider } from './src/store/UserContext';

// import { FirebaseApp, initializeApp } from 'firebase/app';
import { firebaseConfig } from './private/firebaseConfig';

export default function App() {
	// const app: FirebaseApp = initializeApp(firebaseConfig);

	return (
		<ThemeContextProvider>
			{/* <UserContextProvider app={app}> */}
			<UserContextProvider>
				<OrdersContextProvider>
					<Routes />
				</OrdersContextProvider>
			</UserContextProvider>
		</ThemeContextProvider>
	);
}
