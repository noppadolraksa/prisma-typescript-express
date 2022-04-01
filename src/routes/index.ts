import { Router } from "express";
import { ProductsRoute } from "./products.route";
import { OrdersRoute } from "./orders.route";

const router: Router = Router();

router.use("/products", ProductsRoute);
router.use("/orders", OrdersRoute);

export const MainRouter: Router = router;
