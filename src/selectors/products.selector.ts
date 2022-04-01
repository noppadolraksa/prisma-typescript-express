import { Prisma } from "@prisma/client";
const example = 1;
console.log(example);
// import prisma from "../../prisma/prisma";

const productsSelector = Prisma.validator<Prisma.ProductsSelect>()({
  id: true,
  productName: true,
  // product: {
  //   select: {
  //     id: true,
  //     productsId: true,
  //     price: true,
  //     plainColor: true,
  //     pattern: true,
  //     figure: true,
  //     size: true,
  //     gender: true,
  //     order: true,
  //   },
  // },
  product: true,
});

export default productsSelector;
