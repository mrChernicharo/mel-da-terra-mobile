import React, { useContext } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';

import { SignUpNavigationProp } from '../../routes';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../store/ThemeContext';
import { UserContext } from '../../store/UserContext';

import IdentificationForm from '../../components/IdentificationForm/IdentificationForm';
import styles from './styles';

export default function SignUp() {
    const { signUp } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);
    const s = styles(theme);

    const navigation = useNavigation<SignUpNavigationProp>();

    async function handleSubmit(email: string, password: string, username?: string) {
        const result = await signUp(username || '', email, password);

        if (result === true) {
            // TODO: show success snack
            navigation.push('NewOrder');
        }

        // TODO: show error snack
        // console.log(result);
    }

    return (
        <SafeAreaView style={s.container}>
            <View style={s.section}>
                <Text style={s.loginHeaderText}>Criar conta</Text>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <IdentificationForm onSubmit={handleSubmit} showNameInput />
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    );
}