const express = require('express');
const router = express.Router();

const { addSlide, updateSlide, deleteSlide, getSlides } = require('../controllers/sliders.js');

router.get('/get', getSlides);
router.post('/add', addSlide);
router.post('/update', updateSlide);
router.post('/delete', deleteSlide);


module.exports = router;
