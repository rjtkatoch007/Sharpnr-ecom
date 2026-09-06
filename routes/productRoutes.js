const express = require('express');
const router = express.Router();

// Import the product controller
const productController = require('../controllers/productController');

// GET /products
router.get('/', productController.getAllProducts);

// POST /products
router.post('/', productController.createProduct);

// GET /products/:id
router.get('/:id', productController.getProductById);

module.exports = router;
