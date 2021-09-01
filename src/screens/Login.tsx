import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from '../routes/index';
import React from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground } from 'react-native';
import splash from '../assets/splash2.jpg';
import { Button } from 'react-native-elements';
import { screenStyles } from '../styles/login';

type LoginNavigationProp = StackNavigationProp<StackParams, 'Login'>;
interface ILoginProps {
	theme: string;
}

export default function Login({ theme }: ILoginProps) {
	const navigation = useNavigation<LoginNavigationProp>();

	const s = screenStyles(theme);

	function handleBtnPressed() {
		navigation.push('NewOrder', { theme });
	}

	return (
		<SafeAreaView style={s.container}>
			<ImageBackground source={splash} resizeMode="cover" style={s.image}>
				<View>
					<Text>Login</Text>
					<Button title="Confirmar" onPress={handleBtnPressed} />
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
}
