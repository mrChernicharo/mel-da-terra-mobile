import React, { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import OrderedProductCard from '../components/OrderedProductCard';

import { OrdersContext } from '../store/OrdersContext';
import { ThemeContext } from '../store/ThemeContext';
import styles from '../styles/checkout';
import { generateUUID } from '../utils/helpers';
import { IOrderProduct } from '../utils/interfaces';

export default function Checkout() {
	const { theme } = useContext(ThemeContext);
	const s = styles(theme);

	const { currentOrder } = useContext(OrdersContext);
	const products = currentOrder?.products as IOrderProduct[];
	return (
		<View style={s.container}>
			<Text style={s.headingText}>Seu Pedido</Text>

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
		</View>
	);
}
