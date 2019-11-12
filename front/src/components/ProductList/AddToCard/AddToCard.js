import React, {Component}  from 'react';
import {connect} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import '../../../../node_modules/react-toastify/dist/ReactToastify.css';

import addToCartHelper from '../../../helpers/cartHelpers/addToCartHelper';
import {getCountOfCart} from '../../../actions/cart';
import './AddToCard.scss';


class AddToCard extends Component {

    addToCartHandler() { 
        addToCartHelper(this.props.productId, this.props.loginIs)
        this.props.getCountOfCartAction();
        toast.success("Product add to your cart", {
           
          });
    }

    render(){

        return(
            <React.Fragment>
                <ToastContainer
                    position="top-center"
                    autoClose={1200}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
            <button type="button"
            className="product-card-back__addtocart p-2 rounded"
            onClick={this.addToCartHandler.bind(this)}>
                <span>Add to Cart</span>
            </button>
            </React.Fragment>   
        )
    }
}
   
const mapStateToProps = function (store) {
    return {
        loginIs: store.loginIs.loginIs,
    }

};
const mapDispatchToProps = function (dispatch) {
    return {
        getCountOfCartAction:() => dispatch(getCountOfCart()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddToCard)