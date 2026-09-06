// Mock database object keyed by userId
let carts = {
    "1": ["101"], 
    "2": []      
};

// Fetch cart items for a specific user
const getCartByUserId = (req, res) => {
    const userId = req.params.userId;
    const userCart = carts[userId] || [];
    res.json({ userId, cartItems: userCart });
};

// Add a product to a user's cart
const addToCart = (req, res) => {
    const userId = req.params.userId;
    const { productId } = req.body;

    if (!productId) {
        return res.status(400).json({ error: "productId is required in the request body" });
    }

    if (!carts[userId]) {
        carts[userId] = [];
    }

    carts[userId].push(productId);
    res.json({ message: `Product ${productId} added to cart for user ${userId}`, cart: carts[userId] });
};

module.exports = {
    getCartByUserId,
    addToCart
};
