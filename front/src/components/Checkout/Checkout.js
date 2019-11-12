import React, {Component} from 'react';
import {connect} from 'react-redux';
import { FormControl, Form} from 'react-bootstrap';
import PopUp from '../PopUp/PopUp';

import {getProductInCart} from '../../actions/cart';
import {getCustomer} from "../../actions/profile";
import {setNewOrderReg, setNewOrderNoReg} from '../../actions/order';

import FormValidator from '../../modules/formValidator';
import formRules from '../../modules/formValidationRules';

import summPriceInCheckoutHelper from '../../helpers/renderHelpers/summPriceInCheckoutHelper';
import idGeneratorHelper from '../../helpers/renderHelpers/idGeneratorHelper';
import './Checkout.css';

class Checkout extends Component {

    constructor(props) {
        super(props)

        this.validator = new FormValidator(formRules);
        
        this.state = {
            email:'',
            phone:'',
            payment_type:'Online card Visa/MasterCard',
            checkout: true,
            validation: this.validator.valid(),
        }

        this.submitted = false;
    }

    componentDidMount(){

        if(localStorage.getItem('myCart')) {
            this.props.getProductInCartAction(JSON.parse(localStorage.getItem('myCart')))
        } 
        this.props.getCustomerAction(this.state.checkout);
    }

    goToAllProductHandler(event){
        event.preventDefault();
        this.props.history.push('/product-list')
    }
    
    handleInputChange = event => {
        event.preventDefault();
        
        this.setState({
          [event.target.name]: event.target.value,
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
    
        const validation = this.validator.validate(this.state);
        this.setState({ validation });
        this.submitted = true;
    
        if (validation.isValid || Object.keys(this.props.customer).length != 0) {
            const delivery_type = document.getElementById("delivery-holder").value;
            const payment_type = document.getElementById("payment-holder").value;
            const delivery_info = document.getElementById("textarea-holder").value;

            if(Object.keys(this.props.customer).length != 0){
                this.props.setNewOrderRegAction(true, delivery_type, payment_type, delivery_info, this.props.customer.adress, 
                    this.props.customer.email, summPriceInCheckoutHelper(this.props.product, JSON.parse(localStorage.getItem('myCart')),),
                    idGeneratorHelper(), JSON.parse(localStorage.getItem('myCart')), this.props.history);  //if register customer
            } else if (validation.isValid){
                this.props.setNewOrderNoRegAction(false, delivery_type, payment_type, delivery_info, this.state.email, this.state.phone, 
                    summPriceInCheckoutHelper(this.props.product, JSON.parse(localStorage.getItem('myCart'))), idGeneratorHelper(),
                    JSON.parse(localStorage.getItem('myCart')), this.props.history); //if customer without registering
            }
        }
    }

    handlePaymentSwitch(event){
        // console.log(event.target.value)
        this.setState({
            payment_type:event.target.value
        })
        if(event.target.value === "Online card Visa/MasterCard") {
            console.log(event.target.value)
        }
    }

    render() {

        const { product, customer, popupValidator} = this.props;

        let validation = this.submitted?            // if the form has been submitted at least once
        this.validator.validate(this.state) :   // then check validity every time we render
        this.state.validation                   // otherwise just use what's in state

        const popup = (popupValidator.statusError)
            ?(<PopUp 
            messageError={popupValidator.messageError} 
            statusError={popupValidator.statusError}></PopUp>)
            :null

        return (
            <React.Fragment>
                <section className="payment-form dark ">
                    {popup}
                    <div className="container dark">
                        <div className="block-heading">
                            <h2>Ordering options</h2>
                        </div>
                        <form>
                            <div className="products">
                                <h3 className="title">Checkout</h3>
                                {product.length >0?product.map(product => {
                                    return (
                                        <div key={idGeneratorHelper()} className="item">
                                        {JSON.parse(localStorage.getItem('myCart')).map(objInLocal => {
                                            if(objInLocal.idOfProduct === product._id){
                                            return (<React.Fragment key={idGeneratorHelper()}>
                                                    <p className="item-count">{objInLocal.count + " x"}</p>
                                                    <span className="price product-price">${product.old_price < product.price && product.old_price != 0 && product.old_price !== null?objInLocal.count * product.old_price:objInLocal.count * product.price}</span>
                                                    <p className="item-name">{product.category.replace(/_/g, ' ') + " " + product.brand.replace(/_/g, ' ') + " " + product.model.replace(/_/g, ' ')}</p>
                                                    <p className="item-description">{product.color}</p>
                                                </React.Fragment>)
                                            }
                                        })}  
                                    </div>
                                    )
                                })
                            :null}
                                <div className="total">Total<span className="price">$ {summPriceInCheckoutHelper(product, JSON.parse(localStorage.getItem('myCart')))}</span></div>
                            </div>
                            <div className="card-details">
                                <h3 className="title">Shipping options</h3>
                                {Object.keys(customer).length === 0
                                ?<div className="row">
                                    <div className="form-group col-sm-12">
                                    <Form.Group className={"mt-3 " + validation.email.isInvalid && 'has-error'}>
                                        <Form.Label>Your email*</Form.Label>
                                        <FormControl
                                            aria-label="Your Email"
                                            aria-describedby="inputGroup-sizing-default"
                                            placeholder="Your Email"
                                            name="email"
                                            ref={ref => this.email = ref}
                                            onChange={this.handleInputChange}
                                        />
                                        <span className="help-block">{validation.email.message}</span>
                                    </Form.Group>

                                    <Form.Group className={"mt-3 " + validation.phone.isInvalid && 'has-error'}>
                                        <Form.Label>Phone number*</Form.Label>
                                        <Form.Control
                                            aria-label="Your phone number"
                                            aria-describedby="inputGroup-sizing-default" 
                                            placeholder="Your phone number"
                                            name='phone'
                                            className="w-100"
                                            ref={ref => this.phone = ref}
                                            onChange={this.handleInputChange}
                                        />
                                        <span className="help-block">{validation.phone.message}</span>
                                    </Form.Group>
                                    </div>
                                </div>
                                :null}
                                <div className="row">
                                    <div className="form-group col-sm-12">
                                    <label htmlFor="delivery-holder">Delivery type</label>
                                    <select className="form-control" id="delivery-holder">
                                            {customer.adress?
                                            <option>On my adress ({customer.adress.city + ', '+customer.adress.street+ ', '+customer.adress.num+ ', zip: '+customer.adress.post_code})</option>
                                            :null}
                                            <option>Post</option>
                                            <option>In our stores</option>
                                        </select>
                                        <br></br>  
                                        <label htmlFor="textarea-holder">Delivery information</label>
                                        <textarea className="form-control" id="textarea-holder" rows="3"></textarea>
                                    </div>
                                </div>
                                <h3 className="title">Payment options</h3>
                                <div className="row">
                                    <div className="form-group col-sm-12">
                                        <label htmlFor="payment-holder">Payment type</label>
                                        <select className="form-control" id="payment-holder" onChange={this.handlePaymentSwitch.bind(this)}>
                                            <option>Online card Visa/MasterCard</option>
                                            <option>Paypal</option>
                                            <option>Cash</option>
                                            <option>Credit</option>
                                            <option>Bank Transfer</option>
                                        </select>  
                                    </div>
                                    {this.state.payment_type === "Online card Visa/MasterCard"?<div className="card-details p-1 m-1">
                                        <h3 className="title">Credit Card Details</h3>
                                            <div className="row">
                                            <div className="form-group col-sm-7">
                                                <label htmlFor="card-holder">Card Holder</label>
                                                <input id="card-holder" type="text" className="form-control" placeholder="Card Holder" aria-label="Card Holder" aria-describedby="basic-addon1"/>
                                            </div>
                                            <div className="form-group col-sm-5">
                                                <label htmlFor="">Expiration Date</label>
                                                <div className="input-group expiration-date">
                                                <input type="text" className="form-control" placeholder="MM" aria-label="MM" aria-describedby="basic-addon1"/>
                                                <span className="date-separator">/</span>
                                                <input type="text" className="form-control" placeholder="YY" aria-label="YY" aria-describedby="basic-addon1"/>
                                                </div>
                                            </div>
                                            <div className="form-group col-sm-8">
                                                <label htmlFor="card-number">Card Number</label>
                                                <input id="card-number" type="text" className="form-control" placeholder="Card Number" aria-label="Card Holder" aria-describedby="basic-addon1"/>
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <label htmlFor="cvc">CVC</label>
                                                <input id="cvc" type="text" className="form-control" placeholder="CVC" aria-label="Card Holder" aria-describedby="basic-addon1"/>
                                            </div>
                                        </div>
                                    </div>:null}
                                    {this.state.payment_type === "Bank Transfer"?
                                    <div id="nav-tab-bank" className="p-1 m-1">
                                    <h3 className="title">Bank accaunt details</h3>
                                        <dl className="param">
                                            <dt>BANK: </dt>
                                            <dd> THE WORLD BANK</dd>
                                        </dl>
                                        <dl className="param">
                                            <dt>Accaunt number: </dt>
                                            <dd> 12345678912345</dd>
                                        </dl>
                                        <dl className="param">
                                            <dt>IBAN: </dt>
                                            <dd> 123456789</dd>
                                        </dl>
                                        <p><strong>Note:</strong> World Bank Group is a unique global partnership fighting poverty worldwide through sustainable solutions </p>
                                    </div>
                                    :null}
                                    <div className="payment-form_btn d-flex justify-content-around align-items-center col-12">
                                        <button type="button" className="btn_back btn p-2 m-0" onClick={this.goToAllProductHandler.bind(this)}>Product page</button>
                                        {JSON.parse(localStorage.getItem('myCart')) != null && JSON.parse(localStorage.getItem('myCart')).length !== 0
                                        ?<button type="button" className="btn_submit btn p-2 m-0" onClick={this.handleFormSubmit}>Proceed</button>
                                        :null}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        product: store.cart.cart.product,
        customer: store.customer.customer,
        popupValidator:store.popupValidator.popupValidator,
    }

};

const mapDispatchToProps = function (dispatch) {
    return {
        getProductInCartAction:(myCart) => dispatch(getProductInCart(myCart)),
        getCustomerAction:(checkout) => dispatch(getCustomer(checkout)),
        setNewOrderRegAction:(registrations, delivery_type, payment_type, delivery_info, adress, email, all_price, order_no, product_item, history) => 
        dispatch(setNewOrderReg(registrations, delivery_type, payment_type, delivery_info, adress, email, all_price, order_no, product_item, history)),
        setNewOrderNoRegAction:(registrations, delivery_type, payment_type, delivery_info, email, phone, all_price, order_no, product_item, history) => 
        dispatch(setNewOrderNoReg(registrations, delivery_type, payment_type, delivery_info, email, phone, all_price, order_no, product_item, history))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout)