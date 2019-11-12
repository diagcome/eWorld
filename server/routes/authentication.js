const express = require('express');
const router = express.Router();

const {singIn, refreshTokens, customerRegister, checkAuth} = require('../controllers/auth');

const authMiddleWare = require('../middleware/auth');

router.post('/login', singIn);
router.post('/refresh-token', refreshTokens);
router.post('/registration', customerRegister);
router.post('/check-auth', authMiddleWare, checkAuth);

module.exports = router;
