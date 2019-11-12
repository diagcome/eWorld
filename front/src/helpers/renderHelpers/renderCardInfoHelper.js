export const summCartHelper = (count, id) => {

    const currentMyCartList = JSON.parse(localStorage.getItem('myCart'))

    currentMyCartList.map(objCart => {
        if(objCart.idOfProduct === id){
            objCart.count = count;
        }
    })

    localStorage.setItem('myCart', JSON.stringify(currentMyCartList));
}

export const delCartHelper = (id) => {
    const currentMyCartList = JSON.parse(localStorage.getItem('myCart'))
    const filtredMyCartList = currentMyCartList.filter((objCart) => objCart.idOfProduct !== id);

    localStorage.setItem('myCart', JSON.stringify(filtredMyCartList));
    
}