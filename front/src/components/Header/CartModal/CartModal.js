import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {getProductInCart} from '../../../actions/cart';
import {summCartHelper, delCartHelper} from '../../../helpers/renderHelpers/renderCardInfoHelper';
import idGeneratorHelper from '../../../helpers/renderHelpers/idGeneratorHelper';
import './CartModal.scss';

class CartModal extends Component {

    componentDidMount(){
        if(localStorage.getItem('myCart')) {
            this.props.getProductInCartAction(JSON.parse(localStorage.getItem('myCart')))
        }
    }

    countProductHandler(event,id){
     
        if(event.target.value >= 1) {
            event.target.text = event.target.value
            summCartHelper(event.target.value ,id)
        }
    }

    delProductHandler(event, id){
        if(id){
            delCartHelper(id);
            this.props.getProductInCartAction(JSON.parse(localStorage.getItem('myCart')));
            this.props.delProductClick();
        }
    }

    render(){

        const {product} = this.props

        const customerCartList =  product?
            product.map(obj => {
               return(
               <div key={idGeneratorHelper()} className="d-flex flex-column flex-lg-row flex-wrap justify-content-center align-items-center productincart mt-md-3 mb-md-3" id='productincart'>
                        <div className="col-12 col-md-3 text-center ">
                            <img className="img-responsive img-fluid" src={obj.images[0]} alt="prewiew" style={{maxWidth:"120px", maxHeight:"100px"}}/>
                        </div>
                        <div className="col-12 col-md-5 text-center">
                            <h4 className="product-name"><strong>{obj.model.replace(/_/g, ' ') + " "}{obj.seria?obj.seria:null}</strong></h4>
                            <h4>
                                <small>{obj.color + " "} 
                                {obj.ram != undefined?obj.ram + " Gb ":null}
                                {obj.rom != undefined?obj.rom + " Gb ":null}</small>
                            </h4>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center text-center">
                            <div className="col-7">
                                <strong>{obj.old_price < obj.price && obj.old_price != 0 && obj.old_price != null?obj.old_price:obj.price}
                                    <span className="text-muted">x</span>
                                </strong>
                                <div className="quantit">
                                    {JSON.parse(localStorage.getItem('myCart')).map(objInLocal => {
                                        if(objInLocal.idOfProduct === obj._id){
                                           return <input key={idGeneratorHelper()} type="number" step="1" max="99" min="1" title="Qty" className="border" defaultValue={objInLocal.count} 
                                           onChange={(event) => this.countProductHandler(event, obj._id)} className="qty"/>
                                        }
                                    })}  
                                </div>
                            </div>
                            <div className="col-5 align-self-end">
                                <button type="button" onClick={(event) => this.delProductHandler(event, obj._id)} className="btn btn-outline-danger btn-xs">
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    <hr/>
                </div>
               )
            })
            :null


        return(
            <React.Fragment>
                {customerCartList}
            </React.Fragment>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        product: store.cart.cart.product,
    }

};
const mapDispatchToProps = function (dispatch) {
    return {
        getProductInCartAction:(myCart) => dispatch(getProductInCart(myCart)),
    }
};

export default  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CartModal))

