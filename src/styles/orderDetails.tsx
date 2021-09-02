import { StyleSheet } from 'react-native';
import { IAppTheme } from '../store/ThemeContext';
import { AppColors } from './colors';

const styles = (theme: IAppTheme) => {
	const colors = AppColors(theme);

	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: colors.bg,
		},
		listContainer: {
			paddingHorizontal: 10,
			paddingVertical: 10,
		},

		headingText: {
			color: colors.text,
			fontSize: 24,
			fontWeight: '600',
			textAlign: 'center',
			marginBottom: 10,
			marginTop: 20,
		},
		text: {
			color: colors.text,
		},
	});
};

export default styles;
