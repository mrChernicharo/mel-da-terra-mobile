import { StyleSheet } from 'react-native';
import { IAppTheme } from '../store/ThemeContext';
import { AppColors } from './colors';

const styles = (theme: IAppTheme) => {
	const colors = AppColors(theme);

	return StyleSheet.create({
		container: {
			backgroundColor: colors.bg,
		},
		text: {
			color: colors.text,
		},
		headingText: {
			color: colors.text,
			fontSize: 24,
			fontWeight: '600',
			textAlign: 'center',
		},
	});
};

export default styles;
