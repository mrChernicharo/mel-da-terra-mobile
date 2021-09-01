import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from '..';
import Intro from '../screens/Intro';
import Address from '../screens/Address';
import Login from '../screens/Login';
import Settings from '../screens/Settings';
import MyOrders from '../screens/MyOrders';
import NewOrder from '../screens/NewOrder';

export type IRouteProps = {
	theme: string;
};

export type StackParams = {
	Intro: IRouteProps;
	Address: IRouteProps;
	Main: IRouteProps;
	Login: IRouteProps;
	Settings: IRouteProps;
	NewOrder: IRouteProps;
	MyOrders: IRouteProps;
};

export default function Routes() {
	const Stack = createStackNavigator<StackParams>();
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="Intro"
			>
				<Stack.Screen name="Intro" component={Intro} options={{}} />
				<Stack.Screen name="Address" component={Address} options={{}} />
				<Stack.Screen name="Login" component={Login} options={{}} />
				<Stack.Screen name="Main" component={Main} />
				<Stack.Screen name="Settings" component={Settings} />
				<Stack.Screen name="MyOrders" component={MyOrders} />
				<Stack.Screen name="NewOrder" component={NewOrder} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
