const jwt = require('jsonwebtoken');
const ShippingCart = require('../db/models/ShippingCart');
const { secret } = require('../config/token').jwt;

const checkLoginCartHelper = async (arrayOfCart, authHeader) => {

    try {
        payload = jwt.verify(authHeader, secret);

        await ShippingCart.findOne({customer_info:payload.userId})
        .exec(function(error, findCart){
            if(findCart === null){
                ShippingCart.create({ customer_info: payload.userId, cartInfo:arrayOfCart})
            } else {
                ShippingCart.findOneAndUpdate({customer_info:payload.userId},{cartInfo:arrayOfCart})
                .exec()
            }
        })
    } catch (error) {
       
    }
};

module.exports = {
    checkLoginCartHelper,

}