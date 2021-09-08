import { StyleSheet } from 'react-native';
import { IAppTheme } from '../store/ThemeContext';
import { AppColors } from './colors';

const styles = (theme: IAppTheme) => {
	const colors = AppColors(theme);

	return StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'flex-start',
			backgroundColor: colors.bg,
		},
		section: {
			paddingTop: 40,
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		sectionTop: {
			justifyContent: 'space-between',
		},
		socialSection: {
			// flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		input: {
			borderBottomColor: colors.green,
			color: colors.text,
			fontSize: 16,
			marginBottom: -20,
		},
		mailInput: {
			marginBottom: -16,
		},
		inputIcon: {
			marginBottom: -6,
		},
		button: {
			width: 300,
			backgroundColor: colors.accent,
		},
		socialButton: {
			width: 300,
			backgroundColor: colors.accent,
		},
		text: { fontSize: 18, color: colors.text, textAlign: 'center' },
		separatorText: {
			fontSize: 18,
			color: colors.text,
			marginVertical: 20,
			textAlign: 'center',
		},
		bgText: { fontSize: 18, color: colors.bgText },
		linkText: {
			fontSize: 18,
			fontWeight: '600',
			color: colors.accent,
			textAlign: 'center',
		},
		buttonText: {
			paddingVertical: 4,
			fontSize: 24,
			fontWeight: '600',
		},
		socialButtonText: {
			paddingVertical: 7,
			fontSize: 20,
			fontWeight: '600',
		},
		buttonIcon: {
			marginRight: 10,
			fontSize: 24,
			color: colors.bgText,
		},
	});
};
export default styles;
