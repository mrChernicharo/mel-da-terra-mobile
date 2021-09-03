import { StyleSheet } from 'react-native';

const styles = (theme: string) =>
	StyleSheet.create({
		container: {
			// width: 100,
			width: '100%',
			height: 40,
			backgroundColor: theme === 'dark' ? '#000' : '#eecd3e',
			paddingTop: 40,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		text: {
			color: theme === 'dark' ? '#fff' : '#000',
			fontSize: 16,
			fontWeight: '900',
		},
		themeSwitch: {
			// borderWidth: 2,
			// borderColor: 'green',
			flexDirection: 'row',
			width: 90,
			alignItems: 'center',
			justifyContent: 'space-between',
			position: 'absolute',
			right: 0,
			// top: 50,
			zIndex: 100,
		},
	});

export default styles;
