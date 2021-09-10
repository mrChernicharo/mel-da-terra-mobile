import { Platform, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '../../store/ThemeContext';

const styles = () => {
    const { colors } = useTheme();

    const { width } = Dimensions.get('window');
    const modalPadding = 24;

    return StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // borderWidth: 1,
            height: 50,
        },
        text: {
            fontSize: 16,
            color: colors.text,
        },
        switchContainer: {
            flexDirection: 'row',
        },
        switch: {
            marginHorizontal: Platform.OS === 'ios' ? 10 : 0,
        },
    });
};

export default styles;
