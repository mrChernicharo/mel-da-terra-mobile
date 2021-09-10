import { Platform, StyleSheet, Dimensions } from 'react-native';
import { useThemeContext } from '../../store/ThemeContext';

const styles = () => {
    const { colors } = useThemeContext();

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
