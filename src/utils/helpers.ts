import { IProduct, IProductType } from './interfaces';

export const getBRPrice = (price: number) =>
	(price / 100).toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});

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
		let b = title.split('');
		let start = b.slice(0, 4);
		let end = b.splice(4);
		return `${start.join('')}s${end.join('')}`;
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
