import { StyleSheet } from 'react-native';
import { IAppTheme } from '../../store/ThemeContext';
import { AppColors } from '../../styles/colors';

const styles = (theme: IAppTheme) => {
    const colors = AppColors(theme);

    return StyleSheet.create({
        button: {
            backgroundColor: colors.accent,
            paddingTop: 12,
            paddingBottom: 10,
            maxWidth: 320,
        },
        buttonText: {
            fontSize: 24,
            height: 36,
            fontWeight: '600',
        },
    });
};
export default styles;
