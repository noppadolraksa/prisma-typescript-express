import { Order, OrderStatus, Product } from "@prisma/client";

export type OrdersType = {
  id: number;
  createdAt: string;
  address: string;
  status: OrderStatus;
  order: Order[];
};

export type OrderTypeWithNoId = {
  amount: number;
  price: number;
  productId: number;
};
export type OrdersTypeWithNoId = {
  address: string;
  status: OrderStatus;
  order: OrderTypeWithNoId[];
};
