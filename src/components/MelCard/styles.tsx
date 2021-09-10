import { Platform, StyleSheet } from 'react-native';
import { useTheme } from '../../store/ThemeContext';

const styles = () => {
    const { colors } = useTheme();

    return StyleSheet.create({
        container: {
            backgroundColor: colors.bg2,
            borderRadius: 6,

            paddingVertical: 7,
            paddingHorizontal: 10,

            marginHorizontal: 8,
            marginVertical: 0,
            width: 128,
        },
        headingBox: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 3,
        },
        descriptionBox: {
            // borderWidth: 2,
            maxWidth: 90,
        },
        text: {
            color: colors.text,
            // textAlign: 'center',
        },
        headingText: {
            color: colors.text,
            fontSize: 18,
            fontWeight: '600',
            textAlign: 'left',
        },
        hueCircle: {
            width: 16,
            height: 16,
            borderRadius: 10,
            marginRight: 8,
        },
    });
};

export default styles;
