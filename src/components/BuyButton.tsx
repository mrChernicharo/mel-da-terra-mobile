import React, { useState, useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../store/ThemeContext';
import { buyButtonStyles } from '../styles/main';

export default function BuyButton() {
	const { theme } = useContext(ThemeContext);

	const s = buyButtonStyles(theme);

	function handleClick() {
		console.log('clicked');
	}
	return (
		<View style={s.container}>
			<Button
				buttonStyle={s.button}
				titleStyle={s.buttonTitle}
				title="Fazer Pedido"
				iconRight
				icon={<Ionicons name="md-cart" size={32} color="white" />}
				onPress={handleClick}
			/>
		</View>
	);
}
