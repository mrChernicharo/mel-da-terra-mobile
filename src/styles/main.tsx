import { StyleSheet } from 'react-native';

const mainStyles = (colorScheme: string) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
			color: colorScheme === 'dark' ? '#fff' : '#000',
			alignItems: 'center',
		},
		main: {
			flex: 1,
			borderWidth: 2,
			borderColor: 'orange',
		},
		heading: {
			fontSize: 32,
			color: colorScheme === 'dark' ? '#fff' : '#000',
		},
		highText: {
			fontWeight: '900',
			color: '#eecd3e',
		},
	});

const headerStyles = (colorScheme: string) =>
	StyleSheet.create({
		container: {
			width: '100%',
			height: 120,
			borderBottomWidth: 4,
			borderColor: colorScheme === 'dark' ? 'orange' : 'lightblue',
			backgroundColor: colorScheme === 'dark' ? '#000' : '#eecd3e',
			paddingTop: 40,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		text: {
			color: colorScheme === 'dark' ? '#fff' : '#000',
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

const buyButtonStyles = (colorScheme: string) =>
	StyleSheet.create({
		container: {
			width: '100%',
			borderWidth: 2,
			borderColor: 'orange',
			paddingHorizontal: 40,
			paddingBottom: 60,
			paddingTop: 20,
			backgroundColor: colorScheme === 'dark' ? '#000' : '#eecd3e',
		},
		button: {
			backgroundColor: colorScheme === 'dark' ? '#eecd3e' : 'lightblue',
		},
		buttonTitle: {
			fontSize: 32,
			fontWeight: '700',
			marginRight: 5,
		},
	});

export { headerStyles, mainStyles, buyButtonStyles };
