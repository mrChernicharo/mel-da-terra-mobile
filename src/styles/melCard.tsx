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
			paddingHorizontal: 10,

			marginHorizontal: 8,
			marginVertical: 0,
		},
		wrapper: {
			// flexDirection: 'row',
		},
		headingBox: {
			// borderWidth: 2,
			flexDirection: 'row',
		},
		descriptionBox: {
			// borderWidth: 2,
			maxWidth: 90,
		},
		text: {
			color: colors.text,
		},
		headingText: {
			color: colors.text,
			fontSize: 18,
			fontWeight: '600',
			textAlign: 'left',
		},
		hueCircle: {
			width: 20,
			height: 20,
			borderRadius: 10,
			marginLeft: 8,
		},
	});
};

export default styles;
