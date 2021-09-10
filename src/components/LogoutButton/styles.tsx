import { Platform, StyleSheet } from 'react-native';
import { useThemeContext } from '../../store/ThemeContext';

const styles = () => {
    const { colors } = useThemeContext();

    return StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // borderWidth: 1,
        },
        text: {
            color: colors.text,
            fontSize: 16,
        },
        button: {
            height: 48,
            width: 48,
        },
    });
};

export default styles;
