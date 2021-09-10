import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Switch } from 'react-native-elements';

import { Ionicons, Fontisto, MaterialIcons } from '@expo/vector-icons';
import { ThemeContext } from '../../store/ThemeContext';
import styles from '../Header/styles';
import { AppColors } from '../../styles/colors';

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const s = styles(theme);
    const colors = AppColors(theme);

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
        <View
            style={{
                flexDirection: 'row',
                width: 90,
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'absolute',
                right: 4,
                zIndex: 100,
            }}
        >
            {theme === 'dark' && themeIcon}
            <Switch
                color={colors.primary}
                trackColor={{ true: colors.primary, false: colors.trans }}
                value={theme === 'dark'}
                onChange={handleChange}
            />
            {theme === 'light' && themeIcon}
        </View>
    );
}
