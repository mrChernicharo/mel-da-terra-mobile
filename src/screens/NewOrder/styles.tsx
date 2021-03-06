import { Platform, StyleSheet } from 'react-native';
import { useThemeContext } from '../../store/ThemeContext';

const styles = () => {
    const { colors } = useThemeContext();

    return StyleSheet.create({
        container: {
            backgroundColor: colors.bg,
        },
        productsContainer: {
            marginBottom: 100,
        },
        text: {
            color: colors.text,
        },
        headingText: {
            color: colors.text,
            fontSize: 24,
            fontWeight: '600',
            textAlign: 'center',
            paddingBottom: 10,
            marginTop: 8,
            // marginTop: Platform.OS === 'android' ? 8 : 8,
        },
        buttonContainer: {
            backgroundColor: colors.bg,
            // borderWidth: 2,
            // borderColor: 'red',
            width: '100%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            paddingTop: 20,
            alignItems: 'center',
        },
    });
};

export default styles;
