import React, { useContext } from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';

import { ThemeContext } from '../../store/ThemeContext';
import { AppColors } from '../../styles/colors';
import styles from './styles';

interface ILogoutBtnProps {
    onPress: () => void;
}
export default function LogoutButton({ onPress }: ILogoutBtnProps) {
    const { theme } = useContext(ThemeContext);
    const colors = AppColors(theme);
    const s = styles(theme);
    return (
        <View style={s.container}>
            <Button
                style={s.button}
                titleStyle={s.button}
                type="clear"
                icon={
                    <MaterialIcons
                        name="logout"
                        size={31}
                        color={theme === 'light' ? colors.bg : colors.primary}
                    />
                }
                onPress={onPress}
            />
        </View>
    );
}