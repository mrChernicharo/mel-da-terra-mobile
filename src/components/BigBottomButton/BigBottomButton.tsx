import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { useThemeContext } from '../../store/ThemeContext';
import styles from './styles';

export interface IBigButtonProps {
    title: string;
    buttonPressed: () => void;
}
export default function BigBottomButton({ title, buttonPressed }: IBigButtonProps) {
    const { width, height } = useWindowDimensions();
    const { theme } = useThemeContext();
    const s = styles();

    return (
        <Button
            title={title}
            buttonStyle={[s.button, { width: width - 30 }]}
            titleStyle={s.buttonText}
            onPress={buttonPressed}
        />
    );
}
