import { Router } from "express";
import createProduct from "../controllers/post/createProduct.js";

const router = Router()

router.post('/product/create',createProduct)

export default router;