const mongoose = require("mongoose");

const Article = require("../db/models/Article");


const  addArticle = (req, res) => {


    const newArticle = Article({
        _id: new mongoose.Types.ObjectId(),
        title:req.body.title,
        description:req.body.description,
        images:req.body.images.split(',')
    })

    try {

        Article.create(newArticle, function (err, article) {
            if (err) {
                res.status(400).json({ message: err.message});
            } else {
                res.status(200).json({article});
            }
        })

    } catch(error) {
        res.status(400).json({ message: error.message});
    }

}

const  getArticles = (req, res) => {

    try {
        Article.find({}, function(error, articles){
            if (error) {
                res.status(400).json({ message: err.message});
            } else {
                res.status(200).json({articles});
            }
        })

    } catch(error) {
        res.status(400).json({ message: error.message});
    }
}

const getArticleById = (req, res) => {

    try {
        Article.findOne({_id:req.params.id}, function(error, article){
            if (error) {
                res.status(400).json({ message: err.message});
            } else {
                res.status(200).json({article});
            }
        })

    } catch(error) {
        res.status(400).json({ message: error.message});
    }
}

module.exports = {
    addArticle,
    getArticles,
    getArticleById
};
