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
            // borderWidth: 2,
            backgroundColor: theme === 'dark' ? colors.bg2 : colors.bg,
            flex: 1,
            marginVertical: 20,
            marginHorizontal: 24,
            padding: modalPadding,
            // maxHeight: Platform.OS === 'ios' ? 720 : 620,
            maxHeight: height * 0.9,
            top: Platform.OS === 'ios' ? 60 : 10,
            // justifyContent: 'space-between',
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
        closeBtn: {
            // borderWidth: 1,
            // position: 'absolute',
            // right: modalPadding,
            // top: modalPadding,
        },
        img: {
            maxWidth: 60,
            maxHeight: 80,
            overflow: 'visible',
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
            // transform: [{ translateX: Platform.OS === 'android' ? -24 : -20 }],
            // minHeight: 100,
            // width: 60,
        },
        modalContent: {
            // borderWidth: 1,
            width: '100%',
        },
    });
};
export default styles;

// widgetsContainer: {
//     // borderWidth: 2,
//     width: width * 0.4,
//     height: Platform.OS === 'android' ? 40 : 40,
//     // backgroundColor: theme === 'dark' ? colors.bg : colors.primary,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
// },
