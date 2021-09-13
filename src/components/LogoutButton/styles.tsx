import { Platform, StyleSheet } from 'react-native';
import { useThemeContext } from '../../store/ThemeContext';

const styles = () => {
    const { colors, theme } = useThemeContext();

    return StyleSheet.create({
        container: {
            alignItems: 'flex-end',
            // borderWidth: 1,
        },
        text: {
            fontSize: 16,
            color: theme === 'light' ? colors.accent : colors.primary,
        },
        button: {
            height: 48,
            width: 120,
            alignItems: 'flex-end',
            transform: [{ translateX: 6 }],
        },
        icon: {
            color: theme === 'light' ? colors.accent : colors.primary,
            paddingLeft: 3,
        },
    });
};

export default styles;
