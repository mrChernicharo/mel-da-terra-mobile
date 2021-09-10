import React, { useContext } from 'react';
import { SafeAreaView, View, Text, useWindowDimensions, Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from '../../routes/index';

import { ThemeContext } from '../../store/ThemeContext';
import { OrdersContext } from '../../store/OrdersContext';
import { products } from '../../utils/constants';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './styles';
import CartItems from '../../components/CartItems/CartItems';
import { IOrderProduct, IProduct } from '../../utils/interfaces';
import BigBottomButton from '../../components/BigBottomButton/BigBottomButton';

type NewOrderNavigationProp = StackNavigationProp<StackParams, 'NewOrder'>;

export default function NewOrder() {
    const navigation = useNavigation<NewOrderNavigationProp>();

    const { theme } = useContext(ThemeContext);
    const s = styles(theme);

    const { currentOrder } = useContext(OrdersContext);
    const orderProducts = currentOrder?.products as IOrderProduct[];

    const { height, width } = useWindowDimensions();

    function handleProductSelected(product: IProduct) {
        navigation.push('OrderDetails', { product });
    }
    function handleButtonPressed() {
        navigation.push('Checkout');
    }

    return (
        <SafeAreaView style={s.container}>
            {!!orderProducts?.length && <CartItems />}

            <View style={[s.productsContainer]}>
                <Text style={s.headingText}>
                    {orderProducts?.length ? 'Adicione mais produtos' : 'Escolha o seu produto'}
                </Text>

                <FlatList
                    data={products}
                    keyExtractor={(item: IProduct) => item.title}
                    renderItem={({ item }) => (
                        <ProductCard data={item} onCardSelected={handleProductSelected} />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={
                        <View
                            style={{
                                height: orderProducts?.length
                                    ? Platform.OS === 'android'
                                        ? 280
                                        : 260
                                    : 10,
                            }}
                        ></View>
                    }
                />
            </View>
            {!!orderProducts?.length && (
                <View
                    style={[
                        s.buttonContainer,
                        { top: height - (Platform.OS === 'android' ? 165 : 210) },
                    ]}
                >
                    <BigBottomButton title="Fechar Pedido" buttonPressed={handleButtonPressed} />
                </View>
            )}
        </SafeAreaView>
    );
}
