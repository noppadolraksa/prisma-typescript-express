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

export type CategoryType = {
  plainColor: string;
  pattern: string;
  figure: string;
  size: Size;
};

export type getRequestType = {
  page: number;
  limit: 10 | 20 | 50;
  plainColor: string;
  pattern: string;
  figure: string;
  size: Size;
};
