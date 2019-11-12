import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Card } from 'react-bootstrap';

import {getOrders} from '../../../actions/order';
import {getAllProducts} from '../../../actions/allProducts';

import orderInfoHelper from '../../../helpers/renderHelpers/orderInfoHelper';
import idGeneratorHelper from '../../../helpers/renderHelpers/idGeneratorHelper';
import './OrderInformation.scss';

class OrderInformation extends Component {
    componentDidMount() {
        this.props.getOrdersAction();
        this.props.getAllProductsActions();
    }

    render() {
        const {orders, allProducts} = this.props;

        return(
        <div className="accordion-order">
            {orders.length > 0 
            ?<Card.Title className='text-left order_title'>My Orders</Card.Title>
            :null}
            {orders.length > 0 
            ? orders.map( (order, index) => {
                return(
                <div className="trigger" key={idGeneratorHelper()}>
                    <input type="checkbox" id={"checkbox-"+ index} className='checkbox-input'/>
                    <label htmlFor={"checkbox-"+ index} className="checkbox">
                    Order №: <span className="d-block d-lg-inline " style={{color:"#34d264"}}>{order.order_no}</span><i></i>
                    </label>
                    <div className="content">
                        <Card.Subtitle className="content-title"><span>Total price </span>{order.all_price}$</Card.Subtitle>
                        <div className="d-flex flex-column flex-xl-row">
                            <div className="content-info col-xl-4">
                                <div className="text-left">{order.create_date}</div>
                                <Card className='pb-1'><b>Payment type:</b>{order.payment_type}</Card>
                                <Card className='pb-1'><b>Delivery type:</b> {order.delivery_type}.</Card>
                                {order.delivery_info.length > 0
                                ?<Card><b>Personal information:</b>{order.delivery_info}</Card>
                                :null}
                            </div>
                            <div className='content-product col-xl-8'>
                                {orderInfoHelper(allProducts, order.product_item, order.order_no).map((buyProduct, index) => {
                                return(
                                    <div className="card w-100 d-flex flex-row" key={buyProduct._id}>
                                        <img className="card-img-top" src={buyProduct.images[0]} alt={buyProduct._id}/>
                                        <div className="card-body">
                                            <span className="product-count">x{order.product_item[index].count}</span>
                                            <span className="product-name">{buyProduct.brand + " " + buyProduct.model.replace(/[-_—]+/g, ' ') + " " + buyProduct.color + " "}
                                            {buyProduct.seria?buyProduct.seria.replace(/[-_—]+/g, ''):null}</span>
                                        </div>
                                    </div>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                )})
            :<Card.Title className="order_title">You have no order</Card.Title>}
        </div>  
        ) 
    }
}

const mapStateToProps = function (store) {
    return {
        orders: store.orders.orders,
        allProducts: store.allProducts.allProducts
    }
};

const mapDispatchToProps = function (dispatch) {
    return {
        getOrdersAction:() => dispatch(getOrders()),
        getAllProductsActions:() => dispatch(getAllProducts())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderInformation);


