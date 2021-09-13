import React, { useContext } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoginNavigationProp } from '../../routes/index';
import { Button, Divider } from 'react-native-elements';

import { Fontisto } from '@expo/vector-icons';

import { useAuthContext } from '../../store/AuthContext';
import IdentificationForm from '../../components/IdentificationForm/IdentificationForm';

import styles from './styles';

export default function Login() {
    const { signIn, googleSignIn } = useAuthContext();
    const navigation = useNavigation<LoginNavigationProp>();

    const s = styles();

    async function handleSubmit(email: string, password: string) {
        await signIn(email, password);
        navigation.push('NewOrder');
    }

    async function handleGoogleSignIn() {
        await googleSignIn();
    }
    async function handleFacebookSignIn() {
        console.log('handle Facebook sign in!');
    }

    return (
        // <ScrollView contentContainerStyle={s.container}>
        <SafeAreaView style={s.container}>
            <View style={s.section}>
                <Text style={s.loginHeaderText}>Login</Text>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <Text style={[s.text, { marginBottom: 10 }]}>Entre com o seu email</Text>

                    <IdentificationForm onSubmit={handleSubmit} />

                    <Divider width={0.2} style={s.divider} />

                    <Text style={s.separatorText}>Ou entre com</Text>

                    <View style={s.socialSection}>
                        <Button
                            title="Google"
                            buttonStyle={[s.socialButton]}
                            titleStyle={s.socialButtonText}
                            onPress={handleGoogleSignIn}
                            icon={<Fontisto name="google" style={s.buttonIcon} />}
                        />

                        {/* <Button
                            title="Facebook"
                            buttonStyle={s.socialButton}
                            titleStyle={s.socialButtonText}
                            onPress={handleFacebookSignIn}
                            icon={<Fontisto name="facebook" style={s.buttonIcon} />}
                        /> */}
                    </View>

                    <Divider width={0.2} style={s.divider} />

                    <Text style={[s.text, { marginTop: 20, marginBottom: 6 }]}>
                        Primeira vez por aqui?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.push('SignUp')}>
                        <Text style={s.linkText}>Criar conta</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
        // </ScrollView>
    );
}
