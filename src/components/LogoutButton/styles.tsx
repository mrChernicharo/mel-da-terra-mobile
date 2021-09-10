import { StyleSheet } from 'react-native';
import { IAppTheme } from '../../store/ThemeContext';
import { AppColors } from '../../styles/colors';

const styles = (theme: IAppTheme) => {
    const colors = AppColors(theme);

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
