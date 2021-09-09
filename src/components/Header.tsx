import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Switch } from 'react-native-elements';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { ThemeContext } from '../store/ThemeContext';
import styles from '../styles/header';
import ThemeSwitch from './ThemeSwitch';
import LogoutButton from './LogoutButton';
import { UserContext } from '../store/UserContext';

export default function Header() {
	const { theme } = useContext(ThemeContext);
	const { logOut } = useContext(UserContext);

	const s = styles(theme);

	const statusBarTheme = theme === 'dark' ? 'light' : 'dark';

	const themeIcon =
		theme === 'light' ? (
			<Ionicons name="moon-outline" size={32} color="lightblue" />
		) : (
			<Fontisto name="day-sunny" size={32} color="orange" />
		);

	function handleLogOut() {
		console.log('logout');
	}

	return (
		<View style={s.container}>
			<StatusBar style={statusBarTheme} />
			<ThemeSwitch />
			<LogoutButton onPress={handleLogOut} />
		</View>
	);
}
