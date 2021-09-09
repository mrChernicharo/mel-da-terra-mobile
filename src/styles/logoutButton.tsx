import { StyleSheet } from 'react-native';
import { IAppTheme } from '../store/ThemeContext';
import { AppColors } from './colors';

const styles = (theme: IAppTheme) => {
	const colors = AppColors(theme);

	return StyleSheet.create({
		container: {
			position: 'absolute',
			left: 0,
		},
		button: {
			height: 48,
			width: 48,
		},
	});
};

export default styles;
