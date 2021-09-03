import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Switch } from 'react-native-elements';

import { Ionicons, Fontisto } from '@expo/vector-icons';
import { ThemeContext } from '../store/ThemeContext';
import styles from '../styles/header';

export default function ThemeSwitch() {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const s = styles(theme);

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
		<View style={s.themeSwitch}>
			{theme === 'dark' && themeIcon}
			<Switch
				color="orange"
				value={theme === 'dark'}
				onChange={handleChange}
			/>
			{theme === 'light' && themeIcon}
		</View>
	);
}
