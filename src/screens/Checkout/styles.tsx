import { Platform, StyleSheet } from 'react-native';
import { IAppTheme, useThemeContext } from '../../store/ThemeContext';
import { AppColors } from '../../styles/colors';

const styles = () => {
    const { colors } = useThemeContext();

    return StyleSheet.create({
        container: {
            backgroundColor: colors.bg,
            height: '100%',
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
            fontSize: 24,
            fontWeight: '600',
            textAlign: 'center',
            marginTop: 20,
        },
        priceText: {
            color: colors.text,
            fontSize: 20,
            fontWeight: '600',
            position: 'absolute',
            bottom: 5,
            right: 14,
        },
        img: {
            maxWidth: 60,
            maxHeight: 80,
            overflow: 'visible',
        },

        imgContainer: {
            // minHeight: 100,
            // width: 60,
            justifyContent: 'center',
        },
        infoContainer: {
            width: 260,
            height: 100,
            paddingHorizontal: 14,
        },
        buttonContainer: {
            backgroundColor: colors.bg,
            width: '100%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            alignItems: 'center',
        },
    });
};

export default styles;
