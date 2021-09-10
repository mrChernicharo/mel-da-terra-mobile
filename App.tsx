import React from 'react';
import Routes from './src/routes';
import { registerRootComponent } from 'expo';
// import { NativeModules } from 'react-native';
//   if (__DEV__) { NativeModules.DevSettings.setIsDebuggingRemotely(true) }

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
// registerRootComponent(App);
