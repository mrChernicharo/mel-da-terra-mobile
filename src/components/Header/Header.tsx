import React, { useState, useEffect, useContext } from 'react';
import { Text, View, Modal, Pressable, Platform, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, Fontisto, Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';

import { ThemeContext, useTheme } from '../../store/ThemeContext';
import { UserContext } from '../../store/UserContext';
import { useNavigation } from '@react-navigation/native';
import { IntroNavigationProp } from '../../routes';

import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import LogoutButton from '../LogoutButton/LogoutButton';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppColors } from '../../styles/colors';

import favicon from '../../assets/favicon.png';
import SettingsModal from '../SettingsModal/SettingsModal';

export default function Header() {
    const [modalVisible, setModalVisible] = useState(false);
    const { user, logOut } = useContext(UserContext);
    const { theme, colors } = useTheme();
    const s = styles();
    const navigation = useNavigation<IntroNavigationProp>();

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
