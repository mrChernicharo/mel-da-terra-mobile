import { StyleSheet } from 'react-native';

const styles = (colorScheme: string) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
			color: colorScheme === 'dark' ? '#fff' : '#000',
			alignItems: 'center',
			justifyContent: 'center',
		},
		text: {
			color: colorScheme === 'dark' ? '#fff' : '#000',
		},
		button: {
			backgroundColor: '#e3ba25',
			borderRadius: 16,
			paddingHorizontal: 10,
			paddingVertical: 6,
		},
		buttonText: {
			fontSize: 20,
			color: colorScheme === 'dark' ? '#000' : '#fff',
		},
	});

export default styles;
