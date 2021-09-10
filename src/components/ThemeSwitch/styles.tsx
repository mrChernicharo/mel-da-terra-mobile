import { StyleSheet, Dimensions, Platform } from 'react-native';
import { AppColors } from '../../styles/colors';

const styles = (theme: string) => {
    const colors = AppColors(theme);
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
