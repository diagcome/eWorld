const express = require('express');
const router = express.Router();

const { searchProducts } = require('../controllers/cart');

router.post('/search', searchProducts);

module.exports = router;