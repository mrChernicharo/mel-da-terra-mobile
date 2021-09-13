import { Platform, StyleSheet, Dimensions } from 'react-native';
import { useThemeContext } from '../../store/ThemeContext';

const styles = () => {
    const { theme, colors } = useThemeContext();

    const { width, height } = Dimensions.get('window');
    const modalPadding = 24;

    return StyleSheet.create({
        container: {},
        text: {
            color: colors.text,
            fontSize: 16,
            fontWeight: '900',
        },
        threeDots: {
            paddingRight: 20,
        },
        modalView: {
            backgroundColor: theme === 'dark' ? colors.bg2 : colors.bg,
            flex: 1,
            marginVertical: 20,
            marginHorizontal: 24,
            padding: modalPadding,
            maxHeight: height * 0.9,
            top: Platform.OS === 'ios' ? 60 : 10,
            alignItems: 'center',

            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        },
        closeBtn: {},
        img: {
            width: 60,
            height: 60,
            borderRadius: 30,
            resizeMode: 'stretch',
            marginRight: 12,
            // overflow: 'visible',
        },
        closeContainer: {
            // borderWidth: 2,
            width: '100%',
            alignItems: 'flex-end',
        },
        avatarContainer: {
            // borderWidth: 2,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginVertical: 10,
        },
        modalContentWrapper: {
            width: '100%',
        },
        modalContent: {
            height: '100%',
            // justifyContent: 'space-between',
            padding: 10,
        },
        modalItem: {
            paddingVertical: 10,
        },
    });
};
export default styles;
