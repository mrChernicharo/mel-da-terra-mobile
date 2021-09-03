import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { OrdersContext } from '../store/OrdersContext';
import { ThemeContext } from '../store/ThemeContext';
import styles from '../styles/cartItems';

export default function CartItems() {
	const { currentOrder } = useContext(OrdersContext);

	const { theme } = useContext(ThemeContext);
	const s = styles(theme);

	return (
		<View style={s.container}>
			{currentOrder.map(item => (
				<Text key={item.id}>
					{item.mel?.name} {item.product.title} {item.amount}X
				</Text>
			))}
		</View>
	);
}
