import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from './store/ThemeContext';
import styles from './styles/styles';

export default function Main() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	function handlePress() {
		toggleTheme();
		console;
	}

	const [statusBarTheme, setStatusBarTheme] =
		useState<StatusBarStyle>('light');

	const s = styles(theme);

	return (
		<View style={s.container}>
			<Text style={s.text}>
				Open up App.tsx to start working on your app!
			</Text>
			<TouchableOpacity style={s.button} onPress={handlePress}>
				<Text style={s.buttonText}>Toggle theme</Text>
			</TouchableOpacity>
			<StatusBar style={statusBarTheme} />
		</View>
	);
}
