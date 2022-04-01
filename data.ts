import {
  OrdersTypeWithNoId,
  OrderTypeWithNoId,
} from "./src/models/orders.model";

import { ProductTypeWithNoId } from "./src/models/products.model";

const item: ProductTypeWithNoId[] = [
  {
    price: 0,
    plainColor: "test",
    pattern: "test",
    figure: "test",
    amount: 0,
    size: "XS",
    gender: "male",
  },
];

export const dummyProduct = {
  productName: "shirt",
  product: item,
};

const order: OrderTypeWithNoId[] = [
  {
    price: 100,
    amount: 10,
    productId: 1,
  },
];

export const dummyOrder: OrdersTypeWithNoId = {
  address: "test",
  status: "pending",
  order: order,
};
