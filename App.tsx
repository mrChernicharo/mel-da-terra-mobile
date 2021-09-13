import React from 'react';
import Routes from './src/routes';
import { registerRootComponent } from 'expo';
// import { NativeModules } from 'react-native';
//   if (__DEV__) { NativeModules.DevSettings.setIsDebuggingRemotely(true) }

import { OrdersContextProvider } from './src/store/OrdersContext';
import { ThemeContextProvider } from './src/store/ThemeContext';
import { AuthContextProvider } from './src/store/AuthContext';

export default function App() {
    async function callFunction() {
        const res = await fetch('https://us-central1-mel-da-terra.cloudfunctions.net/helloWorld');
        const data = await res.json();

        console.log(data);
    }

    callFunction();
    return (
        <ThemeContextProvider>
            <AuthContextProvider>
                <OrdersContextProvider>
                    <Routes />
                </OrdersContextProvider>
            </AuthContextProvider>
        </ThemeContextProvider>
    );
}
// registerRootComponent(App);
