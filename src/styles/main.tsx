import { StyleSheet } from 'react-native';

const mainStyles = (theme: string) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme === 'dark' ? '#000' : '#fff',
			color: theme === 'dark' ? '#fff' : '#000',
			alignItems: 'center',
		},
		main: {
			flex: 1,
			borderWidth: 2,
			borderColor: 'orange',
		},
		heading: {
			fontSize: 30,
			color: theme === 'dark' ? '#fff' : '#000',
		},
		highText: {
			fontWeight: '900',
			color: '#eecd3e',
		},
	});

const buyButtonStyles = (theme: string) =>
	StyleSheet.create({
		container: {
			width: '100%',
			borderWidth: 2,
			borderColor: 'orange',
			paddingHorizontal: 40,
			paddingBottom: 60,
			paddingTop: 20,
			backgroundColor: theme === 'dark' ? '#000' : '#eecd3e',
		},
		button: {
			backgroundColor: theme === 'dark' ? '#eecd3e' : 'lightblue',
		},
		buttonTitle: {
			fontSize: 32,
			fontWeight: '700',
			marginRight: 5,
		},
	});

export { mainStyles, buyButtonStyles };
