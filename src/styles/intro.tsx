import { StyleSheet } from 'react-native';
import { IAppTheme } from '../store/ThemeContext';
import { AppColors } from './colors';

const styles = (theme: IAppTheme) => {
	const colors = AppColors(theme);

	return StyleSheet.create({
		container: {
			flex: 1,
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
		bottomLinkBox: {
			flexDirection: 'row',
			paddingTop: 6,
		},
		linkText: { fontSize: 18, fontWeight: '600', color: colors.accent },
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
	});
};
export { styles };
