const express = require('express');
const router = express.Router();

const {addRecommendedProduct, getRecommendedProduct} = require('../controllers/recommendedProduct');

router.get('/get', getRecommendedProduct);
router.post('/add', addRecommendedProduct);


module.exports = router;