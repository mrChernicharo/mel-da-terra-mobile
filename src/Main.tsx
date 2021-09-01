import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

import { mainStyles } from './styles/styles';
import { ThemeContext } from './store/ThemeContext';

import Header from './components/Header';
import BuyButton from './components/BuyButton';

export default function Main() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	const statusBarTheme = theme === 'dark' ? 'light' : 'dark';

	const s = mainStyles(theme);

	return (
		<View style={s.container}>
			<StatusBar style={statusBarTheme} />
			<Header />

			<View style={s.main}>
				<Text style={s.heading}>
					A pureza do <Text style={s.highText}>mel cru</Text>
				</Text>
			</View>

			<BuyButton />
		</View>
	);
}
