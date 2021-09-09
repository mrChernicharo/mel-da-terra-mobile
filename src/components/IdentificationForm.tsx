import {
	Feather,
	FontAwesome,
	Fontisto,
	SimpleLineIcons,
} from '@expo/vector-icons';
import React, { useContext, useState, useRef } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

import { ThemeContext } from '../store/ThemeContext';
import { AppColors } from '../styles/colors';
import styles from '../styles/identificationForm';

export interface IIDFormProps {
	onSubmit: (email: string, password: string, username?: string) => void;
	showNameInput?: boolean;
}

export default function IdentificationForm({
	onSubmit,
	showNameInput,
}: IIDFormProps) {
	const { theme } = useContext(ThemeContext);
	const { accent } = AppColors(theme);

	const s = styles(theme);

	const [isUsernameFocused, setIsUsernameFocused] = useState(false);
	const [isUsernameFilled, setIsUsernameFilled] = useState(false);
	const [isEmailFocused, setIsEmailFocused] = useState(false);
	const [isEmailFilled, setIsEmailFilled] = useState(false);
	const [isPasswordFocused, setIsPasswordFocused] = useState(false);
	const [isPasswordFilled, setIsPasswordFilled] = useState(false);

	const [showPassword, setShowPassword] = useState(false);

	const emailInputRef = useRef<any>();
	const passwordInputRef = useRef<any>();

	const [username, setUsername] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	function handleUsernameInputBlur() {
		setIsUsernameFocused(false);
		setIsUsernameFilled(!!username);
	}
	function handleUsernameInputFocus() {
		setIsUsernameFocused(true);
	}
	function handleUsernameInputChange(val: string) {
		setIsUsernameFilled(!!val.trim());
		setUsername(val);
	}

	function handleEmailInputBlur() {
		setIsEmailFocused(false);
		setIsEmailFilled(!!email);
	}
	function handleEmailInputFocus() {
		setIsEmailFocused(true);
	}
	function handleEmailInputChange(val: string) {
		setIsEmailFilled(!!val.trim());
		setEmail(val.trim().toLowerCase());
	}

	function handlePasswordInputBlur() {
		setIsPasswordFocused(false);
		setIsPasswordFilled(!!password);
	}
	function handlePasswordInputFocus() {
		setIsPasswordFocused(true);
	}
	function handlePasswordInputChange(val: string) {
		setIsPasswordFilled(!!val.trim());
		setPassword(val);
	}

	function handleSubmit() {
		const emailMatch = email.match(
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/gm
		);

		// TODO: snackbars
		if (!emailMatch?.length) throw new Error('endereço de email inválido.');
		if (password.length < 6) throw new Error('senha menor q 6 caracteres.');

		if (username) return onSubmit(email, password, username);

		return onSubmit(email, password);
	}

	return (
		<View style={s.section}>
			{showNameInput && (
				<Input
					label="Nickname"
					inputStyle={s.input}
					inputContainerStyle={
						isUsernameFilled && {
							borderBottomColor: accent,
							borderBottomWidth: 3,
						}
					}
					placeholder="como devemos te chamar?"
					leftIcon={
						<Feather
							name="user"
							size={32}
							style={[
								s.inputIcon,
								s.mailInput,
								isUsernameFilled && {
									color: accent,
								},
							]}
						/>
					}
					onBlur={handleUsernameInputBlur}
					onFocus={handleUsernameInputFocus}
					onChangeText={handleUsernameInputChange}
					onSubmitEditing={() => emailInputRef.current.focus()}
				/>
			)}
			<Input
				label="Email"
				ref={emailInputRef}
				inputStyle={s.input}
				inputContainerStyle={
					isEmailFilled && {
						borderBottomColor: accent,
						borderBottomWidth: 3,
					}
				}
				placeholder="seu@email.com"
				leftIcon={
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
				onSubmitEditing={() => passwordInputRef.current.focus()}
			/>

			<Input
				label="Senha"
				ref={passwordInputRef}
				inputStyle={s.input}
				inputContainerStyle={
					isPasswordFilled && {
						borderBottomColor: accent,
						borderBottomWidth: 3,
					}
				}
				placeholder={'sua senha'}
				leftIcon={
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
				rightIcon={
					showPassword ? (
						<Feather
							name="eye-off"
							size={32}
							onPress={() => setShowPassword(!showPassword)}
							style={[
								s.inputIcon,
								{
									color: accent,
									marginBottom: -10,
								},
							]}
						/>
					) : (
						<Feather
							name="eye"
							size={32}
							onPress={() => setShowPassword(!showPassword)}
							style={[
								s.inputIcon,
								{
									color: accent,
									marginBottom: -10,
								},
							]}
						/>
					)
				}
				secureTextEntry={!showPassword}
				onBlur={handlePasswordInputBlur}
				onFocus={handlePasswordInputFocus}
				onChangeText={handlePasswordInputChange}
				onSubmitEditing={handleSubmit}
			/>

			<Button
				title="Entrar"
				buttonStyle={s.button}
				titleStyle={s.buttonText}
				onPress={handleSubmit}
				disabled={!isEmailFilled || !isPasswordFilled}
			/>
		</View>
	);
}
