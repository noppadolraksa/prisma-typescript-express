import { Gender, Product, Size } from "@prisma/client";

export interface ProductsType {
  id: number;
  productName: string;
  product: Product[];
}

export type ProductTypeWithNoId = {
  price: number;
  plainColor: string;
  pattern: string;
  figure: string;
  amount: number;
  size: Size;
  gender: Gender;
};
