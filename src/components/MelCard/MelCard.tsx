import React from 'react';
import { useContext } from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';
import { Card, ImageProps } from 'react-native-elements';
import { ThemeContext, useTheme } from '../../store/ThemeContext';
import { IMel } from '../../utils/interfaces';
import styles from './styles';

export interface IMelCardProps {
    mel: IMel;
    onCardSelected: (mel: IMel) => void;
}

export default function MelCard({ mel, onCardSelected }: IMelCardProps) {
    const { hue, name, description, isAvailable } = mel;

    const { theme } = useTheme();
    const s = styles();

    function handleCardPress() {
        onCardSelected(mel);
    }

    return (
        <TouchableNativeFeedback
            onPress={handleCardPress}
            // onLayout={/* someAnimation */}
        >
            <Card containerStyle={s.container}>
                <View style={s.headingBox}>
                    <View style={[s.hueCircle, { backgroundColor: hue }]} />
                    <Text style={s.headingText}>{name}</Text>
                </View>
                <View style={s.descriptionBox}>
                    <Text style={s.text}>{description}</Text>
                </View>
            </Card>
        </TouchableNativeFeedback>
    );
}
