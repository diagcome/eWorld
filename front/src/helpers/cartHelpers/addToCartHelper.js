const addToCartHelper = (newProduct, loginIs) => {

    const currentMyCartList = JSON.parse(localStorage.getItem('myCart'))
    

    if(Array.isArray(currentMyCartList)) {
        let counter = 0;

        currentMyCartList.map(objCart => {
            if(objCart.idOfProduct === newProduct){
                objCart.count ++;
                counter++
            }
        })

        if(counter > 0){
            
            localStorage.setItem('myCart', JSON.stringify(currentMyCartList));
        } else {
            currentMyCartList.push({idOfProduct: newProduct, loginIs:loginIs, count: 1});
            localStorage.setItem('myCart', JSON.stringify(currentMyCartList));
        }

    } else (
        localStorage.setItem('myCart', JSON.stringify([{idOfProduct: newProduct, loginIs:loginIs, count: 1}]))
    )

    return JSON.parse(localStorage.getItem('myCart')).length;
    
}
export default addToCartHelper;