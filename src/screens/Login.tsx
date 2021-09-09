import React, { useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoginNavigationProp } from '../routes/index';
import { Button, Divider } from 'react-native-elements';
import { Fontisto } from '@expo/vector-icons';

import { ThemeContext } from '../store/ThemeContext';
import { UserContext } from '../store/UserContext';
import IdentificationForm from '../components/IdentificationForm';

import { AppColors } from '../styles/colors';
import styles from '../styles/login';

export default function Login() {
  const { signIn } = useContext(UserContext);
  const navigation = useNavigation<LoginNavigationProp>();

  const { theme } = useContext(ThemeContext);
  const { accent } = AppColors(theme);

  const s = styles(theme);

  async function handleSubmit(email: string, password: string) {
    await signIn(email, password);
    navigation.push('NewOrder');
  }

  return (
    <SafeAreaView style={s.container}>
      <View style={s.section}>
        <Text style={s.loginHeaderText}>Login</Text>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Text style={s.text}>Entre com o seu email</Text>

          <IdentificationForm onSubmit={handleSubmit} />

          <Divider width={0.5} style={s.divider} />

          <Text style={s.separatorText}>Ou entre com</Text>

          <View style={s.socialSection}>
            <Button
              title="Google"
              buttonStyle={[s.socialButton, { marginBottom: 20 }]}
              titleStyle={s.socialButtonText}
              onPress={() => {}}
              icon={<Fontisto name="google" style={s.buttonIcon} />}
            />

            <Button
              title="Facebook"
              buttonStyle={s.socialButton}
              titleStyle={s.socialButtonText}
              onPress={() => {}}
              icon={<Fontisto name="facebook" style={s.buttonIcon} />}
            />
          </View>

          <Divider width={0.5} style={s.divider} />

          <Text style={[s.text, { marginTop: 20, marginBottom: 6 }]}>Primeira vez por aqui?</Text>
          <TouchableOpacity onPress={() => navigation.push('SignUp')}>
            <Text style={s.linkText}>Criar conta</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}
