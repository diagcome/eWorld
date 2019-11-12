const jwt = require('jsonwebtoken');
const uuid = require('uuid/v4');
const { secret, tokens } = require('../config/token').jwt;
const Customer = require('../db/models/Customer');

const generateAccessToken = (userId) => {
    
    const payload = {
        userId,
        type: tokens.access.type
    }

    const options = {expiresIn: tokens.access.expiresIn};

    const token =  jwt.sign(payload, secret, options);
    const exp = jwt.verify(token, secret, (err, decoded) => {
       return decoded.exp;
    })

    return {token, exp};
}

const genereteRefreshToken = () => {

    const payload = { 
        id: uuid(),  // its payload.id in refreshTokens
        type: tokens.refresh.type
    };
    const options = {expiresIn: tokens.refresh.expireIn};
    return  {
        id: payload.id,
        token: jwt.sign(payload, secret, options)
    }
};

const replaceDbRefreshToken = (tokenId, userId) => {  //check user in db with this token id
    
    Customer.findOneAndUpdate({_id: userId}, { refresh_token: tokenId }, function(err, dataCustomer){
        if(err){
            throw new Error(err)
        }
    })
}

const findCustomer = async (findData, customerId) => {

    const checkEmail = await Customer.findOne({email: findData})
    .exec()
    .then(customer =>{
        if(!customer) {
            return true;
        } else if(customer._id != customerId) {
            return false;
        } else {
            return true;
        }
    })  
    return checkEmail;
};

module.exports = {
    genereteRefreshToken,
    replaceDbRefreshToken,
    generateAccessToken,
    findCustomer
}