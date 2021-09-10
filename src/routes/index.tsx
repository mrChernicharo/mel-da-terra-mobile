import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import { IProduct } from '../utils/interfaces';
import { ThemeContext } from '../store/ThemeContext';
import { AppColors } from '../styles/colors';

import Intro from '../screens/Intro/Intro';
import Address from '../screens/Address/Address';
import Login from '../screens/Login/Login';
import MyOrders from '../screens/MyOrders/MyOrders';
import NewOrder from '../screens/NewOrder/NewOrder';
import Header from '../components/Header/Header';
import OrderDetails from '../screens/OrderDetails/OrderDetails';
import Checkout from '../screens/Checkout/Checkout';
import SignUp from '../screens/SignUp/SignUp';
import { Platform, View } from 'react-native';

export type StackParams = {
    Intro: undefined;
    Address: undefined;
    Main: undefined;
    Login: undefined;
    SignUp: undefined;
    Settings: undefined;
    NewOrder: undefined;
    OrderDetails: { product: IProduct };
    MyOrders: undefined;
    Checkout: undefined;
};

export type IntroNavigationProp = StackNavigationProp<StackParams, 'Intro'>;
export type LoginNavigationProp = StackNavigationProp<StackParams, 'Login'>;
export type SignUpNavigationProp = StackNavigationProp<StackParams, 'SignUp'>;
export type AddressNavigationProp = StackNavigationProp<StackParams, 'Address'>;
export type NewOrderNavigationProp = StackNavigationProp<StackParams, 'NewOrder'>;
export type OrderDetailsNavigationProp = StackNavigationProp<StackParams, 'OrderDetails'>;
export type MyOrdersNavigationProp = StackNavigationProp<StackParams, 'MyOrders'>;
export type CheckoutNavigationProp = StackNavigationProp<StackParams, 'Checkout'>;

export default function Routes(props: any) {
    const { theme } = useContext(ThemeContext);
    const colors = AppColors(theme);
    const Stack = createStackNavigator<StackParams>();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Intro"
                screenOptions={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: theme === 'dark' ? colors.bg : colors.primary,
                        height: Platform.OS === 'android' ? 64 : 90,
                    },
                    headerTintColor: theme === 'dark' ? colors.primary : colors.bg,
                    headerBackTitleVisible: false,
                    headerTitle: '',
                    headerRight: () => <Header />,
                }}
            >
                <Stack.Screen
                    name="Intro"
                    component={Intro}
                    options={({ navigation, route }) => ({
                        headerRight: () => null,
                    })}
                />
                <Stack.Screen name="Address" component={Address} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="MyOrders" component={MyOrders} />
                <Stack.Screen name="OrderDetails" component={OrderDetails} />
                <Stack.Screen name="Checkout" component={Checkout} />
                <Stack.Screen
                    name="NewOrder"
                    component={NewOrder}
                    options={({ navigation, route }) => ({
                        headerLeft: () => null,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
