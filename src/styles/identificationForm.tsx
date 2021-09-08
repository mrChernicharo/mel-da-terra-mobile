import { StyleSheet } from 'react-native';
import { IAppTheme } from '../store/ThemeContext';
import { AppColors } from './colors';

const styles = (theme: IAppTheme) => {
	const colors = AppColors(theme);

	return StyleSheet.create({
		section: {
			justifyContent: 'space-between',
		},
		input: {
			borderBottomColor: colors.green,
			color: colors.text,
			fontSize: 16,
			marginBottom: -8,
		},
		inputIcon: {
			color: colors.bgText,
		},
		mailInput: {
			marginBottom: -10,
		},
		text: { fontSize: 18, color: colors.text, textAlign: 'center' },
		separatorText: {
			fontSize: 18,
			color: colors.text,
			marginVertical: 20,
			textAlign: 'center',
		},
		bgText: { fontSize: 18, color: colors.bgText },
		button: {
			minWidth: 300,
			backgroundColor: colors.accent,
		},
		buttonText: {
			paddingVertical: 4,
			fontSize: 24,
			fontWeight: '600',
		},
	});
};
export default styles;
