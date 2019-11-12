const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const customerSchema = new mongoose.Schema({
    _id: ObjectId,
    password: {
        type:String,
        required: true
    },
    login: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    phone: {
        type:String,
        required: true
    },
    adress:{
        city:String,
        street:String,
        num:String,
        post_code:String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    last_name: {
        type:String,
        required: true
    },
    first_name: {
        type:String,
        required: true
    },
    refresh_token: String,
    orders: [{
        type: ObjectId,
        ref: "orders"
    }]
}, {
    versionKey: false // You should be aware of the outcome after set to false
})

module.exports = Customer = mongoose.model('customers', customerSchema);
