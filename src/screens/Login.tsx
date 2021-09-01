import React, { useContext } from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';

import { ThemeContext } from '../store/ThemeContext';
import { LoginNavigationProp, StackParams } from '../routes/index';
import { styles } from '../styles/login';
import splash from '../assets/splash2.jpg';

interface ILoginProps {
	theme: string;
}

export default function Login() {
	const navigation = useNavigation<LoginNavigationProp>();
	const { theme } = useContext(ThemeContext);

	const s = styles(theme);

	function handleBtnPressed() {
		navigation.push('NewOrder');
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
