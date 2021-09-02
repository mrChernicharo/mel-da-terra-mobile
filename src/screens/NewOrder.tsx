import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from '../routes/index';
import React from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground } from 'react-native';
import splash from '../assets/splash2.jpg';
import { Button } from 'react-native-elements';
import { styles } from '../styles/intro';
import { useContext } from 'react';
import { ThemeContext } from '../store/ThemeContext';

type IntroNavigationProp = StackNavigationProp<StackParams, 'Intro'>;
interface IIntroProps {
	theme: string;
}

export default function NewOrder() {
	const navigation = useNavigation<IntroNavigationProp>();
	const { theme } = useContext(ThemeContext);
	const s = styles(theme);

	function handleBtnPressed() {
		navigation.push('MyOrders');
	}

	return (
		<SafeAreaView style={s.container}>
			<ImageBackground
				source={splash}
				resizeMode="cover"
				style={s.bgImage}
			>
				<View>
					<Text>Novo Pedido</Text>
					<Button title="Vamos lá" onPress={handleBtnPressed} />
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
}
