import React from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { MyOrdersNavigationProp } from '../../routes/index';

import styles from './styles';
import splash from '../../assets/splash2.jpg';

interface IMyOrdersProps {
    theme: string;
}

export default function MyOrders({ theme }: IMyOrdersProps) {
    const navigation = useNavigation<MyOrdersNavigationProp>();

    const s = styles();

    function handleBtnPressed() {
        navigation.push('Intro');
    }

    return (
        <SafeAreaView style={s.container}>
            <ImageBackground source={splash} resizeMode="cover" style={s.image}>
                <View>
                    <Text>Meus Pediods</Text>
                    <Button title="Vamos lá" onPress={handleBtnPressed} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}
