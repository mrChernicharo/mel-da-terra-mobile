import { StyleSheet } from 'react-native';
import { IAppTheme } from '../store/ThemeContext';
import { AppColors } from './colors';

const styles = (theme: IAppTheme) => {
	const colors = AppColors(theme);

	return StyleSheet.create({
		container: {
			backgroundColor: colors.bg,
			height: '100%',
		},
		wrapper: {
			// borderWidth: 3,
			maxHeight: 100,
			flexDirection: 'row',
		},
		text: {
			color: colors.text,
		},
		headingText: {
			color: colors.text,
			fontSize: 20,
			fontWeight: '600',
			textAlign: 'left',
			marginBottom: 4,
		},
		priceText: {
			color: colors.text,
			fontSize: 20,
			fontWeight: '600',
			position: 'absolute',
			bottom: 5,
			right: 14,
		},
		img: {
			maxWidth: 60,
			maxHeight: 80,
			overflow: 'visible',
		},

		imgContainer: {
			// minHeight: 100,
			// width: 60,
			justifyContent: 'center',
		},
		infoContainer: {
			width: 260,
			height: 100,
			// justifyContent: 'space-between',
			// paddingVertical: 8,
			paddingHorizontal: 14,
		},
	});
};

export default styles;
