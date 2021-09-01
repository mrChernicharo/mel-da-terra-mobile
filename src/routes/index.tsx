import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from '..';
import Intro from '../screens/Intro';
import Address from '../screens/Address';

export type StackParams = {
	Intro: { theme: string };
	Address: { theme: string };
	Main: { theme: string };
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
				<Stack.Screen name="Main" component={Main} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
