import prisma from "../../prisma/prisma";
import { OrdersType } from "../models/orders.model";

// export const createOrder = async (orderPayload: OrdersType): Promise<any> => {
//   const { id, address, createdAt, order, status } = orderPayload;
//   await prisma.orders.create({
//     data: {
//       id: id,
//       address: address,
//       createdAt: createdAt,
//       status: status,
//       order: { createMany: { data: order } },
//     },
//   });
// };

export const updateorder = async (
  orderUpdatePayload: OrdersType,
  ordersId: number
) => {
  const { id, address, createdAt, order, status } = orderUpdatePayload;
  const res = await prisma.orders.update({
    where: { id: ordersId },
    data: {
      id: id,
      address: address,
      createdAt: createdAt,
      status: status,
      order: { createMany: { data: order } },
    },
  });
  return res;
};

export const deleteOrder = async (ordersId: number) => {
  const res = await prisma.orders.delete({
    where: { id: ordersId },
  });
  return res;
};
