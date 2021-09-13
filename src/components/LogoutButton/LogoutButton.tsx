import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';

import { ThemeContext, useThemeContext } from '../../store/ThemeContext';
import { AppColors } from '../../styles/colors';
import styles from './styles';

interface ILogoutBtnProps {
    onPress: () => void;
}
export default function LogoutButton({ onPress }: ILogoutBtnProps) {
    const { theme, colors } = useThemeContext();
    const s = styles();
    return (
        <View style={s.container}>
            {/* <Text style={s.text}>Logout</Text> */}

            <Button
                style={s.button}
                titleStyle={s.text}
                title="Logout"
                type="clear"
                iconRight
                icon={<MaterialIcons name="logout" size={32} style={s.icon} />}
                onPress={onPress}
            />
        </View>
    );
}
