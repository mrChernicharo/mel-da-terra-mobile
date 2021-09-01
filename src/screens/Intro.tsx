import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from '../routes/index';
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

type IntroNavigationProp = StackNavigationProp<StackParams, 'Intro'>;

export default function Intro() {
	const navigation = useNavigation<IntroNavigationProp>();

	function handleBtnPressed() {
		navigation.push('Main');
	}

	return (
		<SafeAreaView>
			<View>
				<Text>Bem vindo ao Mel da Terra Verde</Text>
				<Button title="Vamos lá" onPress={handleBtnPressed} />
			</View>
		</SafeAreaView>
	);
}
