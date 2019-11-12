const express = require('express');
const router = express.Router();

const {addCategories, getCategories} = require('../controllers/navCategoryOfProduct');

router.get('/get', getCategories);
router.post('/add', addCategories);

module.exports = router;