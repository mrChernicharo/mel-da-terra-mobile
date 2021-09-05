import { IProduct, IProductType } from './interfaces';
import { Platform } from 'react-native';

export const getBRPrice = (price: number) => {
	const parsedPrice = (price / 100).toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});

	return Platform.OS === 'android'
		? `R$${(price / 100).toFixed(2)}`
		: parsedPrice;
};

export function generateUUID(digits: number) {
	let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ';
	let uuid = [];
	for (let i = 0; i < digits; i++) {
		uuid.push(str[Math.floor(Math.random() * str.length)]);
	}
	return uuid.join('');
}

export function productPluralTitle(product: IProduct) {
	const plural = (title: string) => {
		const str = title.split('');
		str.splice(4, 0, 's');
		return str;
	};

	switch (product.type) {
		case '150':
		case '350':
		case '480':
		case '780':
			return plural(product.title);
		case 'kit':
			return 'kits degustação';
		case 'propolis':
		default:
			return;
	}
}
