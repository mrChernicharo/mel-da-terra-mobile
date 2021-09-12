import React, { useEffect, useContext } from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IntroNavigationProp } from '../../routes/index';
import { Button } from 'react-native-elements';
import { styles } from './styles';

import { useThemeContext } from '../../store/ThemeContext';

import bgImg from '../../assets/min-lower.png';
import logoImg from '../../assets/logo-trans.png';
import { useAuthContext } from '../../store/AuthContext';

export default function Intro() {
    const { user } = useAuthContext();
    const { theme } = useThemeContext();
    const s = styles();
    const navigation = useNavigation<IntroNavigationProp>();

    function handleBtnPressed() {
        navigation.push('Login');
    }
    function handleLinkPressed() {
        navigation.push('SignUp');
    }

    useEffect(() => {
        // console.log(user);

        if (!user) return;

        navigation.push('NewOrder');
    }, [user]);

    return (
        <SafeAreaView style={s.container}>
            <ImageBackground style={s.bgImage} source={bgImg} resizeMode="cover">
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
                        <Text style={s.text}>É minha primeira vez aqui. </Text>
                        <TouchableOpacity onPress={handleLinkPressed}>
                            <Text style={s.linkText}>Criar conta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}
