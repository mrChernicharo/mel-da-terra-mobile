import { StyleSheet } from 'react-native';
import { IAppTheme } from '../store/ThemeContext';
import { AppColors } from './colors';

const styles = (theme: IAppTheme) => {
	const colors = AppColors(theme);

	return StyleSheet.create({
		container: {
			backgroundColor: colors.bg2,
			borderRadius: 10,

			paddingVertical: 10,
			paddingHorizontal: 6,
		},
		wrapper: {
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
		},
		priceText: {
			color: colors.text,
			fontSize: 16,
			fontWeight: '600',
			textAlign: 'right',
		},
		imgContainer: {
			// borderWidth: 3,
			maxHeight: 60,
			width: 60,
			justifyContent: 'center',
			alignItems: 'center',
		},
		image: {
			maxWidth: 40,
			maxHeight: 60,
			overflow: 'visible',
		},
		outerInfoContainer: {
			// borderWidth: 3,
			width: 280,
			justifyContent: 'space-between',
			paddingLeft: 6,
		},
		innerInfoContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		melInfo: {
			// borderWidth: 3,
			flexDirection: 'row',
			alignItems: 'center',
		},
		melCircle: {
			width: 20,
			height: 20,
			borderRadius: 10,
			marginRight: 6,
		},
	});
};

export default styles;
