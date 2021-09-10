import React, { useContext } from 'react';
import { View, Text, ScrollView, useWindowDimensions } from 'react-native';
import BigBottomButton from '../../components/BigBottomButton/BigBottomButton';
import OrderedProductCard from '../../components/OrderedProductCard/OrderedProductCard';

import { OrdersContext } from '../../store/OrdersContext';
import { ThemeContext } from '../../store/ThemeContext';
import styles from './styles';
import { generateUUID, getBRPrice } from '../../utils/helpers';
import { IOrderProduct } from '../../utils/interfaces';

export default function Checkout() {
    const { theme } = useContext(ThemeContext);
    const s = styles(theme);
    const { width, height } = useWindowDimensions();

    const { currentOrder } = useContext(OrdersContext);
    const products = currentOrder?.products as IOrderProduct[];

    const reducedPrice = getBRPrice(
        products.reduce((sum, order, i) => sum + order.product.price * order.amount, 0)
    );

    function handleButtonPressed() {
        console.log(currentOrder?.products.map(order => [order.product.title, order.amount]));
    }
    return (
        <View style={s.container}>
            <Text style={s.headingText}>Seus Produtos</Text>

            <ScrollView>
                {products.map(order => (
                    <OrderedProductCard
                        key={generateUUID(8)}
                        amount={order.amount}
                        product={order.product}
                        mel={order.mel}
                    />
                ))}
            </ScrollView>

            <View style={[s.buttonContainer, { top: height - 280 }]}>
                <Text style={[s.headingText, { marginBottom: 20 }]}>
                    Valor total: {reducedPrice}
                </Text>

                <BigBottomButton title="Finalizar Pedido" buttonPressed={handleButtonPressed} />
            </View>
        </View>
    );
}
