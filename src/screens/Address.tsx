import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from '../routes/index';
import React from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground } from 'react-native';
import splash from '../assets/splash2.jpg';
import { Button } from 'react-native-elements';
import { screenStyles } from '../styles/address';

type AddressNavigationProp = StackNavigationProp<StackParams, 'Address'>;
interface IAddressProps {
	theme: string;
}

export default function Address({ theme }: IAddressProps) {
	const navigation = useNavigation<AddressNavigationProp>();

	const s = screenStyles(theme);

	function handleBtnPressed() {
		navigation.push('Main', { theme });
	}

	return (
		<SafeAreaView style={s.container}>
			<ImageBackground source={splash} resizeMode="cover" style={s.image}>
				<View>
					<Text>Informe o endereço para entrega</Text>
					<Button title="Confirmar" onPress={handleBtnPressed} />
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
}
