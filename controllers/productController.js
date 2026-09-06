// Mock database array
let products = [
    { id: "101", name: "Laptop", price: 999 },
    { id: "102", name: "Phone", price: 499 }
];

// Fetch all products
const getAllProducts = (req, res) => {
    res.json(products);
};

// Add a new product
const createProduct = (req, res) => {
    const newProduct = {
        id: (products.length + 101).toString(),
        name: req.body.name || "Generic Product",
        price: req.body.price || 0
    };
    products.push(newProduct);
    res.status(201).json({ message: "Product added successfully", product: newProduct });
};

// Fetch a single product by ID
const getProductById = (req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id === id);
    
    if (!product) {
        return res.status(404).json({ error: `Product with ID ${id} not found` });
    }
    res.json(product);
};

// Export the controller functions
module.exports = {
    getAllProducts,
    createProduct,
    getProductById
};
