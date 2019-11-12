const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ordersSchema = new mongoose.Schema({
    _id: ObjectId,
    delivery_type:String,
    payment_type:String,
    delivery_info:String,
    registrations:Boolean,
    adress: {
        city:String,
        street:String,
        num:String,
        post_code:String,
    },
    phone:String,
    email:String,
    create_date: String,
    all_price: Number,
    order_no: String,
    customer_info: { 
        type: ObjectId,
        ref: 'customers' 
    },
    product_item:Array
},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = Orders = mongoose.model('orders', ordersSchema);