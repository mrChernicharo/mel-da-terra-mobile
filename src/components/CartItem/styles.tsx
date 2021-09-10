import { Platform, StyleSheet } from 'react-native';
import { useTheme } from '../../store/ThemeContext';

const styles = () => {
    const { colors } = useTheme();

    return StyleSheet.create({
        container: {
            backgroundColor: colors.bg,
            height: 84,
            // borderWidth: 2,
        },
    });
};

export default styles;
