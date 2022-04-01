import { Prisma } from "@prisma/client";

// import prisma from "../../prisma/prisma";

const ordersSelector = Prisma.validator<Prisma.OrdersSelect>()({
  id: true,
  createdAt: true,
  userId: true,
  address: true,
  status: true,
  order: {
    select: {
      id: true,
      ordersId: true,
      productId: true,
      product: true,
      amount: true,
      orders: true,
    },
  },
});

export default ordersSelector;
