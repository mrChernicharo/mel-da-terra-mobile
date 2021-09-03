import React, { useState, useContext } from 'react';
import { SafeAreaView, View, Text, ViewStyle } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import NumericInput from 'react-native-numeric-input';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { StackParams } from '../routes/index';
import { ThemeContext } from '../store/ThemeContext';
import { IMel, IProduct, meles, products } from '../utils/constants';

import OrderedProductCard from '../components/OrderedProductCard';
import MelCard from '../components/MelCard';

import styles from '../styles/orderDetails';
import { AppColors } from '../styles/colors';
import { Button } from 'react-native-elements';
import { getBRPrice } from '../utils/helpers';
import { FontAwesome } from '@expo/vector-icons';
import { OrdersContext } from '../store/OrdersContext';

type OrderDetailsNavigationProp = StackNavigationProp<
	StackParams,
	'OrderDetails'
>;

export default function OrderDetails() {
	const [mel, setMel] = useState<IMel | null>(null);
	const [amount, setAmount] = useState(0);

	const { theme } = useContext(ThemeContext);
	const colors = AppColors(theme);
	const s = styles(theme);

	const navigation = useNavigation<OrderDetailsNavigationProp>();
	const { routes } = navigation.getState();
	const product = routes[routes.length - 1]?.params?.product as IProduct;

	const { addOrderProduct } = useContext(OrdersContext);

	function handleMelSelected(selectedMel: IMel) {
		if (selectedMel.name === mel?.name) return setMel(null);
		setMel(selectedMel);
	}
	function handleAmountChange(value: number) {
		setAmount(value);
	}
	function handleButtonPress() {
		addOrderProduct(product, amount, mel);
		// TODO: show snack
		navigation.goBack();
	}

	return (
		<SafeAreaView style={s.container}>
			{product && (
				<View style={s.container}>
					<View style={s.productContainer}>
						<OrderedProductCard
							product={product}
							mel={mel}
							amount={amount}
						/>
					</View>

					{product.hasOptions && (
						<View style={s.melesContainer}>
							<Text style={s.headingText}>
								Escolha o Mel
								{mel && (
									<FontAwesome
										name="check"
										color={colors.green}
										size={28}
									/>
								)}
							</Text>

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
						</View>
					)}

					<View style={s.amountContainer}>
						<Text style={s.headingText}>
							Quantas unidades?
							{!!amount && (
								<FontAwesome
									name="check"
									color={colors.green}
									size={28}
								/>
							)}
						</Text>

						<View style={s.numericInputContainer}>
							<NumericInput
								value={amount}
								onChange={handleAmountChange}
								totalWidth={260}
								totalHeight={42}
								iconSize={25}
								valueType="real"
								minValue={0}
								rounded
								textColor={colors.text}
								iconStyle={
									{
										color: colors.text,
										fontSize: 24,
									} as ViewStyle
								}
								rightButtonBackgroundColor={colors.primary}
								leftButtonBackgroundColor={colors.primary}
							/>
						</View>
					</View>

					<View style={s.buttonContainer}>
						<Button
							buttonStyle={s.button}
							titleStyle={s.buttonText}
							title={`Adicionar produto${
								amount === 1 ? '' : 's'
							} ${getBRPrice(amount * product.price)}
					`}
							disabled={
								product.hasOptions ? !amount || !mel : !amount
							}
							onPress={handleButtonPress}
						/>
					</View>
				</View>
			)}
		</SafeAreaView>
	);
}
