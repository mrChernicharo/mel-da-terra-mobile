import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../Main';
import Intro from '../screens/Intro';

export type StackParams = {
	Intro: undefined;
	Main: undefined;
};

export default function Routes() {
	const Stack = createStackNavigator<StackParams>();
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="Intro"
			>
				<Stack.Screen name="Intro" component={Intro} />
				<Stack.Screen name="Main" component={Main} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
