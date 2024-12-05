import { Router } from "express";
import createProduct from "../controllers/post/createProduct.js";
import getProduct from "../controllers/get/getProduct.js";
import deleteProduct from "../controllers/delete/deleteProduct.js";

const router = Router()

router.get('/product',getProduct)

router.post('/product/create',createProduct)

router.delete('/producto/delete',deleteProduct)

export default router;