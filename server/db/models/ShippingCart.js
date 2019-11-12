const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ShippingCartSchema = new mongoose.Schema({
    customer_info: { 
        type: ObjectId,
        ref: 'customers' 
    },
    cartInfo: Array
},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = ShippingCart = mongoose.model('shippingCarts', ShippingCartSchema);