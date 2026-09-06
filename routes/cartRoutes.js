const express = require('express');
const router = express.Router();

// Mock database object keyed by userId
let carts = {
    "1": ["101"], // Alice has a Laptop
    "2": []      // Bob has an empty cart
};

// GET /cart/:userId - Fetch cart items for a specific user dynamically
router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    const userCart = carts[userId] || [];
    res.json({ userId, cartItems: userCart });
});

// POST /cart/:userId - Add a product to the user's cart dynamically
router.post('/:userId', (req, res) => {
    const userId = req.params.userId;
    const { productId } = req.body;

    if (!productId) {
        return res.status(400).json({ error: "productId is required in the request body" });
    }

    // Initialize cart if it doesn't exist for the user
    if (!carts[userId]) {
        carts[userId] = [];
    }

    carts[userId].push(productId);
    res.json({ message: `Product ${productId} added to cart for user ${userId}`, cart: carts[userId] });
});

module.exports = router;
