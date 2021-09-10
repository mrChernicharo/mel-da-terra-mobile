import React, { useContext } from 'react';
import { View, Text, Image, TouchableNativeFeedback, ImageSourcePropType } from 'react-native';
import { Card, ImageProps } from 'react-native-elements';

import { ThemeContext } from '../../store/ThemeContext';
import { IProduct } from '../../utils/interfaces';
import { getBRPrice } from '../../utils/helpers';
import styles from './styles';

export interface IProductCardProps {
    data: IProduct;
    onCardSelected: (data: IProduct) => void;
}

export default function ProductCard({ data, onCardSelected }: IProductCardProps) {
    const { img, title, description, price } = data;
    const imgPath = String(img) as string;
    const parsedPrice = getBRPrice(price);

    const { theme } = useContext(ThemeContext);
    const s = styles(theme);

    // console.log({ img, imgPath });
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
                    <Image style={s.img} source={imgPath as ImageSourcePropType} />
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
