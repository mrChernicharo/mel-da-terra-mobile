import React, { useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';

import { ThemeContext, useThemeContext } from '../../store/ThemeContext';
import { useAuthContext } from '../../store/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { IntroNavigationProp } from '../../routes';

import styles from './styles';
import SettingsModal from '../SettingsModal/SettingsModal';
// import favicon from '../../assets/favicon.png';

export default function Header() {
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation<IntroNavigationProp>();
    const { user, logOut } = useAuthContext();
    const { theme, colors } = useThemeContext();

    const s = styles();

    const statusBarTheme = theme === 'dark' ? 'light' : 'dark';

    function handleLogOut() {
        if (user) navigation.navigate('Intro');
        logOut();
        // TODO: snackbar de despedida
    }

    function toggleModal() {
        setModalVisible(!modalVisible);
    }

    return (
        <View style={s.container}>
            <StatusBar style={statusBarTheme} />
            <TouchableOpacity onPress={toggleModal}>
                <Entypo
                    name="dots-three-horizontal"
                    size={32}
                    color={theme === 'dark' ? colors.text : colors.bg}
                    style={s.threeDots}
                />
            </TouchableOpacity>

            <SettingsModal
                user={user}
                showModal={modalVisible}
                toggleModal={toggleModal}
                logout={handleLogOut}
            />
        </View>
    );
}
