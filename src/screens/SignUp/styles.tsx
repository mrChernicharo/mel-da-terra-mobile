import { Platform, StyleSheet } from 'react-native';
import { IAppTheme, useThemeContext } from '../../store/ThemeContext';
import { AppColors } from '../../styles/colors';

const styles = () => {
    const { colors } = useThemeContext();

    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: colors.bg,
        },
        section: {
            // flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        loginHeaderText: { fontSize: 24, marginBottom: 20, marginTop: 32 },
    });
};

export default styles;
