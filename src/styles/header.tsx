import { StyleSheet } from 'react-native';

const styles = (theme: string) =>
	StyleSheet.create({
		container: {
			width: '100%',
			height: 120,
			// borderColor: theme === 'dark' ? 'orange' : 'lightblue',
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
			flexDirection: 'row',
			width: 90,
			alignItems: 'center',
			justifyContent: 'space-between',
		},
	});

export default styles;
