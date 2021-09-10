import { Platform, StyleSheet } from 'react-native';
import { useTheme } from '../../store/ThemeContext';

const styles = () => {
    const { colors } = useTheme();

    return StyleSheet.create({
        button: {
            backgroundColor: colors.accent,
            paddingTop: 12,
            paddingBottom: 10,
            maxWidth: 320,
        },
        buttonText: {
            fontSize: 24,
            height: 36,
            fontWeight: '600',
        },
    });
};
export default styles;
