const summPriceInCheckoutHelper = (products, productInCart) => {
    let count = 0;
    
    products.length > 0 ?productInCart.map(cart => {
        products.map(product => {
            if(cart.idOfProduct === product._id){
                const thisPrice =  product.old_price < product.price && product.old_price != 0 && product.old_price !== null
                ?cart.count * product.old_price
                :cart.count * product.price;
                count = count + thisPrice;
            }
        })
    }):count = 0;

    return count;
}

export default summPriceInCheckoutHelper;