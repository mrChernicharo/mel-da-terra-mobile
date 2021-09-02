import React, { useContext } from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { Card } from 'react-native-elements';
import { IMel, IProduct } from '../utils/constants';
import styles from '../styles/orderedProductCard';
import { ThemeContext } from '../store/ThemeContext';

interface IOrderedProductCardProps {
	product: IProduct;
	mel: IMel | null;
}
export default function OrderedProductCard({
	product,
	mel,
}: IOrderedProductCardProps) {
	const { img, title, description, type, price } = product;
	const imgPath = String(img) as ImageSourcePropType;
	const brPrice = (price / 100).toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});

	const { theme } = useContext(ThemeContext);
	const s = styles(theme);

	return (
		<Card containerStyle={s.container} wrapperStyle={s.wrapper}>
			<View style={s.imgContainer}>
				<Image source={imgPath} style={s.image} />
			</View>
			<View style={s.outerInfoContainer}>
				<Text style={s.headingText}>{title}</Text>

				<View style={s.innerInfoContainer}>
					<View style={s.melInfo}>
						{mel && (
							<View
								style={[
									s.melCircle,
									{ backgroundColor: mel.hue || '#cdcdcf' },
								]}
							/>
						)}
						{mel && <Text>{mel.name}</Text>}
					</View>
					<Text style={s.priceText}>{brPrice}</Text>
				</View>
			</View>
		</Card>
	);
}
