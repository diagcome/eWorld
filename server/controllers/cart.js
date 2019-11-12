const Products = require("../db/models/products/Products");
const { checkLoginCartHelper } = require("../helpers/cartHelper");

const searchProducts = async (req, res) => {
    const authHeader = req.get('authorization');

    const myCart = req.body.myCart.map(obj => {
        return obj.idOfProduct
    })
    
    checkLoginCartHelper(req.body.myCart, authHeader); 

    try {
        Products.find({_id:{$in: myCart }}, 
        function(error, allProducts) {
            if (error) {
                res.status(400).json({ message: error.message});
            } else {
                res.status(200).send(allProducts);
            }
        })

    } catch(error) {
        res.status(400).json({ message: error.message});
    }  
};

module.exports = {
    searchProducts
};