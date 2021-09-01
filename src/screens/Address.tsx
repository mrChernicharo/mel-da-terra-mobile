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
import { AddressNavigationProp } from '../routes/index';
import { Button, Input } from 'react-native-elements';

import { styles } from '../styles/address';
import { ThemeContext } from '../store/ThemeContext';
import splash from '../assets/min-lower.png';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

interface IAddressProps {
	theme: string;
}

const accent = '#de12ff';
const greeeen = '#41a36b';

export default function Address() {
	const navigation = useNavigation<AddressNavigationProp>();
	const { theme } = useContext(ThemeContext);

	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);
	const [address, setAddress] = useState<string>('');

	const s = styles(theme);

	function handleSubmit() {
		console.log(address);
		navigation.push('Login');
	}

	function handleInputBlur() {
		console.log('blured');
		setIsFocused(false);
		setIsFilled(!!address);
	}
	function handleInputFocus() {
		console.log('focused');
		setIsFocused(true);
	}
	function handleInputChange(val: string) {
		setIsFilled(!!val);
		setAddress(val);
	}

	return (
		<SafeAreaView style={s.container}>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			>
				<View style={s.section}>
					<Text style={s.text}>Informe o endereço para entrega</Text>

					<Input
						inputStyle={[s.input]}
						inputContainerStyle={[
							s.inputContainer,
							isFilled && {
								borderBottomColor: greeeen,
								borderBottomWidth: 3,
							},
						]}
						placeholder={'Endereço aqui'}
						rightIcon={
							<MaterialIcons
								name="location-city"
								size={32}
								style={[
									s.inputIcon,

									isFilled && {
										color: greeeen,
									},
								]}
							/>
						}
						onBlur={handleInputBlur}
						onFocus={handleInputFocus}
						onChangeText={handleInputChange}
					/>
					<Button
						title="Confirmar"
						buttonStyle={s.button}
						titleStyle={s.buttonText}
						onPress={handleSubmit}
					/>
					<View style={s.bottomLinkBox}>
						<Text style={s.text}>{'Depois informo. '}</Text>
						<TouchableOpacity>
							<Text style={s.linkText}>Pular</Text>
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}
