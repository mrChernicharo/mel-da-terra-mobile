import { StyleSheet } from 'react-native';
import { IAppTheme } from '../store/ThemeContext';
import { AppColors } from './colors';

const styles = (theme: IAppTheme) => {
	const colors = AppColors(theme);

	return StyleSheet.create({
		container: {},
		text: {},
		headingText: {
			fontSize: 24,
			fontWeight: '600',
			textAlign: 'center',
		},
	});
};

export default styles;
