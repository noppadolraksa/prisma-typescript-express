import { Size } from "@prisma/client";
import prisma from "../../prisma/prisma";
import { CategoryType, ProductsType } from "../models/products.model";

export const createProduct = async (productPayload: ProductsType) => {
  const { productName, product } = productPayload;
  const create = await prisma.products.create({
    data: {
      productName: productName,
      product: { createMany: { data: product } },
    },
  });
  return create;
};

export const updateProduct = async (
  productUpdatePayload: ProductsType,
  productsId: number
) => {
  const { id, productName, product } = productUpdatePayload;
  const update = await prisma.products.update({
    where: { id: productsId },
    data: {
      id: id,
      productName: productName,
      product: { createMany: { data: product } },
    },
  });
  return update;
};

export const deleteProduct = async (productsId: number): Promise<string> => {
  await prisma.products.delete({
    where: { id: productsId },
  });
  return "deleted";
};

export const GetPageFilterProduct = async (
  page: number,
  limit: number,
  plainColor: string,
  pattern: string,
  figure: string,
  size: Size
) => {
  const fetchData = await prisma.products.findMany({
    select: {
      id: true,
      productName: true,
      product: {
        where: {
          AND: [
            { plainColor: plainColor },
            { pattern: pattern },
            { figure: figure },
            { size: size },
          ],
        },
      },
    },
    take: limit,
    skip: (page - 1) * limit,
  });
  return fetchData;
};
