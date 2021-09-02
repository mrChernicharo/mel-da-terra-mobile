import React, { useContext, useState } from 'react';
import {
	SafeAreaView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ImageBackground,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoginNavigationProp } from '../routes/index';
import { Button, Input } from 'react-native-elements';

import { styles } from '../styles/login';
import { ThemeContext } from '../store/ThemeContext';
import {
	Feather,
	Fontisto,
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
	SimpleLineIcons,
} from '@expo/vector-icons';
import { AppColors } from '../styles/colors';
import splash from '../assets/min-lower.png';

interface ILoginProps {
	theme: string;
}

export default function Login() {
	const navigation = useNavigation<LoginNavigationProp>();
	const { theme } = useContext(ThemeContext);
	const { accent } = AppColors(theme);

	const [isEmailFocused, setIsEmailFocused] = useState(false);
	const [isEmailFilled, setIsEmailFilled] = useState(false);
	const [isPasswordFocused, setIsPasswordFocused] = useState(false);
	const [isPasswordFilled, setIsPasswordFilled] = useState(false);
	const [login, setLogin] = useState<string>('');

	const s = styles(theme);

	function goToNewOrderScreen() {
		navigation.push('NewOrder');
	}
	function handleEmailInputBlur() {
		console.log('blured');
		setIsEmailFocused(false);
		setIsEmailFilled(!!Login);
	}
	function handleEmailInputFocus() {
		console.log('focused');
		setIsEmailFocused(true);
	}
	function handleEmailInputChange(val: string) {
		setIsEmailFilled(!!val);
		setLogin(val);
	}
	function handlePasswordInputBlur() {
		console.log('blured');
		setIsPasswordFocused(false);
		setIsPasswordFilled(!!Login);
	}
	function handlePasswordInputFocus() {
		console.log('focused');
		setIsPasswordFocused(true);
	}
	function handlePasswordInputChange(val: string) {
		setIsPasswordFilled(!!val);
		setLogin(val);
	}
	function handleSubmit() {
		console.log('submited Login: ' + Login);
		goToNewOrderScreen();
	}

	return (
		<SafeAreaView style={s.container}>
			<View style={s.section}>
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				>
					<View style={s.sectionTop}>
						<Text style={s.text}>{'Use seu email'}</Text>

						<Input
							inputStyle={s.input}
							inputContainerStyle={
								isEmailFilled && {
									borderBottomColor: accent,
									borderBottomWidth: 3,
								}
							}
							placeholder={'seu@email.com'}
							rightIcon={
								<Fontisto
									name="email"
									size={32}
									style={[
										s.inputIcon,
										s.mailInput,
										isEmailFilled && {
											color: accent,
										},
									]}
								/>
							}
							onBlur={handleEmailInputBlur}
							onFocus={handleEmailInputFocus}
							onChangeText={handleEmailInputChange}
						/>

						<Input
							inputStyle={s.input}
							inputContainerStyle={
								isPasswordFilled && {
									borderBottomColor: accent,
									borderBottomWidth: 3,
								}
							}
							placeholder={'sua senha'}
							rightIcon={
								<SimpleLineIcons
									name="lock"
									size={32}
									style={[
										s.inputIcon,
										isPasswordFilled && {
											color: accent,
										},
									]}
								/>
							}
							onBlur={handlePasswordInputBlur}
							onFocus={handlePasswordInputFocus}
							onChangeText={handlePasswordInputChange}
						/>

						<Button
							title="Entrar"
							buttonStyle={s.button}
							titleStyle={s.buttonText}
							onPress={handleSubmit}
							disabled={!isEmailFilled || !isPasswordFilled}
						/>
						<Text style={s.separatorText}>{'Ou entre com'}</Text>
					</View>

					<View style={s.sectionBottom}>
						<Button
							title="Google"
							buttonStyle={s.socialButton}
							titleStyle={s.socialButtonText}
							onPress={handleSubmit}
							icon={
								<Fontisto name="google" style={s.buttonIcon} />
							}
						/>

						<Button
							title="Facebook"
							buttonStyle={s.socialButton}
							titleStyle={s.socialButtonText}
							onPress={handleSubmit}
							icon={
								<Fontisto
									name="facebook"
									style={s.buttonIcon}
								/>
							}
						/>
					</View>
				</KeyboardAvoidingView>
			</View>
		</SafeAreaView>
	);
}
