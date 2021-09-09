import { StyleSheet } from 'react-native';
import { IAppTheme } from '../store/ThemeContext';
import { AppColors } from './colors';

const styles = (theme: IAppTheme) => {
	const colors = AppColors(theme);

	return StyleSheet.create({
		container: {
			flex: 1,
			height: 'auto',
			backgroundColor: colors.bg,
		},
		bgImage: {
			width: '100%',
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
		},
		headingText: { fontSize: 30 },
		section: {
			alignItems: 'center',
			justifyContent: 'space-between',
			height: 420,
			marginBottom: 200,
		},
		logo: {
			width: 200,
			height: 200,
		},
		text: { fontSize: 18 },
		button: {
			marginTop: 20,
			width: 240,
			backgroundColor: colors.accent,
		},
		buttonText: {
			paddingVertical: 4,
			fontSize: 24,
			fontWeight: '600',
		},
		bottomLinkBox: {
			marginTop: 24,
		},
		linkText: {
			textAlign: 'center',
			fontSize: 18,
			fontWeight: '600',
			color: colors.accent,
			marginTop: 8,
		},
	});
};
export { styles };
