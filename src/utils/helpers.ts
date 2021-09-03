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
