import { Platform, StyleSheet } from 'react-native';
import { useThemeContext } from '../../store/ThemeContext';

const styles = () => {
    const { colors } = useThemeContext();

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.bg,
        },
        productContainer: {
            paddingTop: 20,
            // borderWidth: 1,
            // justifyContent: 'center',
            // alignItems: 'center',
        },
        melesContainer: {
            paddingVertical: 20,
        },
        headingText: {
            color: colors.text,
            fontSize: 24,
            fontWeight: '600',
            textAlign: 'center',
            paddingVertical: 16,
            // borderWidth: 2,
        },
        listContainer: {
            paddingHorizontal: 10,
            paddingVertical: 10,
        },
        amountContainer: {
            flex: 1,
            justifyContent: 'center',
            paddingBottom: 64,
        },
        numericInputContainer: {
            alignItems: 'center',
            paddingVertical: 10,
            // borderWidth: 2,
        },
        text: {
            color: colors.text,
        },
        buttonContainer: {
            alignItems: 'center',
            paddingBottom: Platform.OS === 'android' ? 40 : 60,
        },
        button: {
            width: 300,
            backgroundColor: colors.accent,
            paddingTop: 12,
            paddingBottom: 10,
        },
        buttonText: {
            fontSize: 24,
            height: 36,
            fontWeight: '600',
        },
    });
};

export default styles;
