import { StyleSheet } from 'react-native';
import { useThemeContext } from '../../store/ThemeContext';

const styles = () => {
    const { theme } = useThemeContext();
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme === 'dark' ? '#000' : '#fff',
            color: theme === 'dark' ? '#fff' : '#000',
            alignItems: 'center',
        },
        main: {
            flex: 1,
            borderWidth: 2,
            borderColor: 'orange',
        },
        heading: {
            fontSize: 32,
            color: theme === 'dark' ? '#fff' : '#000',
        },
        highText: {
            fontWeight: '900',
            color: '#eecd3e',
        },
        image: {},
    });
};
export default styles;
