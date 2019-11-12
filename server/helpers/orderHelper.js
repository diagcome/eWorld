const Customer = require("../db/models/Customer");
const Orders = require("../db/models/Orders");


const getThisCustomer = async (customerEmail) => {

    const customer = await Customer.findOne(customerEmail)
    return customer;
}

const saveOrderInCustomer = async (newOrderId, thisCustomer) => {
    
    await thisCustomer.orders.push(newOrderId);
    await thisCustomer.save();
    return;
}

module.exports = {
    getThisCustomer,
    saveOrderInCustomer
}