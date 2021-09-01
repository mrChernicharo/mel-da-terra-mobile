import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from '../routes/index';
import React from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground } from 'react-native';
import splash from '../assets/splash2.jpg';
import { Button } from 'react-native-elements';
import { screenStyles } from '../styles/intro';
import { useContext } from 'react';
import { ThemeContext } from '../store/ThemeContext';

type IntroNavigationProp = StackNavigationProp<StackParams, 'Intro'>;

export default function Intro() {
	const navigation = useNavigation<IntroNavigationProp>();

	const { theme } = useContext(ThemeContext);
	const s = screenStyles(theme);

	function handleBtnPressed() {
		navigation.push('Main');
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
