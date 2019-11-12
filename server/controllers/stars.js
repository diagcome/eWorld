const Products = require("../db/models/products/Products");

const setStars = async (req, res) => {
    const {star, _id} = req.body;

    await Products.findOne({_id})
        .then(async (product) => {
            const newStars = (((product.star * product.startCount) + Number(star)) / (product.startCount +1))
            await Products.updateOne({_id},{star:newStars, startCount:product.startCount +1})
            res.status(200).send({newStars, _id})
        })   
}

module.exports = {
    setStars
}