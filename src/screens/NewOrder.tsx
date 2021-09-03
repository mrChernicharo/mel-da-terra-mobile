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
import { IProduct, products } from '../utils/constants';
import ProductCard from '../components/ProductCard';
import styles from '../styles/newOrder';
import CartItems from '../components/CartItems';

type NewOrderNavigationProp = StackNavigationProp<StackParams, 'NewOrder'>;

export default function NewOrder() {
	const navigation = useNavigation<NewOrderNavigationProp>();

	const { theme } = useContext(ThemeContext);
	const s = styles(theme);

	const { currentOrder } = useContext(OrdersContext);

	const { height, width } = useWindowDimensions();

	function handleProductSelected(product: IProduct) {
		console.log(product);
		navigation.push('OrderDetails', { product });
	}

	return (
		<SafeAreaView style={s.container}>
			{!!currentOrder.length && <CartItems />}

			<View style={[s.productsContainer]}>
				<Text style={s.headingText}>
					{currentOrder.length
						? 'Adicione mais produtos'
						: 'Escolha o seu produto'}
				</Text>

				<FlatList
					data={products}
					ListFooterComponent={
						<View
							style={{ height: currentOrder.length ? 320 : 120 }}
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
			<View style={[s.buttonContainer, { top: height - 260 }]}>
				<Button
					title="Finalizar Pedido"
					buttonStyle={[s.button, { width: width - 30 }]}
					titleStyle={s.buttonText}
				/>
			</View>
		</SafeAreaView>
	);
}
