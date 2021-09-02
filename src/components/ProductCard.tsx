import React from 'react';
import { View, Text } from 'react-native';
import { IProduct } from '../utils/constants';

export interface IProductCardProps {
	data: IProduct;
}

export default function ProductCard({ data }: IProductCardProps) {
	return (
		<View>
			<Text>{data.name}</Text>
		</View>
	);
}
