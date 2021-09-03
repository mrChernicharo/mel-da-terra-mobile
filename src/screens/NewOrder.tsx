import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from '../routes/index';
import React from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground } from 'react-native';
import splash from '../assets/splash2.jpg';
import { Button } from 'react-native-elements';
import styles from '../styles/newOrder';
import { useContext } from 'react';
import { ThemeContext } from '../store/ThemeContext';
import { FlatList } from 'react-native-gesture-handler';
import { IProduct, products } from '../utils/constants';
import ProductCard from '../components/ProductCard';
import { OrdersContext } from '../store/OrdersContext';

type NewOrderNavigationProp = StackNavigationProp<StackParams, 'NewOrder'>;

export default function NewOrder() {
	const navigation = useNavigation<NewOrderNavigationProp>();

	const { theme } = useContext(ThemeContext);
	const s = styles(theme);

	const { currentOrder } = useContext(OrdersContext);

	function handleProductSelected(product: IProduct) {
		console.log(product);
		navigation.push('OrderDetails', { product });
	}

	return (
		<SafeAreaView style={s.container}>
			<View style={s.cartContainer}>
				<Text>Sua sacola</Text>

				{currentOrder.map(item => (
					<Text key={item.id}>
						{item.product.title} {item.mel?.name} {item.amount}
					</Text>
				))}
			</View>
			<View style={s.productsContainer}>
				<Text style={s.headingText}>Escolha um produto</Text>

				<FlatList
					data={products}
					keyExtractor={(item: IProduct) => item.title}
					renderItem={({ item }) => (
						<ProductCard
							data={item}
							onCardSelected={handleProductSelected}
						/>
					)}
				/>
			</View>
			<View style={s.buttonContainer}>
				<Text>Finalizar Pedido</Text>
			</View>
		</SafeAreaView>
	);
}
