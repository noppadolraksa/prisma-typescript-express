import { Router, Request, Response, NextFunction } from "express";
import {
  createProduct,
  deleteProduct,
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

export const ProductsRoute: Router = router;
