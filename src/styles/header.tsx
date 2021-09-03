import { StyleSheet } from 'react-native';
import { AppColors } from './colors';

const styles = (theme: string) => {
	const colors = AppColors(theme);
	return StyleSheet.create({
		container: {
			// width: 100,
			width: '100%',
			height: 40,
			backgroundColor: theme === 'dark' ? colors.bg : colors.primary,
			paddingTop: 40,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		text: {
			color: colors.text,
			fontSize: 16,
			fontWeight: '900',
		},
	});
};
export default styles;
