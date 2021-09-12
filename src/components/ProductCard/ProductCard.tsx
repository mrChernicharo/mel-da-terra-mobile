import React, { useContext } from 'react';
import { View, Text, Image, TouchableNativeFeedback, ImageSourcePropType } from 'react-native';
import { Card, ImageProps } from 'react-native-elements';

import { useThemeContext } from '../../store/ThemeContext';
import { IProduct } from '../../utils/interfaces';
import { getBRPrice } from '../../utils/helpers';
import styles from './styles';

export interface IProductCardProps {
    data: IProduct;
    onCardSelected: (data: IProduct) => void;
}

export default function ProductCard({ data, onCardSelected }: IProductCardProps) {
    const { img, title, description, price } = data;
    const parsedPrice = getBRPrice(price);

    const { theme } = useThemeContext();
    const s = styles();

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
                    <Image style={s.img} source={img} />
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
