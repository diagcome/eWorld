const express = require('express');
const router = express.Router();

const {setStars} = require('../controllers/stars');

router.put('/', setStars);

module.exports = router;