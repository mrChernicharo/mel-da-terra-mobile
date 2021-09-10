import { Platform, StyleSheet } from 'react-native';
import { useTheme } from '../../store/ThemeContext';

const styles = () => {
    const { colors } = useTheme();

    return StyleSheet.create({
        container: {
            backgroundColor: colors.bg2,
            borderRadius: 8,
            paddingVertical: 8,
            paddingLeft: 10,
        },
        wrapper: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        text: {
            color: colors.text,
        },
        headingContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        headingText: {
            color: colors.text,
            fontSize: 20,
            fontWeight: '600',
        },
        amountText: {
            textAlign: 'right',
            color: colors.text,
            fontSize: 20,
            marginTop: 1,
        },
        imgContainer: {
            maxHeight: 60,
            width: 60,
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            maxWidth: 40,
            maxHeight: 60,
            overflow: 'visible',
        },
        outerInfoContainer: {
            width: 270,
            justifyContent: 'space-between',
            paddingLeft: 6,
        },
        innerInfoContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // borderWidth: 1,
        },
        priceText: {
            color: colors.text,
            marginTop: 5,
            fontSize: 20,
            fontWeight: '600',
            textAlign: 'right',
        },
        melInfo: {
            flexDirection: 'row',
            alignItems: 'center',
            // borderWidth: 1,
        },
        melCircle: {
            width: 20,
            height: 20,
            borderRadius: 10,
            marginRight: 6,
        },
    });
};

export default styles;
