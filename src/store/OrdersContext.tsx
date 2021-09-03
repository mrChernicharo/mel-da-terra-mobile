import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import { IMel, IOrder, IOrderProduct, IProduct } from '../utils/interfaces';
import { generateUUID } from '../utils/helpers';

export interface IOrdersContextProps {
	children: JSX.Element[] | JSX.Element;
}
export interface IOrdersContext {
	currentOrder: IOrder;
	// previousOrders: IOrder[];
	addOrderProduct: (
		product: IProduct,
		amount: number,
		mel: IMel | null
	) => void;
	removeOrderProduct: (id: string) => void;
	// updateOrderProduct: () => void;
}

export const OrdersContext = createContext<IOrdersContext>({
	currentOrder: { id: '', products: [] },
	// previousOrders: [],
	// updateOrderProduct: () => {},
	addOrderProduct: (
		product: IProduct,
		amount: number,
		mel: IMel | null
	) => {},
	removeOrderProduct: (id: string) => {},
});

export function OrdersContextProvider({ children }: IOrdersContextProps) {
	// const [previousOrders, setPreviousOrders] = useState<IOrder[]>([]);
	const [currentOrder, setCurrentOrder] = useState<IOrder>({
		id: generateUUID(20),
		products: [],
	});

	// prettier-ignore
	function handleAddOrderProduct(product: IProduct, amount: number, mel: IMel | null) {
		const orderProduct = {
			product,
			mel,
			amount,
		};

		const newState: IOrder = { id: currentOrder?.id as string,  products: [ ...currentOrder?.products as IOrderProduct[],orderProduct ]}
		setCurrentOrder(newState);
	}
	function handleRemoveOrderProduct(id: string) {
		// setCurrentOrder(currentOrder.filter(order => order.product.id === id));
	}

	const context = {
		currentOrder,
		// previousOrders,
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
