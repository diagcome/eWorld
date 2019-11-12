const mongoose = require("mongoose");
const NavCategoryOfProduct = require("../db/models/NavCategoryOfProduct");

const getCategories = async (req, res) => {

    NavCategoryOfProduct.find()
    .exec()
    .then((findProduct)=>{
        res.status(200).send(findProduct)
    })
    .catch(error =>
        res.status(400).json({message: `Error happened on server: ${error}`})
    );
}

const addCategories = async (req, res) => {


    const newCategoryOfProduct = new NavCategoryOfProduct({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        categoryFilter: JSON.parse(req.body.categoryFilter),
        lvl: req.body.lvl,
        parent: req.body.parent?req.body.parent:null
    });

    newCategoryOfProduct
    .save()
    .then(newCatagory => res.status(200).send(newCatagory))
    .catch(error =>
        res.status(400).json({message: `Error happened on server: ${error}`})
    );
}

module.exports = {
    addCategories,
    getCategories
};