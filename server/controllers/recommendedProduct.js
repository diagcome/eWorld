const mongoose = require("mongoose");
const RecProducts = require("../db/models/RecProducts");

const getRecommendedProduct = async (req, res) => {

    RecProducts.find()
    .populate('product_link')
    .exec()
    .then((products)=>{
        res.status(200).send(products)
    })
    .catch(error =>
        res.status(400).json({message: `Error happened on server: ${error}`})
    );
}

const addRecommendedProduct = async (req, res) => {


    const newRecProduct = new RecProducts({
        _id: new mongoose.Types.ObjectId(),
        product_link: req.body._id,
    });

    newRecProduct
    .save()
    .then(newRecProduct => res.status(200).send(newRecProduct))
    .catch(error =>
        res.status(400).json({message: `Error happened on server: ${error}`})
    );

}

module.exports = {
    addRecommendedProduct,
    getRecommendedProduct
};