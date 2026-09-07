const path = require('path');
const productService = require('../services/productService');

// Hand over to service and return all products
const getAllProducts = (req, res) => {
    // __dirname is the current directory (controllers/), so we step up '..' and into 'views'
    const filePath = path.join(__dirname, '..', 'views', 'products.html');
    
    res.sendFile(filePath);
};

// Hand over parameters to service and handle the result/errors
const getProductById = (req, res) => {
    const id = req.params.id;
    const product = productService.fetchProductById(id);
    
    if (!product) {
        return res.status(404).json({ error: `Product with ID ${id} not found` });
    }
    res.json(product);
};

// Send request body data to service to create a new product
const createProduct = (req, res) => {
    const newProduct = productService.addProduct(req.body);
    res.status(201).json({ message: "Product added successfully", product: newProduct });
};

module.exports = {
    getAllProducts,
    createProduct,
    getProductById
};
