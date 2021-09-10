import React, { useContext, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AddressNavigationProp } from '../../routes/index';
import { Button, Input } from 'react-native-elements';

import styles from './styles';
import { useTheme } from '../../store/ThemeContext';
import { MaterialIcons } from '@expo/vector-icons';
import { AppColors } from '../../styles/colors';

interface IAddressProps {
    theme: string;
}

export default function Address() {
    const navigation = useNavigation<AddressNavigationProp>();
    const { theme } = useTheme();
    const { accent } = AppColors(theme);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [address, setAddress] = useState<string>('');

    const s = styles();

    function goToNewOrderScreen() {
        navigation.push('NewOrder');
    }
    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!address);
    }
    function handleInputFocus() {
        setIsFocused(true);
    }
    function handleInputChange(val: string) {
        setIsFilled(!!val);
        setAddress(val);
    }
    function handleSubmit() {
        goToNewOrderScreen();
    }

    return (
        <SafeAreaView style={s.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={s.section}>
                    <View style={s.sectionTop}>
                        <Text style={s.text}>Informe o endereço para entrega</Text>

                        <Input
                            inputStyle={s.input}
                            inputContainerStyle={
                                isFilled && {
                                    borderBottomColor: accent,
                                    borderBottomWidth: 3,
                                }
                            }
                            placeholder={'Endereço aqui'}
                            rightIcon={
                                <MaterialIcons
                                    name="location-city"
                                    size={32}
                                    style={[
                                        s.inputIcon,

                                        isFilled && {
                                            color: accent,
                                        },
                                    ]}
                                />
                            }
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />
                    </View>

                    <View style={s.sectionBottom}>
                        <Button
                            title="Confirmar"
                            buttonStyle={s.button}
                            titleStyle={s.buttonText}
                            onPress={handleSubmit}
                            disabled={!isFilled}
                        />
                        <View style={s.bottomLinkBox}>
                            <Text style={s.text}>{'Depois informo. '}</Text>
                            <TouchableOpacity onPress={goToNewOrderScreen}>
                                <Text style={s.linkText}>Pular</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
