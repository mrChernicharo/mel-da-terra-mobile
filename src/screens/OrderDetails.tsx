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
import { FlatList } from 'react-native-gesture-handler';
import { IMel, IProduct, meles, products } from '../utils/constants';
import MelCard from '../components/MelCard';

type OrderDetailsNavigationProp = StackNavigationProp<
	StackParams,
	'OrderDetails'
>;

export default function OrderDetails() {
	const { theme } = useContext(ThemeContext);
	const s = styles(theme);

	const navigation = useNavigation<OrderDetailsNavigationProp>();
	const { routes } = navigation.getState();

	const lastRoute = routes[routes.length - 1];
	console.log('router fetched: ', lastRoute?.params?.product);

	function handleMelSelected() {}

	return (
		<SafeAreaView style={s.container}>
			<View>
				<Text style={s.headingText}>Escolha o Mel</Text>

				<FlatList
					data={meles}
					keyExtractor={(item: IMel) => item.name}
					renderItem={({ item }) => (
						<MelCard
							data={item}
							onCardSelected={handleMelSelected}
						/>
					)}
				/>
			</View>
		</SafeAreaView>
	);
}
