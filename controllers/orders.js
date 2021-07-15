import Order from '../models/order.model.js';
import { order } from '../productData.js';


export const getOrders = async (req, res) => {
    try{
        try{
            await Order.insertMany(order);
        }
        catch(error){
        res.status(400).json({message: error.message, info: 'No Order found'});
        }
        const orders = await Order.find();
        console.log(orders);
        res.status(200).json(orders);
    }
    catch(error){
        res.status(400).json({message: error.message, info: 'No Order found'});
    }
}

export const getOrderById = async (req, res) => {
    try{
        const order = await Order.findById(req.params.id);
        console.log(order);
        res.status(200).json(order);
    }
    catch(error){
        res.status(400).json({message: error.message, info: 'Order not found'});
    }
}

export const deleteOrder = async (req, res) => {
    try{
        const order = await Order.findByIdAndDelete(req.params.id);
        console.log(order);
        res.status(200).json(order);
    }
    catch(error){
        res.status(400).json({message: error.message, info: 'Order not found'});
    }
}

export const createOrder = async (req, res) => {
    const details = req.body;

    const newOrder = new Order(details);
    try{
        const order = await newOrder.save();
        // console.log(orders);
        res.status(200).json(order);
    }
    catch(error){
        res.status(400).json({message: error.message, info: 'Error creating Order'});
    }
}

export const updateOrder = async (req, res) => {
    const {user, orderItems, shippingAddress, taxPrice, shippingPrice, totalPrice} = req.body;
    const id = req.params.id;
    try{
        const order = await Order.findById(id);
        order.user = user;
        order.orderItems = orderItems;
        order.shippingAddress = shippingAddress;
        order.taxPrice = taxPrice;
        order.shippingPrice = shippingPrice;
        order.totalPrice = totalPrice;
        // console.log(Orders);
        try{
            const newOrder = await order.save();
            res.status(200).json(newOrder);
        }
        catch(error){
            res.status(400).json({message: error.message, info: 'Order not updated'})
        }
    }
    catch(error){
        res.status(400).json({message: error.message, info: 'Order not found'});
    }
}