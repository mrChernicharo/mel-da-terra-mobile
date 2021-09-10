import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../store/ThemeContext';
import { productPluralTitle } from '../../utils/helpers';
import { IOrderProduct } from '../../utils/interfaces';
import styles from '../CartItems/styles';
import { Card } from 'react-native-elements';

interface ICartItemProps {
    item: IOrderProduct;
}

export default function CartItem({ item }: ICartItemProps) {
    const { theme } = useTheme();
    const s = styles();

    return (
        <Card containerStyle={s.container}>
            {item.mel && (
                <View style={s.melContainer}>
                    <View style={[s.melCircle, { backgroundColor: item.mel?.hue }]} />
                    <Text style={s.text}>Mel {item.mel.name}</Text>
                </View>
            )}
            <Text style={s.text}>
                {item.amount}{' '}
                {item.amount === 1 ? item.product.title : productPluralTitle(item.product)}
            </Text>
            {/* <Text style={s.text}>
				{getBRPrice(item.product.price * item.amount)}
			</Text> */}
        </Card>
    );
}
