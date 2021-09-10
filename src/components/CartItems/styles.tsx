import { Platform, StyleSheet } from 'react-native';
import { useTheme } from '../../store/ThemeContext';

const styles = () => {
    const { colors } = useTheme();

    return StyleSheet.create({
        container: {
            backgroundColor: colors.bg,
            borderWidth: 2,
            height: 60,
            borderRadius: 6,
            marginVertical: 10,
            marginHorizontal: 4,
            justifyContent: 'center',
        },
        melContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        melCircle: {
            width: 12,
            height: 12,
            borderRadius: 6,
            marginRight: 6,
        },
        text: {
            color: colors.bgText,
            fontWeight: '600',
        },
    });
};

export default styles;
