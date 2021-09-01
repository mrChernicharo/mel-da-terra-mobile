import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

import { mainStyles } from './styles/main';
import { ThemeContext } from './store/ThemeContext';

import Header from './components/Header';
import BuyButton from './components/BuyButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from './routes';

type MainNavigationProp = StackNavigationProp<StackParams, 'Main'>;
interface IMainProps {
	theme: string;
}

export default function Main({ theme }: IMainProps) {
	const s = mainStyles(theme);
	const statusBarTheme = theme === 'dark' ? 'light' : 'dark';

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
