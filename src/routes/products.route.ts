import { Size } from "@prisma/client";
import { Router, Request, Response, NextFunction } from "express";
import {
  createProduct,
  deleteProduct,
  GetPageFilterProduct,
  updateProduct,
} from "../controllers/products.controller";
import { query, validationResult } from "express-validator";
import { getRequestType } from "../models/products.model";

const router = Router();

//CREATE
router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await createProduct(req.body);
    res.json({ product });
  } catch (error) {
    next(error);
  }
});

//UPDATE
router.post(
  "/:_id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = await updateProduct(req.body, +req.params._id);
      res.json({ product });
    } catch (error) {
      next(error);
    }
  }
);

//DELETE
router.delete(
  "/:_id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = await deleteProduct(+req.params._id);
      res.send({ product });
    } catch (error) {
      next(error);
    }
  }
);

//GET & PAGINATION & FILTER
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  let { page = 1, limit = 10, plainColor, pattern, figure, size } = req.query;

  try {
    const product = await GetPageFilterProduct(
      +page,
      +limit as 10 | 20 | 50,
      plainColor as string,
      pattern as string,
      figure as string,
      size as Size
    );
    res.json(product);
  } catch (error) {
    next(error);
  }
});

export const ProductsRoute: Router = router;
