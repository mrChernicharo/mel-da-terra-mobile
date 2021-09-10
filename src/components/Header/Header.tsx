import React, { useState, useEffect, useContext } from 'react';
import { Text, View, Modal, Pressable, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, Fontisto, Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';

import { ThemeContext } from '../../store/ThemeContext';
import { UserContext } from '../../store/UserContext';
import { useNavigation } from '@react-navigation/native';
import { IntroNavigationProp } from '../../routes';

import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import LogoutButton from '../LogoutButton/LogoutButton';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppColors } from '../../styles/colors';

export default function Header() {
    const [modalVisible, setModalVisible] = useState(false);
    const { user, logOut } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);
    const s = styles(theme);
    const colors = AppColors(theme);
    const navigation = useNavigation<IntroNavigationProp>();

    const statusBarTheme = theme === 'dark' ? 'light' : 'dark';

    const closeButton =
        Platform.OS === 'android' ? (
            <Pressable onPress={toggleModal} style={s.closeBtn}>
                <AntDesign name="close" size={32} color={colors.text} />
            </Pressable>
        ) : (
            <View style={s.closeBtn}>
                <TouchableOpacity onPress={toggleModal}>
                    <MaterialIcons name="close" size={32} color={colors.text} />
                </TouchableOpacity>
            </View>
        );

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
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={toggleModal}
                statusBarTranslucent={false}
            >
                <View style={s.modalView}>
                    {closeButton}

                    <Text style={s.text}>Modal</Text>

                    <View style={s.widgetsContainer}>
                        <ThemeSwitch />
                        <LogoutButton onPress={handleLogOut} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}
