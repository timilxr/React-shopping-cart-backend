import express from "express";
// import Product from "../models/product.model.js";

import { getProducts, getProductById, updateProduct, createProduct, deleteProduct } from '../controllers/products.js';

const router = express.Router();

// router.route('/').get((req, res)=>{
//     Product.find();
//     res.send('Hello world');
// })

router.route('/').get(getProducts).post(createProduct);

router.route('/:id').get(getProductById).post(updateProduct).put(deleteProduct);


export default router;