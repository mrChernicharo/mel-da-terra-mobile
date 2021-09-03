import React, { useContext } from 'react';
import {
	SafeAreaView,
	View,
	Text,
	Image,
	ImageBackground,
	Dimensions,
	useWindowDimensions,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from '../routes/index';

import { ThemeContext } from '../store/ThemeContext';
import { OrdersContext } from '../store/OrdersContext';
import { products } from '../utils/constants';
import ProductCard from '../components/ProductCard';
import styles from '../styles/newOrder';
import CartItems from '../components/CartItems';
import { IOrderProduct, IProduct } from '../utils/interfaces';

type NewOrderNavigationProp = StackNavigationProp<StackParams, 'NewOrder'>;

export default function NewOrder() {
	const navigation = useNavigation<NewOrderNavigationProp>();

	const { theme } = useContext(ThemeContext);
	const s = styles(theme);

	const { currentOrder } = useContext(OrdersContext);
	const orderProducts = currentOrder?.products as IOrderProduct[];

	const { height, width } = useWindowDimensions();

	function handleProductSelected(product: IProduct) {
		console.log(product);
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
					{orderProducts?.length
						? 'Adicione mais produtos'
						: 'Escolha o seu produto'}
				</Text>

				<FlatList
					data={products}
					ListFooterComponent={
						<View
							style={{
								height: orderProducts?.length ? 290 : 120,
							}}
						></View>
					}
					keyExtractor={(item: IProduct) => item.title}
					renderItem={({ item }) => (
						<ProductCard
							data={item}
							onCardSelected={handleProductSelected}
						/>
					)}
				/>
			</View>
			<View style={[s.buttonContainer, { top: height - 240 }]}>
				<Button
					title="Finalizar Pedido"
					buttonStyle={[s.button, { width: width - 30 }]}
					titleStyle={s.buttonText}
					disabled={!orderProducts.length}
					onPress={handleButtonPressed}
				/>
			</View>
		</SafeAreaView>
	);
}
