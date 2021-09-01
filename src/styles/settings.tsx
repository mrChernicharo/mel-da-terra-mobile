import { StyleSheet } from 'react-native';

const screenStyles = (theme: string) =>
	StyleSheet.create({
		container: {
			flex: 1,
		},
		logo: {},
		text: {},
		button: {},
		image: {
			flex: 1,
			justifyContent: 'center',
		},
	});

export { screenStyles };
