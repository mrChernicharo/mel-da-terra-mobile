import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { OrdersContext } from '../../store/OrdersContext';
import { ThemeContext } from '../../store/ThemeContext';
import styles from '../CartItem/styles';
import { generateUUID } from '../../utils/helpers';
import { IOrderProduct } from '../../utils/interfaces';
import CartItem from '../CartItem/CartItem';

export default function CartItems() {
    const { currentOrder } = useContext(OrdersContext);
    const orderProducts = currentOrder?.products as IOrderProduct[];

    const { theme } = useContext(ThemeContext);
    const s = styles(theme);

    return (
        <View style={s.container}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                {orderProducts.map(item => (
                    <CartItem item={item} key={generateUUID(6)} />
                ))}
            </ScrollView>
        </View>
    );
}
