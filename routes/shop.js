const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop')

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

// dynamic segments with : will eat everything after, so order matters!
router.get('/products/:productId', shopController.getProduct);

// following wouldn't get the chance to be executed
// router.get('/products/something', shopController.);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart)

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
