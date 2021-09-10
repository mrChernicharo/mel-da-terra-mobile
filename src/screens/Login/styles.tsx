import { StyleSheet } from 'react-native';
import { IAppTheme } from '../../store/ThemeContext';
import { AppColors } from '../../styles/colors';

const styles = (theme: IAppTheme) => {
    const colors = AppColors(theme);

    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: colors.bg,
        },
        loginHeaderText: { fontSize: 24, marginBottom: 20, marginTop: 32 },
        section: {
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        sectionTop: {
            justifyContent: 'space-between',
        },
        socialSection: {
            // flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        button: {
            width: 300,
            backgroundColor: colors.accent,
        },
        divider: {
            padding: 10,
            marginTop: 10,
        },
        socialButton: {
            width: 300,
            backgroundColor: colors.accent,
        },
        text: { fontSize: 18, color: colors.text, textAlign: 'center' },
        separatorText: {
            fontSize: 18,
            color: colors.text,
            marginVertical: 20,
            textAlign: 'center',
        },
        bgText: { fontSize: 18, color: colors.bgText },
        linkText: {
            fontSize: 18,
            fontWeight: '600',
            color: colors.accent,
            textAlign: 'center',
        },
        buttonText: {
            paddingVertical: 4,
            fontSize: 24,
            fontWeight: '600',
        },
        socialButtonText: {
            paddingVertical: 7,
            fontSize: 20,
            fontWeight: '600',
        },
        buttonIcon: {
            marginRight: 10,
            fontSize: 24,
            color: colors.bgText,
        },
    });
};
export default styles;
