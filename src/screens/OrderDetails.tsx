import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from '../routes/index';
import React from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground } from 'react-native';
import splash from '../assets/splash2.jpg';
import { Button } from 'react-native-elements';
import styles from '../styles/orderDetails';
import { useContext } from 'react';
import { ThemeContext } from '../store/ThemeContext';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { IMel, IProduct, meles, products } from '../utils/constants';
import MelCard from '../components/MelCard';
import ProductCard from '../components/ProductCard';
import OrderedProductCard from '../components/OrderedProductCard';
import { useState } from 'react';

type OrderDetailsNavigationProp = StackNavigationProp<
	StackParams,
	'OrderDetails'
>;

export default function OrderDetails() {
	const [mel, setMel] = useState<IMel | null>(null);
	const { theme } = useContext(ThemeContext);
	const s = styles(theme);

	const navigation = useNavigation<OrderDetailsNavigationProp>();
	const { routes } = navigation.getState();
	const product = routes[routes.length - 1]?.params?.product as IProduct;

	function handleMelSelected(mel: IMel) {
		setMel(mel);
	}

	return (
		<SafeAreaView style={s.container}>
			<View>
				<OrderedProductCard product={product} mel={mel} />

				<View>
					<Text style={s.headingText}>Escolha o Mel</Text>
				</View>

				<FlatList
					contentContainerStyle={s.listContainer}
					data={meles}
					keyExtractor={(item: IMel) => item.name}
					renderItem={({ item }) => (
						<MelCard
							mel={item}
							onCardSelected={handleMelSelected}
						/>
					)}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				/>

				{/* <ScrollView>
					{meles.map(item => (
						<MelCard
							key={item.name}
							mel={item}
							onCardSelected={handleMelSelected}
						/>
					))}
				</ScrollView> */}
			</View>
		</SafeAreaView>
	);
}
