import { StyleSheet, Dimensions } from 'react-native';
import { AppColors } from './colors';

const styles = (theme: string) => {
	const colors = AppColors(theme);
	const { width } = Dimensions.get('window');
	return StyleSheet.create({
		container: {},
		widgetsContainer: {
			// borderWidth: 2,
			width: width * 0.4,
			height: 40,
			backgroundColor: theme === 'dark' ? colors.bg : colors.primary,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-end',
		},
		text: {
			color: colors.text,
			fontSize: 16,
			fontWeight: '900',
		},
	});
};
export default styles;
