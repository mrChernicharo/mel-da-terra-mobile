import React, { useContext } from 'react';
import { Platform, Text, View } from 'react-native';
import { Switch } from 'react-native-elements';

import { Ionicons, Fontisto, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../../store/ThemeContext';
import styles from './styles';
import { AppColors } from '../../styles/colors';

export default function ThemeSwitch() {
    const { theme, toggleTheme, colors } = useTheme();
    const s = styles();

    function handleChange() {
        toggleTheme();
    }

    const themeIcon =
        theme === 'light' ? (
            <Ionicons name="moon" size={32} color={colors.accent} />
        ) : (
            <MaterialIcons name="wb-sunny" size={32} color={colors.primary} />
        );
    return (
        <View style={s.container}>
            <Text style={s.text}>Tema {theme === 'light' ? 'escuro' : 'claro'}</Text>
            <View style={s.switchContainer}>
                {theme === 'dark' && themeIcon}
                <Switch
                    style={s.switch}
                    shouldRasterizeIOS
                    value={theme === 'dark'}
                    color={colors.primary}
                    trackColor={{ true: colors.primary, false: colors.trans }}
                    onChange={handleChange}
                />
                {theme === 'light' && themeIcon}
            </View>
        </View>
    );
}
