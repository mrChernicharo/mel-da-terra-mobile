import { StyleSheet } from 'react-native';

const mainStyles = (colorScheme: string) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
			color: colorScheme === 'dark' ? '#fff' : '#000',
			alignItems: 'center',
		},
	});

const headerStyles = (colorScheme: string) =>
	StyleSheet.create({
		container: {
			width: '100%',
			height: 120,
			borderBottomWidth: 4,
			borderColor: 'red',
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

export { headerStyles, mainStyles };
