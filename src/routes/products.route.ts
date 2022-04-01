import { Size } from "@prisma/client";
import { Router, Request, Response, NextFunction } from "express";
import {
  createProduct,
  deleteProduct,
  GetPageFilterProduct,
  updateProduct,
} from "../controllers/products.controller";

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
  let { page = 1, limit, plainColor, pattern, figure, size } = req.query;

  if (Number(limit) == 10 || Number(limit) == 20 || Number(limit) == 50) {
    try {
      let limits = limit ? limit : 10;
      const product = await GetPageFilterProduct(
        +page,
        +limits,
        plainColor as string,
        pattern as string,
        figure as string,
        size as Size
      );
      res.json(product);
    } catch (error) {
      next(error);
    }
  } else {
    res.status(400).json("invalid limit");
  }
});

export const ProductsRoute: Router = router;
