import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from '../routes/index';
import React from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground } from 'react-native';
import splash from '../assets/splash2.jpg';
import { Button } from 'react-native-elements';
import { screenStyles } from '../styles/myOrders';

type MyOrdersNavigationProp = StackNavigationProp<StackParams, 'MyOrders'>;
interface IMyOrdersProps {
	theme: string;
}

export default function MyOrders({ theme }: IMyOrdersProps) {
	const navigation = useNavigation<MyOrdersNavigationProp>();

	const s = screenStyles(theme);

	function handleBtnPressed() {
		navigation.push('Intro', { theme });
	}

	return (
		<SafeAreaView style={s.container}>
			<ImageBackground source={splash} resizeMode="cover" style={s.image}>
				<View>
					<Text>Meus Pediods</Text>
					<Button title="Vamos lá" onPress={handleBtnPressed} />
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
}
