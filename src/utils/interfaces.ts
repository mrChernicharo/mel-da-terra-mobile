export type IProductType = 'kit' | '150' | '350' | '480' | '780' | 'propolis';

export interface IMel {
	name: string;
	isAvailable: boolean;
	description: string;
	hue: string;
}

export interface IProduct {
	id?: string;
	title: string;
	description: string;
	type: IProductType;
	price: number;
	img: string;
	hasOptions: boolean;
}

export type IOrderProduct = {
	product: IProduct;
	mel: IMel | null;
	amount: number;
};

export type IOrder = {
	id: string;
	products: IOrderProduct[];
} | null;
