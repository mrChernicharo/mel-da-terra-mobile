import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export default function Profile() {
    return (
        <View>
            <Text>Teste</Text>

            <TextInput placeholder="Nome" autoCorrect={false}></TextInput>

            <TextInput placeholder="Sobrenome"></TextInput>

            <Button title="Press me" onPress={() => {}} />
        </View>
    );
}
