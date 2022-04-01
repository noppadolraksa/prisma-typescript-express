import prisma from "../../prisma/prisma";
import { ProductsType } from "../models/products.model";

export const createProduct = async (
  productPayload: ProductsType
): Promise<ProductsType> => {
  const { productName, product } = productPayload;
  await prisma.products.create({
    data: {
      productName: productName,
      product: { createMany: { data: product } },
    },
  });
  return productPayload;
};

export const updateProduct = async (
  productUpdatePayload: ProductsType,
  productsId: number
): Promise<ProductsType> => {
  const { id, productName, product } = productUpdatePayload;
  await prisma.products.update({
    where: { id: productsId },
    data: {
      id: id,
      productName: productName,
      product: { createMany: { data: product } },
    },
  });
  return productUpdatePayload;
};

export const deleteProduct = async (productsId: number): Promise<string> => {
  await prisma.products.delete({
    where: { id: productsId },
  });
  return "deleted";
};
