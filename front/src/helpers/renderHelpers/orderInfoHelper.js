const orderInfoHelper = (allproduct, productItem, orderNo) => {
    orderNo = [];
    productItem.map(idOfProduct => {
        allproduct.filter(obj => {
            if(obj._id === idOfProduct.idOfProduct) {
                orderNo.push(obj)
            }
        })
    })
    return orderNo;
}

export default orderInfoHelper;