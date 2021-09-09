import React, { useContext } from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { Card } from 'react-native-elements';
import { IMel, IProduct } from '../utils/interfaces';
import styles from '../styles/orderedProductCard';
import { ThemeContext } from '../store/ThemeContext';
import { getBRPrice } from '../utils/helpers';

interface IOrderedProductCardProps {
  product: IProduct;
  mel: IMel | null;
  amount: number;
}
export default function OrderedProductCard({ product, mel, amount }: IOrderedProductCardProps) {
  const { img, title, price } = product;

  const imgPath = String(img) as any;
  const parsedPrice = getBRPrice(price * amount);

  const { theme } = useContext(ThemeContext);
  const s = styles(theme);

  return (
    <Card containerStyle={s.container} wrapperStyle={s.wrapper}>
      <View style={s.imgContainer}>
        <Image source={imgPath} style={s.image} />
      </View>
      <View style={s.outerInfoContainer}>
        <View style={s.headingContainer}>
          <Text style={s.headingText}>{title}</Text>
          {!!amount && (
            <Text style={s.amountText}>
              {amount} unidade{amount > 1 && 's'}
            </Text>
          )}
        </View>

        <View style={s.innerInfoContainer}>
          <View style={s.melInfo}>
            {mel && <View style={[s.melCircle, { backgroundColor: mel.hue || '#cdcdcf' }]} />}
            {mel && <Text style={s.amountText}>{mel.name}</Text>}
          </View>
          <Text style={s.priceText}>{parsedPrice}</Text>
        </View>
      </View>
    </Card>
  );
}
