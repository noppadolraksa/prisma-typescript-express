import { Router, Request, Response, NextFunction } from "express";
import { deleteOrder, updateorder } from "../controllers/orders.controller";

const router = Router();

//UPDATE
router.post(
  "/:_id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const order = await updateorder(req.body, req.params._id);
      res.json({ order });
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
      const order = await deleteOrder(req.params._id);
      res.send({ order });
    } catch (error) {
      next(error);
    }
  }
);

export const OrdersRoute: Router = router;
