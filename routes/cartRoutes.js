const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Routes mapped to controller methods
router.get('/:userId', cartController.getCartByUserId);
router.post('/:userId', cartController.addToCart);

module.exports = router;
