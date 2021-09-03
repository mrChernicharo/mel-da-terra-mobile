import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import { IMel, IProduct } from '../utils/constants';
import { generateUUID } from '../utils/helpers';

//an Order is an Array of products
//so Orders is an Array of Arrays
export type IOrder = {
	id: string;
	product: IProduct;
	mel: IMel | null;
	amount: number;
}[];

export interface IOrdersContextProps {
	children: JSX.Element[] | JSX.Element;
}
export interface IOrdersContext {
	currentOrder: IOrder;
	previousOrders: IOrder[];
	addOrderProduct: (
		product: IProduct,
		amount: number,
		mel: IMel | null
	) => void;
	removeOrderProduct: (id: string) => void;
	// updateOrderProduct: () => void;
}

export const OrdersContext = createContext<IOrdersContext>({
	currentOrder: [],
	previousOrders: [],
	addOrderProduct: (
		product: IProduct,
		amount: number,
		mel: IMel | null
	) => {},
	removeOrderProduct: (id: string) => {},
	// updateOrderProduct: () => {},
});

export function OrdersContextProvider({ children }: IOrdersContextProps) {
	const [currentOrder, setCurrentOrder] = useState<IOrder>([]);
	const [previousOrders, setPreviousOrders] = useState<IOrder[]>([]);

	function handleAddOrderProduct(
		product: IProduct,
		amount: number,
		mel: IMel | null
	) {
		const order = {
			id: generateUUID(20),
			product,
			amount,
			mel,
		};
		setCurrentOrder([...currentOrder, order]);
	}
	function handleRemoveOrderProduct(id: string) {
		setCurrentOrder(currentOrder.filter(order => order.product.id === id));
	}

	const context = {
		currentOrder,
		previousOrders,
		addOrderProduct: handleAddOrderProduct,
		removeOrderProduct: handleRemoveOrderProduct,
	};

	// useEffect(() => console.log(context), [context]);

	return (
		<OrdersContext.Provider value={context}>
			{children}
		</OrdersContext.Provider>
	);
}
