import React, { useContext } from 'react';
import {
	View,
	Text,
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
} from 'react-native';
import { ThemeContext } from '../store/ThemeContext';
import { AppColors } from '../styles/colors';
import IdentificationForm from '../components/IdentificationForm';
import styles from '../styles/signUp';
import { Input } from 'react-native-elements/dist/input/Input';
import { UserContext } from '../store/UserContext';

export default function SignUp() {
	const { signUp } = useContext(UserContext);
	const { theme } = useContext(ThemeContext);
	const s = styles(theme);

	function handleSubmit(email: string, password: string, username?: string) {
		signUp(username || '', email, password);
	}

	return (
		<SafeAreaView style={s.container}>
			<View style={s.section}>
				<Text style={s.loginHeaderText}>Criar conta</Text>
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				>
					<IdentificationForm onSubmit={handleSubmit} showNameInput />
				</KeyboardAvoidingView>
			</View>
		</SafeAreaView>
	);
}
