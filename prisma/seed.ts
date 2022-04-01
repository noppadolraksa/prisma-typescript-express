import { dummyOrder, dummyProduct } from "./../data";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const { productName, product } = dummyProduct;
  const { address, status, order } = dummyOrder;
  await prisma.products.create({
    data: {
      productName,
      product: {
        createMany: {
          data: product,
        },
      },
    },
  });

  await prisma.orders.create({
    data: {
      address,
      status,
      order: {
        createMany: {
          data: order,
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
