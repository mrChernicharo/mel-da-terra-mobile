import { StyleSheet } from 'react-native';

const screenStyles = (colorScheme: string) =>
	StyleSheet.create({
		container: {
			flex: 1,
		},
		logo: {},
		text: {},
		button: {},
		image: {
			// position: 'absolute',
			// top: 0,
			// left: 0,
			// height: 600,
			// width: 400,
			flex: 1,
			justifyContent: 'center',
		},
	});

export { screenStyles };
