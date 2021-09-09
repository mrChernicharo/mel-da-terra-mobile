import React, { useContext } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../styles/logoutButton';
import { AppColors } from '../styles/colors';

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
