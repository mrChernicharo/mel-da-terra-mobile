import { StyleSheet } from 'react-native';
import { IAppTheme } from '../../store/ThemeContext';
import { AppColors } from '../../styles/colors';

const styles = (theme: IAppTheme) => {
    const colors = AppColors(theme);

    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.bg,
        },

        section: {
            // borderWidth: 2,
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 220,
            marginBottom: 200,
        },
        sectionTop: { width: '100%' },
        sectionBottom: { width: '100%', alignItems: 'center' },
        text: { fontSize: 18, color: colors.text },
        bgText: { fontSize: 18, color: colors.bgText },
        input: {
            borderBottomColor: colors.green,
            color: colors.text,
            fontSize: 16,
            marginBottom: -20,
        },
        inputIcon: {
            marginBottom: -16,
        },
        bottomLinkBox: {
            flexDirection: 'row',
            marginTop: 22,
        },
        linkText: { fontSize: 18, fontWeight: '600', color: colors.accent },
        button: {
            width: 240,
            backgroundColor: colors.accent,
        },
        buttonText: {
            paddingVertical: 4,
            fontSize: 24,
            fontWeight: '600',
        },
    });
};
export { styles };
