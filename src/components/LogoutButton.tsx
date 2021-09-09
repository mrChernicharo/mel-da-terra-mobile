import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../styles/logoutButton';
import { AppColors } from '../styles/colors';
import { useContext } from 'react-native-vector-icons/node_modules/@types/react';
import { ThemeContext } from '../store/ThemeContext';

interface ILogoutBtnProps {
	onPress: () => void;
}
export default function LogoutButton({ onPress }: ILogoutBtnProps) {
	const { theme } = useContext(ThemeContext);
	const colors = AppColors(theme);
	const s = styles(theme);
	return (
		<View>
			<Button
				style={s.button}
				icon={<MaterialIcons name="logout" size={32} />}
				onPress={onPress}
			/>
		</View>
	);
}
