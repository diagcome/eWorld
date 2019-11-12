import React, {useEffect, useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from 'react-redux';

import CartModal from './CartModal/CartModal';
import {logOut} from '../../actions/authentication';
import {getProductInCart} from '../../actions/cart'
import './Header.scss';


const Header = (props) => {

    const [cartCount, setCartCount] = useState(
        0
    );

    useEffect(() => {  
        setCartCount(JSON.parse(localStorage.getItem('myCart')) != null?JSON.parse(localStorage.getItem('myCart')).length:0)
      
    });

    const logOutAction = () => props.dispatch(logOut());

    const setCountOfCart = () => {
        setCartCount(JSON.parse(localStorage.getItem('myCart')) != null?JSON.parse(localStorage.getItem('myCart')).length:0)
    }

    const getProductInCartAction = () => {
        if(localStorage.getItem('myCart')) {
            props.dispatch(getProductInCart(JSON.parse(localStorage.getItem('myCart'))))
           
        }
    }

    const routeCheckout = () => {
        props.history.push('/checkout')
    }

    return (

        <nav className="navbar navbar-expand main-navbar">
            <Link className="navbar-brand d-none d-sm-flex" to='/'></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse main-navbar_collapse d-flex justify-content-between align-items-start" id="navbarSupportedContent-333">
                <ul className="navbar-nav main-navbar_collapse-first flex-column flex-sm-row">
                    <li className="nav-item d-flex d-sm-none">
                        <Link className="nav-link" to='/'>Home Page</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/aboutUs'>About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/contacts'>Contacts</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/product-list'>Product list</Link>
                    </li>
                </ul>
                <ul className="navbar-nav nav-flex-icons main-navbar_collapse-second">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown" to='/'
                           aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-user"></i>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right dropdown-default text-left"
                             aria-labelledby="navbarDropdownMenuLink-333">

                            {props.loginIs?
                                (
                                    <React.Fragment>
                                        <Link className="dropdown-item" to='/profile'>Profile</Link>
                                        <Link className="dropdown-item" to='/' onClick={logOutAction}>LogOut</Link>
                                    </React.Fragment>
                                ):(
                                    <React.Fragment>
                                        <Link className="dropdown-item" to='/login'>Login</Link>
                                        <Link className="dropdown-item" to='/registration'>Registration</Link>
                                    </React.Fragment>
                                )
                            }
            
                        </div>
                    </li>
                    <li className="nav-item">
                        <button  type="button" className="btn nav-link waves-effect waves-light" onClick={getProductInCartAction} data-toggle="modal" data-target="#cardBox">
                            <i className="fas fa-shopping-cart">
                                <span className="badge badge-pill badge-danger">{cartCount}</span>
                            </i>
                        </button>
                    </li>
                </ul> 
                <div className="modal fade" id="cardBox" tabIndex="-1" role="dialog" aria-labelledby="cardBoxLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document" style={{minWidth:"50%"}}>
                        <div className="modal-content modal-cart">
                            <div className="modal-header">
                                <i className="fa fa-shopping-cart" aria-hidden="true">Shipping cart</i>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <CartModal delProductClick={setCountOfCart}></CartModal>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={routeCheckout} data-dismiss="modal">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = function (store) {
    return {
        loginIs: store.loginIs.loginIs,
        cart: store.cart.cart,
    }
};

export default withRouter(connect(mapStateToProps)(Header));