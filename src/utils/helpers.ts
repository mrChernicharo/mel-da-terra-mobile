export const getBRPrice = (price: number) =>
	(price / 100).toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});
