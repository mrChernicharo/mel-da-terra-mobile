import { StyleSheet } from 'react-native';
import { IAppTheme } from '../store/ThemeContext';
import { AppColors } from './colors';

const styles = (theme: IAppTheme) => {
	const colors = AppColors(theme);

	return StyleSheet.create({
		container: {
			backgroundColor: colors.bg2,
			borderRadius: 10,
		},
		wrapper: {
			flexDirection: 'row',
		},
		text: {
			color: colors.text,
		},
		headingText: {
			color: colors.text,
			fontSize: 24,
			fontWeight: '600',
			textAlign: 'left',
		},
		priceText: {
			color: colors.text,
			fontSize: 28,
			fontWeight: '600',
			textAlign: 'right',
		},
		imgContainer: {
			minHeight: 140,
			width: 100,
			justifyContent: 'center',
		},
		infoContainer: {
			// borderWidth: 3,
			width: 240,
			justifyContent: 'space-between',
			paddingVertical: 8,
			paddingHorizontal: 16,
		},
	});
};

export default styles;
