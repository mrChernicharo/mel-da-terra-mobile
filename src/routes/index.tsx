import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
	createStackNavigator,
	StackNavigationProp,
} from '@react-navigation/stack';

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
import { IProduct } from '../utils/interfaces';
import OrderDetails from '../screens/OrderDetails';
import Checkout from '../screens/Checkout';
import ThemeSwitch from '../components/ThemeSwitch';

// export type IRouteProps = {
// 	theme: string;
// };

export type StackParams = {
	Intro: undefined;
	Address: undefined;
	Main: undefined;
	Login: undefined;
	Settings: undefined;
	NewOrder: undefined;
	OrderDetails: { product: IProduct };
	MyOrders: undefined;
	Checkout: undefined;
};

export type SettingsNavigationProp = StackNavigationProp<
	StackParams,
	'Settings'
>;

export type LoginNavigationProp = StackNavigationProp<StackParams, 'Login'>;
export type AddressNavigationProp = StackNavigationProp<StackParams, 'Address'>;
// prettier-ignore
export type NewOrderNavigationProp = StackNavigationProp<StackParams,'NewOrder'>;
// prettier-ignore
export type OrderDetailsNavigationProp = StackNavigationProp<StackParams,'OrderDetails'>
// prettier-ignore
export type CheckoutNavigationProp = StackNavigationProp<StackParams,'Checkout'>;

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
					headerShown: true,
					headerStyle: {
						backgroundColor:
							theme === 'dark' ? colors.bg : colors.primary,
					},
					headerTintColor:
						theme === 'dark' ? colors.primary : colors.bg,
					headerBackTitleVisible: false,
					headerTitle: '',
					headerRight: () => <ThemeSwitch />,
				}}
			>
				<Stack.Screen name="Intro" component={Intro} />
				<Stack.Screen name="Address" component={Address} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Settings" component={Settings} />
				<Stack.Screen name="Checkout" component={Checkout} />
				<Stack.Screen name="MyOrders" component={MyOrders} />
				<Stack.Screen name="NewOrder" component={NewOrder} />
				<Stack.Screen name="OrderDetails" component={OrderDetails} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
