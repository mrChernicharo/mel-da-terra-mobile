import React, { useContext } from 'react';
import { SafeAreaView, View, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';

import { SettingsNavigationProp } from '../routes/index';

import { ThemeContext } from '../store/ThemeContext';
import { styles } from '../styles/settings';

import splash from '../assets/splash2.jpg';

export default function Settings() {
	const navigation = useNavigation<SettingsNavigationProp>();

	const { theme } = useContext(ThemeContext);
	const s = styles(theme);

	function handleBtnPressed() {
		navigation.push('Address');
	}

	return (
		<SafeAreaView style={s.container}>
			<ImageBackground source={splash} resizeMode="cover" style={s.image}>
				<View>
					<Text>Bem vindo ao Mel da Terra Verde</Text>
					<Button title="Vamos lá" onPress={handleBtnPressed} />
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
}
