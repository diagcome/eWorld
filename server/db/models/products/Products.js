const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const productsSchema = new mongoose.Schema({
    _id: ObjectId,
    quantity:{ 
        type: Number,
        required: true 
    },
    price: { 
        type: Number,
        required: true 
    },
    old_price: { 
        type: Number,
        required: false 
    },
    seria:{  //like P3540FA-EJ0211
        type: String,
        required: false 
    },
    cpu:{     //Intel , AMD
        type: String,
        required: false 
    },
    video_card:{  //like  Intel UHD Graphics 620
        type: String,
        required: false 
    },
    category: { 
        type: String,
        required: true 
    },
    brand: { 
        type: String,
        required: true 
    },
    model: { 
        type:String,
        required: true 
    },
    rom: { 
        type: Number,
        required: false
    },
    rom_type:{ //SSD HDD
        type:String,
        required: false
    },
    ram_type: { //ddr4 ddr3
        type:String,
        required: false
    },
    ram: { 
        type: Number,
        required: false
    },
    display: { 
        type: String,
        required: false 
    },
    images: { 
        type: Array,
        required: true 
    },
    type: { 
        type: String,
        required: false 
    },
    color: { 
        type: String,
        required: true 
    },
    discription: { 
        type: String,
        required: false
    },
    star: Number,
    startCount:Number //how meny customer vote star
},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = Products = mongoose.model('products', productsSchema);