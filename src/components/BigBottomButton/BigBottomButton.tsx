import React, { useContext } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { Button } from 'react-native-elements';
import { ThemeContext } from '../../store/ThemeContext';
import styles from './styles';

export interface IBigButtonProps {
    title: string;
    buttonPressed: () => void;
}
export default function BigBottomButton({ title, buttonPressed }: IBigButtonProps) {
    const { width, height } = useWindowDimensions();

    const { theme } = useContext(ThemeContext);
    const s = styles(theme);

    return (
        <Button
            title={title}
            buttonStyle={[s.button, { width: width - 30 }]}
            titleStyle={s.buttonText}
            onPress={buttonPressed}
        />
    );
}
