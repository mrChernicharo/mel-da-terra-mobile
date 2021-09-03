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
		productContainer: {},
		melesContainer: {
			paddingVertical: 20,
		},
		amountContainer: {
			// borderWidth: 3,
			flex: 1,
		},
		buttonContainer: {
			alignItems: 'center',
			paddingBottom: 100,
		},
		listContainer: {
			paddingHorizontal: 10,
			paddingVertical: 10,
		},
		numericInputContainer: {
			alignItems: 'center',
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
		button: {
			width: 300,
			backgroundColor: colors.accent,
			paddingTop: 12,
			paddingBottom: 10,
		},
		buttonText: {
			fontSize: 20,
			height: 30,
		},
	});
};

export default styles;
