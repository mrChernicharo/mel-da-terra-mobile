import { Platform, StyleSheet, useWindowDimensions } from 'react-native';
import { IAppTheme, useThemeContext } from '../../store/ThemeContext';
import { AppColors } from '../../styles/colors';

const styles = () => {
    const { colors } = useThemeContext();

    // const { height } = useWindowDimensions();
    // console.log('login height: ', height);

    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: colors.bg,

            // gambiarras pra caber tudo na tela pequena do android
            minHeight: Platform.OS === 'android' ? 740 : '100%',
            width: Platform.OS === 'android' ? 500 : '100%',
            borderRadius: Platform.OS === 'android' ? 6 : 0,
            transform: [
                { scale: Platform.OS === 'android' ? 0.92 : 1 },
                { translateX: Platform.OS === 'android' ? -50 : 0 },
                { translateY: Platform.OS === 'android' ? -40 : 0 },
            ],
        },
        section: {
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        loginHeaderText: { fontSize: 24, marginBottom: 20, marginTop: 32, color: colors.text },
        text: { fontSize: 18, color: colors.text, textAlign: 'center' },
        divider: {
            padding: 10,
            marginTop: 10,
            opacity: 0.5,
        },
        separatorText: {
            fontSize: 18,
            color: colors.text,
            marginVertical: 20,
            textAlign: 'center',
        },
        socialSection: {
            // borderWidth: 1,
        },
        socialButton: {
            width: 300,
            backgroundColor: colors.accent,
        },
        socialButtonText: {
            paddingVertical: 7,
            fontSize: 20,
            fontWeight: '600',
        },
        buttonIcon: {
            marginRight: 10,
            fontSize: 24,
            color: colors.text,
        },
        linkText: {
            fontSize: 18,
            fontWeight: '600',
            color: colors.accent,
            textAlign: 'center',
        },
    });
};
export default styles;
