// Mock database array shifted from the controller
let products = [
    { id: "101", name: "Laptop", price: 999 },
    { id: "102", name: "Phone", price: 499 }
];

// Service logic to get all products
const fetchAllProducts = () => {
    return products;
};

// Service logic to get a single product by ID
const fetchProductById = (id) => {
    return products.find(p => p.id === id);
};

// Service logic to add a new product
const addProduct = (productData) => {
    const newProduct = {
        id: (products.length + 101).toString(),
        name: productData.name || "Generic Product",
        price: productData.price || 0
    };
    products.push(newProduct);
    return newProduct;
};

module.exports = {
    fetchAllProducts,
    fetchProductById,
    addProduct
};
