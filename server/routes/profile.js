const express = require('express');
const router = express.Router();

const { getProfile, editProfile, editPassword, editAdress } = require('../controllers/profile');

router.get('/', getProfile);
router.put('/editprof', editProfile);
router.put('/editpass', editPassword);
router.put('/ediadress', editAdress);

module.exports = router;