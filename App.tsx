import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
	const [theme, setTheme] = useState('dark');
	const [statusBarTheme, setStatusBarTheme] =
		useState<StatusBarStyle>('light');

	function handleThemeToggle() {
		setTheme(t => (t === 'dark' ? 'light' : 'dark'));
		setStatusBarTheme(t => (t === 'dark' ? 'light' : 'dark'));
	}

	return (
		<View style={styles(theme).container}>
			<Text style={styles(theme).text}>
				Open up App.tsx to start working on your app!
			</Text>
			<TouchableOpacity
				style={styles(theme).button}
				onPress={handleThemeToggle}
			>
				<Text style={styles(theme).buttonText}>Toggle theme</Text>
			</TouchableOpacity>
			<StatusBar style={statusBarTheme} />
		</View>
	);
}

const styles = (colorScheme: string) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
			color: colorScheme === 'dark' ? '#fff' : '#000',
			alignItems: 'center',
			justifyContent: 'center',
		},
		text: {
			color: colorScheme === 'dark' ? '#fff' : '#000',
		},
		button: {
			backgroundColor: '#e3ba25',
			padding: 6,
		},
		buttonText: {
			fontSize: 20,
			color: colorScheme === 'dark' ? '#000' : '#fff',
		},
	});
