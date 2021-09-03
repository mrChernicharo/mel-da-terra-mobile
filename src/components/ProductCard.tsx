import React, { useContext } from 'react';
import {
	View,
	Text,
	Image,
	TouchableNativeFeedback,
	ImageSourcePropType,
} from 'react-native';
import { Card, ImageProps } from 'react-native-elements';

import { ThemeContext } from '../store/ThemeContext';
import { IProduct } from '../utils/constants';
import { getBRPrice } from '../utils/helpers';
import styles from '../styles/productCard';

export interface IProductCardProps {
	data: IProduct;
	onCardSelected: (data: IProduct) => void;
}

export default function ProductCard({
	data,
	onCardSelected,
}: IProductCardProps) {
	const { img, title, description, type, price } = data;
	const imgPath = String(img) as ImageSourcePropType;
	const parsedPrice = getBRPrice(price);

	const { theme } = useContext(ThemeContext);
	const s = styles(theme);

	function handleCardPress() {
		onCardSelected(data);
	}

	return (
		<TouchableNativeFeedback
			onPress={handleCardPress}
			// onLayout={/* someAnimation */}
		>
			<Card containerStyle={s.container} wrapperStyle={s.wrapper}>
				<View style={s.imgContainer}>
					<Image source={imgPath} width={80} height={80} />
				</View>
				<View style={s.infoContainer}>
					<Text style={s.headingText}>{title}</Text>
					<Text style={s.text}>{description}</Text>
					<Text style={s.priceText}>{parsedPrice}</Text>
				</View>
			</Card>
		</TouchableNativeFeedback>
	);
}
