const express = require('express');
const router = express.Router();

const {addProduct, getProducts, getProductsFilter, filterProducts} = require('../controllers/products');

router.get('/get', getProducts);
router.get('/filters', getProductsFilter);
router.post('/add', addProduct);
router.get('/filter-product', filterProducts)

module.exports = router;