import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Header from './components/Header';
import { ThemeContext } from './store/ThemeContext';
import { mainStyles } from './styles/styles';

export default function Main() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	const statusBarTheme = theme === 'dark' ? 'light' : 'dark';

	const s = mainStyles(theme);

	return (
		<View style={s.container}>
			<StatusBar style={statusBarTheme} />
			<Header />

			{/* <BuyButton /> */}
		</View>
	);
}
