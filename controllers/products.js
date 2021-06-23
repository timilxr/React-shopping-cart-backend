import Product from '../models/product.model.js';
import data from '../productData.js';


export const getProducts = async (req, res) => {
    try{
        // Product.insertMany(data);
        const products = await Product.find();
        console.log(products);
        res.status(200).json(products);
    }
    catch{
        res.status(400).json({message: error.message, info: 'No product now found'});
    }
}

export const getProductById = async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        console.log(product);
        res.status(200).json(product);
    }
    catch{
        res.status(400).json({message: error.message, info: 'Product not found'});
    }
}

export const deleteProduct = async (req, res) => {
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        console.log(product);
        res.status(200).json(product);
    }
    catch{
        res.status(400).json({message: error.message, info: 'Product not found'});
    }
}

export const createProduct = async (req, res) => {
    const details = req.body;
    // const data = getProducts();
    // details.id = data.length > 0 ? data[data.length - 1].id + 1 : 1;

    const newProduct = new Product(details);
    try{
        const product = await newProduct.save();
        // console.log(products);
        res.status(200).json(product);
    }
    catch{
        res.status(400).json({message: error.message, info: 'Error creating Product'});
    }
}

export const updateProduct = async (req, res) => {
    const {name, image, price, category} = req.body;
    const id = req.params.id;
    try{
        const product = await Product.findById(id);
        product.name = name;
        product.image = image;
        product.price = price;
        product.category = category;
        // console.log(products);
        try{
            const newProduct = await product.save();
            res.status(200).json(newProduct);
        }
        catch{
            res.status(400).json({message: error.message, info: 'Product not updated'})
        }
    }
    catch{
        res.status(400).json({message: error.message, info: 'Product not found'});
    }
}