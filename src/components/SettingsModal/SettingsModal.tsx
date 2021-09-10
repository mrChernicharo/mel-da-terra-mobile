import React, { useState, useEffect, useContext } from 'react';
import { Text, View, Modal, Pressable, Platform, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, Fontisto, Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';

import { useTheme } from '../../store/ThemeContext';
import { IAppUser, UserContext } from '../../store/UserContext';
import { useNavigation } from '@react-navigation/native';
import { IntroNavigationProp } from '../../routes';

import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import LogoutButton from '../LogoutButton/LogoutButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppColors } from '../../styles/colors';
import styles from './styles';

import favicon from '../../assets/favicon.png';

interface ISettingsModalProps {
    user: IAppUser | null;
    showModal: boolean;
    toggleModal: () => void;
    logout: () => void;
}

export default function SettingsModal({
    user,
    showModal,
    toggleModal,
    logout,
}: ISettingsModalProps) {
    const { theme } = useTheme();

    const s = styles();
    const colors = AppColors(theme);
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

    return (
        <Modal
            animationType="slide"
            visible={showModal}
            transparent={true}
            onRequestClose={toggleModal}
            statusBarTranslucent={false}
        >
            <View style={s.modalView}>
                <View style={s.closeContainer}>{closeButton}</View>

                <View style={s.avatarContainer}>
                    <Image style={s.img} source={user?.avatarUrl || favicon} />
                    <Text style={s.text}>{user?.name || 'Terra Verde'}</Text>
                </View>

                <ScrollView style={s.modalContent}>
                    <ThemeSwitch />
                    <LogoutButton onPress={logout} />
                </ScrollView>
            </View>
        </Modal>
    );
}
