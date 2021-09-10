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
            backgroundColor: theme === 'dark' ? colors.bg : colors.primary,
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
        modalView: {
            // borderWidth: 2,
            backgroundColor: colors.bg,
            flex: 1,
            marginVertical: 20,
            marginHorizontal: 24,
            padding: modalPadding,
            maxHeight: Platform.OS === 'ios' ? 720 : 620,
            top: Platform.OS === 'ios' ? 60 : 10,
            justifyContent: 'space-between',
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
            position: 'absolute',
            // borderWidth: 2,
            right: modalPadding,
            top: modalPadding,
        },
    });
};
export default styles;
