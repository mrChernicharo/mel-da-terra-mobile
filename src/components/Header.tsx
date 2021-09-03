import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Switch } from 'react-native-elements';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { ThemeContext } from '../store/ThemeContext';
import styles from '../styles/header';
import ThemeSwitch from './ThemeSwitch';

export default function Header() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	const s = styles(theme);

	const statusBarTheme = theme === 'dark' ? 'light' : 'dark';

	function handleChange() {
		toggleTheme();
	}

	const themeIcon =
		theme === 'light' ? (
			<Ionicons name="moon-outline" size={32} color="lightblue" />
		) : (
			<Fontisto name="day-sunny" size={32} color="orange" />
		);

	return (
		<View style={s.container}>
			<StatusBar style={statusBarTheme} />
		</View>
	);
}
