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

type NewOrderNavigationProp = StackNavigationProp<StackParams, 'NewOrder'>;

export default function NewOrder() {
	const navigation = useNavigation<NewOrderNavigationProp>();
	const { theme } = useContext(ThemeContext);
	const s = styles(theme);
	const appProducts = products;

	return (
		<SafeAreaView style={s.container}>
			<View>
				<Text style={s.headingText}>Escolha um produto</Text>

				<FlatList
					data={appProducts}
					keyExtractor={(item: IProduct) => item.name}
					renderItem={({ item }) => <ProductCard data={item} />}
				/>
			</View>
		</SafeAreaView>
	);
}
