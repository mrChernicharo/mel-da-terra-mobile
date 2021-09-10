import { Platform, StyleSheet } from 'react-native';
import { useThemeContext } from '../../store/ThemeContext';

const styles = () => {
    const { colors } = useThemeContext();

    return StyleSheet.create({
        container: {
            backgroundColor: colors.bg,
            height: 84,
            // borderWidth: 2,
        },
    });
};

export default styles;
