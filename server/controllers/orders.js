const mongoose = require("mongoose");
const Orders = require("../db/models/Orders");
const {sendOrderMail} = require("../helpers/orderSendMailHelper");
const orderHelper = require("../helpers/orderHelper");
const jwt = require('jsonwebtoken');
const { secret } = require('../config/token').jwt;


const getOrders = async (req, res) => {

    const authHeader = req.get('authorization');
    const payload = jwt.verify(authHeader , secret);

     await  Orders.find({customer_info:payload.userId})
        .exec()
        .then((orders) => {
            res.status(200).json({orders})
        })
}

const createOrder = async (req, res) => {
    const {registrations, delivery_type, payment_type, delivery_info, adress, email, phone, all_price, order_no, product_item} = req.body.newOrder;

    if(registrations){

        try {
            const thisCustomer = await orderHelper.getThisCustomer({email});

            const newOrder = new Orders({
                _id: new mongoose.Types.ObjectId(),
                customer_info: thisCustomer,
                delivery_type:delivery_type,
                payment_type:payment_type,
                delivery_info:delivery_info,
                registrations:registrations,
                adress: adress,
                all_price: all_price,
                create_date:new Date().toJSON().slice(0, 10),
                order_no: order_no,
                product_item:product_item
            });

            await Orders.create(newOrder);
            await orderHelper.saveOrderInCustomer(newOrder._id, thisCustomer);
            await sendOrderMail(email, delivery_type, payment_type, delivery_info, all_price, order_no, product_item)
            res.status(200).json({newOrder:{order_no, payment_type, delivery_type, delivery_info, all_price}})

        } catch(error) {
            console.log(error)
        }
    } else if(!registrations) {

        try {

            const newOrder = new Orders({
                _id: new mongoose.Types.ObjectId(),
                delivery_type:delivery_type,
                payment_type:payment_type,
                delivery_info:delivery_info,
                registrations:registrations,
                email:email,
                phone:phone,
                all_price: all_price,
                create_date:new Date().toJSON().slice(0, 10),
                order_no: order_no,
                product_item:product_item
            });

            await Orders.create(newOrder);
            await sendOrderMail(email, delivery_type, payment_type, delivery_info, all_price, order_no, product_item)
            res.status(200).json({newOrder:{order_no, payment_type,delivery_type, delivery_info, all_price, email, phone}});

        } catch(error) {
            console.log(error)
        }
    }
}

module.exports = {
    getOrders,
    createOrder
};