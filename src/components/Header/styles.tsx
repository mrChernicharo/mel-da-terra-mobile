import { StyleSheet, Dimensions, Platform } from 'react-native';
import { AppColors } from '../../styles/colors';

const styles = (theme: string) => {
    const colors = AppColors(theme);
    const { width } = Dimensions.get('window');
    const modalPadding = 24;

    return StyleSheet.create({
        container: {},
        widgetsContainer: {
            // borderWidth: 2,
            width: width * 0.4,
            height: Platform.OS === 'android' ? 40 : 40,
            // backgroundColor: theme === 'dark' ? colors.bg : colors.primary,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        text: {
            color: colors.text,
            fontSize: 16,
            fontWeight: '900',
        },
        threeDots: {
            paddingRight: 20,
        },
    });
};
export default styles;
