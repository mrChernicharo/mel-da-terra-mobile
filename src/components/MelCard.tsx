import React from 'react';
import { useContext } from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';
import { Card, ImageProps } from 'react-native-elements';
import { ThemeContext } from '../store/ThemeContext';
import { IMel } from '../utils/constants';
import styles from '../styles/melCard';

export interface IMelCardProps {
	mel: IMel;
	onCardSelected: (mel: IMel) => void;
}

export default function MelCard({ mel, onCardSelected }: IMelCardProps) {
	const { hue, name, description, isAvailable } = mel;

	const { theme } = useContext(ThemeContext);
	const s = styles(theme);

	function handleCardPress() {
		onCardSelected(mel);
	}

	return (
		<TouchableNativeFeedback
			onPress={handleCardPress}
			// onLayout={/* someAnimation */}
		>
			<Card containerStyle={s.container} wrapperStyle={s.wrapper}>
				<View style={s.headingBox}>
					<Text style={s.headingText}>{name}</Text>
					<View style={[s.hueCircle, { backgroundColor: hue }]} />
				</View>
				<View style={s.descriptionBox}>
					<Text style={s.text}>{description}</Text>
				</View>
			</Card>
		</TouchableNativeFeedback>
	);
}