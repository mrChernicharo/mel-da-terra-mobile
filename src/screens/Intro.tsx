import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from '../routes/index';
import React from 'react';
import {
	SafeAreaView,
	View,
	Text,
	Image,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from '../styles/intro';

import { useContext } from 'react';
import { ThemeContext } from '../store/ThemeContext';

import bgImg from '../assets/min-lower.png';
import logoImg from '../assets/logo-trans.png';

type IntroNavigationProp = StackNavigationProp<StackParams, 'Intro'>;
interface IIntroProps {
	theme: string;
}

export default function Intro() {
	const navigation = useNavigation<IntroNavigationProp>();
	const { theme } = useContext(ThemeContext);

	const s = styles(theme);
	// console.log(theme);

	function handleBtnPressed() {
		navigation.push('Address');
	}

	return (
		<SafeAreaView style={s.container}>
			<ImageBackground
				style={s.bgImage}
				source={bgImg}
				resizeMode="cover"
			>
				<View style={s.section}>
					<Text style={s.headingText}>Boas vindas</Text>
					<Image style={s.logo} source={logoImg} />
					<Text style={s.text}>Meles crus e orgânicos</Text>
					<Button
						title="Vamos lá"
						buttonStyle={s.button}
						titleStyle={s.buttonText}
						onPress={handleBtnPressed}
					/>
					<View style={s.bottomLinkBox}>
						<Text style={s.text}>{'Já tenho uma conta '}</Text>
						<TouchableOpacity>
							<Text style={s.linkText}>fazer Login</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
}
