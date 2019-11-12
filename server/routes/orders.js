const express = require('express');
const router = express.Router();

const { getOrders, createOrder } = require('../controllers/orders');

router.post('/add', createOrder);
router.get('/get', getOrders);

module.exports = router;