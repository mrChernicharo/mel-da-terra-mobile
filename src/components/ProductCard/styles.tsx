import { Platform, StyleSheet } from 'react-native';
import { useThemeContext } from '../../store/ThemeContext';

const styles = () => {
    const { colors } = useThemeContext();

    return StyleSheet.create({
        container: {
            backgroundColor: colors.bg2,
            borderRadius: 10,
            paddingVertical: 6,
            marginHorizontal: 24,
        },
        wrapper: {
            // borderWidth: 3,
            maxHeight: 100,
            flexDirection: 'row',
        },
        text: {
            color: colors.text,
        },
        headingText: {
            color: colors.text,
            fontSize: 20,
            fontWeight: '600',
            textAlign: 'left',
            marginBottom: 4,
        },
        priceText: {
            color: colors.text,
            fontSize: 20,
            fontWeight: '600',
            position: 'absolute',
            bottom: 5,
            right: 14,
        },
        imgContainer: {
            // borderWidth: 2,
            // minHeight: 100,
            // width: 60,
            justifyContent: 'center',
        },
        img: {
            maxWidth: Platform.OS === 'ios' ? 56 : 54,
            maxHeight: Platform.OS === 'ios' ? 80 : 82,
            overflow: 'visible',
            // backgroundColor: 'red',
        },
        infoContainer: {
            width: 260,
            height: 100,
            // justifyContent: 'space-between',
            // paddingVertical: 8,
            paddingHorizontal: 14,
        },
    });
};

export default styles;
