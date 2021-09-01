import { StyleSheet } from 'react-native';
import { IAppTheme } from '../store/ThemeContext';
import { AppColors } from './colors';

const styles = (theme: IAppTheme) => {
	const colors = AppColors(theme);

	return StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: colors.bg,
		},

		section: {
			alignItems: 'center',
			justifyContent: 'space-between',
			height: 220,
			marginBottom: 200,
		},

		text: { fontSize: 18, color: colors.text },
		bgText: { fontSize: 18, color: colors.bgText },
		input: {
			// width: '100%',
			// borderBottomWidth: 2,
			borderBottomColor: colors.green,
			color: colors.text,
			fontSize: 16,
			marginBottom: -20,
			// padding: 2,
		},
		inputContainer: {},
		inputIcon: {
			// width: 32,
			// height: 32,
			marginBottom: -16,
		},
		bottomLinkBox: {
			flexDirection: 'row',
			paddingTop: 6,
		},
		linkText: { fontSize: 18, fontWeight: '600', color: colors.accent },
		button: {
			width: 240,
			backgroundColor: colors.accent,
		},
		buttonText: {
			paddingVertical: 4,
			fontSize: 24,
			fontWeight: '600',
		},
		// headingText: { fontSize: 30, color: colors.text },
		// logo: {
		// 	width: 200,
		// 	height: 200,
		// },
		// bgImage: {
		// 	width: '100%',
		// 	flex: 1,
		// 	alignItems: 'center',
		// 	justifyContent: 'center',
		// },
	});
};
export { styles };
