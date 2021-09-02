import React from 'react';
import { useContext } from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';
import { Card, ImageProps } from 'react-native-elements';
import { ThemeContext } from '../store/ThemeContext';
import { IMel } from '../utils/constants';
import styles from '../styles/melCard';

export interface IMelCardProps {
	data: IMel;
	onCardSelected: (data: IMel) => void;
}

export default function MelCard({ data, onCardSelected }: IMelCardProps) {
	const { hue, name, description, isAvailable } = data;

	const { theme } = useContext(ThemeContext);
	const s = styles(theme);

	function handleCardPress() {
		onCardSelected(data);
	}

	return (
		<TouchableNativeFeedback
			onPress={handleCardPress}
			// onLayout={/* someAnimation */}
		>
			<Card containerStyle={s.container} wrapperStyle={s.wrapper}>
				<View style={s.imgContainer}>
					{/* <Image source={imgPath} width={80} height={80} /> */}
				</View>
				<View style={s.infoContainer}>
					<Text style={s.headingText}>{name}</Text>
					{/* <Text style={s.text}>{description}</Text>
					<Text style={s.priceText}>{brPrice}</Text> */}
				</View>
			</Card>
		</TouchableNativeFeedback>
	);
}
