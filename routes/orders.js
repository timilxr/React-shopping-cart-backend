import express from "express";

import { getOrders, getOrderById, 
    updateOrder, 
    createOrder, deleteOrder } from '../controllers/orders.js';

const router = express.Router();

router.route('/').get(getOrders).post(createOrder);

router.route('/:id')
.get(getOrderById)
.post(updateOrder)
.put(deleteOrder);

export default router;