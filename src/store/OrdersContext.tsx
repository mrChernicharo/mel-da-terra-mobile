import React, { createContext, useState, ReactNode } from 'react';
import { IMel, IOrder, IOrderProduct, IProduct } from '../utils/interfaces';
import { generateUUID } from '../utils/helpers';

export interface IOrdersContextProps {
    children: ReactNode;
}
export interface IOrdersContext {
    // previousOrders: IOrder[];
    // updateOrderProduct: () => void;
    currentOrder: IOrder;
    addOrderProduct: (product: IProduct, amount: number, mel: IMel | null) => void;
    removeOrderProduct: (id: string) => void;
}

export const OrdersContext = createContext<IOrdersContext>({
    // previousOrders: [],
    // updateOrderProduct: () => {},
    currentOrder: { id: '', products: [] },
    addOrderProduct: (product: IProduct, amount: number, mel: IMel | null) => {},
    removeOrderProduct: (id: string) => {},
});

export function OrdersContextProvider({ children }: IOrdersContextProps) {
    // const [previousOrders, setPreviousOrders] = useState<IOrder[]>([]);
    const [currentOrder, setCurrentOrder] = useState<IOrder>({
        id: generateUUID(20),
        products: [],
    });

    function handleAddOrderProduct(product: IProduct, amount: number, mel: IMel | null) {
        const orderProduct = {
            product,
            mel,
            amount,
        };

        const newState: IOrder = {
            id: currentOrder?.id as string,
            products: [...(currentOrder?.products as IOrderProduct[]), orderProduct],
        };

        setCurrentOrder(newState);
    }
    function handleRemoveOrderProduct(id: string) {
        // setCurrentOrder(currentOrder.filter(order => order.product.id === id));
    }

    const context = {
        // previousOrders,
        currentOrder,
        addOrderProduct: handleAddOrderProduct,
        removeOrderProduct: handleRemoveOrderProduct,
    };

    return <OrdersContext.Provider value={context}>{children}</OrdersContext.Provider>;
}
