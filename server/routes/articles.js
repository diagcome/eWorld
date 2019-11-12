const express = require('express');
const router = express.Router();

const {addArticle, getArticles,getArticleById } = require('../controllers/articles');

router.get('/get', getArticles);
router.get('/get/:id',getArticleById);
router.post('/add', addArticle);


module.exports = router;