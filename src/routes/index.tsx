import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import { IProduct } from '../utils/interfaces';
import { ThemeContext } from '../store/ThemeContext';
import { AppColors } from '../styles/colors';

import Intro from '../screens/Intro';
import Address from '../screens/Address';
import Login from '../screens/Login';
import Settings from '../screens/Settings';
import MyOrders from '../screens/MyOrders';
import NewOrder from '../screens/NewOrder';
import Header from '../components/Header';
import OrderDetails from '../screens/OrderDetails';
import Checkout from '../screens/Checkout';
import SignUp from '../screens/SignUp';
import { View } from 'react-native';

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

export type SettingsNavigationProp = StackNavigationProp<StackParams, 'Settings'>;
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
          },
          headerTintColor: theme === 'dark' ? colors.primary : colors.bg,
          headerBackTitleVisible: false,
          headerTitle: '',
          headerRight: () => <Header />,
        }}
      >
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="MyOrders" component={MyOrders} />
        <Stack.Screen
          name="NewOrder"
          component={NewOrder}
          options={({ navigation, route }) => ({
            headerLeft: () => null,
          })}
        />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
