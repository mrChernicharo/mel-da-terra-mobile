import React, { useState, useContext, useEffect } from 'react';
import { View, Text } from 'react-native';

import { mainStyles } from './styles/main';
import { ThemeContext } from './store/ThemeContext';

export default function Main() {
	const { theme } = useContext(ThemeContext);

	const s = mainStyles(theme);

	useEffect(() => {
		console.log(theme);
	}, [theme]);
	return (
		<View style={s.container}>
			<View style={s.main}>
				<Text style={s.heading}>
					A pureza do <Text style={s.highText}>mel cru</Text>
				</Text>
			</View>
		</View>
	);
}
