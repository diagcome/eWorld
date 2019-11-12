const jwt = require('jsonwebtoken');
const bCrypt = require('bcrypt');
const mongoose = require("mongoose");

const { secret } = require('../config/token').jwt;
const Customer = require("../db/models/Customer");
const authHelper = require("../helpers/authHelper");
const hashPassHelper = require("../helpers/hashPassHelper");

const updateTokens = async (userId) => {

    const accessToken = authHelper.generateAccessToken(userId);
    const refreshToken = authHelper.genereteRefreshToken();

    await authHelper.replaceDbRefreshToken(refreshToken.id, userId);
        return ({
            accessToken:accessToken.token,
            expires_in: accessToken.exp,
            refreshToken: refreshToken.token
        });
};

const checkAuth = (req, res) => {
    res.status(200).json({loginIs: true})
}

const singIn = (req, res) => {
    const { email, password } = req.body.data;
    // "dasdsdddd54654dsffdsdsfaads11" actual password for lalala@ukr.net
    Customer.findOne({email: email})
        .exec()
        .then((customer) => {
            if(!customer) {
                res.status(401).json({ message: "This email do not register in system"});  //incorrect data or not found customer in db
            } 
            
            const isValid = bCrypt.compareSync(password, customer.password);  //need change on "password"
            
            if(isValid) {
               updateTokens(customer._id)
                    .then(tokens => {
                        res.status(200).json({tokens, customer:{
                            email:customer.email,
                            first_name:customer.first_name,
                            last_name:customer.last_name,
                            login:customer.login,
                            orders: customer.orders,
                            loginIs: true,
                    }})
                })
            }  else {  
                res.status(401).json({ message: "Incorrect password"});
            }
        })
        .catch(error => res.status(500).json({ message: error.message}))
}

const refreshTokens = (req, res) => {  //validation of refresh token in jwt
    const refreshToken = req.body.headers.Authorization; // take user refreshToken on a front

    if(!refreshToken){
        res.status(401).json({message: "Token not provided!"});
    };
    
    const token = refreshToken.replace("Bearer ", "");

    let payload;
    try {
        payload = jwt.verify(token, secret);

        if(payload.type !== 'refresh'){
            res.status(400).json({ message: "Invalid token!!!"});
        }
    } catch(error){
        if(error instanceof jwt.TokenExpiredError) {
            res.status(400).json({ message: "Token expired!"});
        } else if(error instanceof jwt.JsonWebTokenError) {
            res.status(400).json({ message: "Invalid token!!!"});
        }
    }

    Customer.findOne({refresh_token: payload.id})   // payload.id = uuid()
        .exec()
        .then(async (token) =>{
            if(token == null){
                throw new Error("Token not found in db");
            }
            let newTokensData = await updateTokens(token._id);
            res.status(200).json({newTokensData})
        })
        .then(tokens => res.json(tokens))
        .catch(error => res.status(400).json({ message: error.message}));
}

const customerRegister = (req, res) => {

    const hashPasswordFromUser = hashPassHelper.generateHashPassword(req.body.data.secondPass);
    try {
        const newUser = new Customer({
            _id: new mongoose.Types.ObjectId(),
            password: hashPasswordFromUser,
            login: req.body.data.login,
            email: req.body.data.email,
            phone: req.body.data.phone,
            last_name: req.body.data.lastName, 
            first_name: req.body.data.firstName,
        });

        Customer.findOne({email: req.body.data.email})
        .exec(function(error, customer){
            if(error) {
                return error.message;
            } else if(!customer){
                Customer.create(newUser, function (err, create) {
                    if (err) {
                        res.status(400).json({ message: err.message});
                    } else {
                    updateTokens(newUser._id)
                        .then(tokens => {
                            res.status(200).json({tokens});
                        })
                    }
                })
            } else { 
                res.status(401).json({ message: "This email register in system"});
            }
        });

    } catch (error) {
        res.status(400).json({ message: error});
    };
};

module.exports = {
    singIn,
    refreshTokens,
    customerRegister,
    checkAuth
};