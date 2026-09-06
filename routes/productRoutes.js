const express = require('express');
const router = express.Router();

// Mock database array
let products = [
    { id: "101", name: "Laptop", price: 999 },
    { id: "102", name: "Phone", price: 499 }
];

// GET /products - Fetch all products dynamically
router.get('/', (req, res) => {
    res.json(products);
});

// POST /products - Add a new product dynamically
router.post('/', (req, res) => {
    const newProduct = {
        id: (products.length + 101).toString(),
        name: req.body.name || "Generic Product",
        price: req.body.price || 0
    };
    products.push(newProduct);
    res.status(201).json({ message: "Product added successfully", product: newProduct });
});

// GET /products/:id - Fetch a single product dynamically
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id === id);
    
    if (!product) {
        return res.status(404).json({ error: `Product with ID ${id} not found` });
    }
    res.json(product);
});

module.exports = router;
