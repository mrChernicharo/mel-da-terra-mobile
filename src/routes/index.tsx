import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
	createStackNavigator,
	StackNavigationProp,
} from '@react-navigation/stack';

import Main from '..';
import Intro from '../screens/Intro';
import Address from '../screens/Address';
import Login from '../screens/Login';
import Settings from '../screens/Settings';
import MyOrders from '../screens/MyOrders';
import NewOrder from '../screens/NewOrder';
import { useContext } from 'react';
import { ThemeContext } from '../store/ThemeContext';
import Header from '../components/Header';
import { AppColors } from '../styles/colors';
import { IProduct } from '../utils/constants';
import OrderDetails from '../screens/OrderDetails';

export type IRouteProps = {
	theme: string;
};

export type StackParams = {
	Intro: undefined;
	Address: undefined;
	Main: undefined;
	Login: undefined;
	Settings: undefined;
	NewOrder: undefined;
	OrderDetails: { product: IProduct };
	MyOrders: undefined;
};

export type SettingsNavigationProp = StackNavigationProp<
	StackParams,
	'Settings'
>;

export type LoginNavigationProp = StackNavigationProp<StackParams, 'Login'>;

export type AddressNavigationProp = StackNavigationProp<StackParams, 'Address'>;

export type MainNavigationProp = StackNavigationProp<StackParams, 'Main'>;
export type NewOrderNavigationProp = StackNavigationProp<
	StackParams,
	'NewOrder'
>;
export type OrderDetailsNavigationProp = StackNavigationProp<
	StackParams,
	'OrderDetails'
>;

export default function Routes() {
	const { theme } = useContext(ThemeContext);
	const colors = AppColors(theme);
	const Stack = createStackNavigator<StackParams>();
	return (
		<NavigationContainer>
			<Header />

			<Stack.Navigator
				initialRouteName="Intro"
				screenOptions={{
					headerShown: false,
					headerStyle: { backgroundColor: colors.bg },
					headerTintColor: colors.primary,
				}}
			>
				<Stack.Screen name="Intro" component={Intro} />
				<Stack.Screen name="Address" component={Address} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Main" component={Main} />
				<Stack.Screen name="Settings" component={Settings} />
				<Stack.Screen name="MyOrders" component={MyOrders} />
				<Stack.Screen name="NewOrder" component={NewOrder} />
				<Stack.Screen name="OrderDetails" component={OrderDetails} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
