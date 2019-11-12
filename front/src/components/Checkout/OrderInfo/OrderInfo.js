import React, {Component} from 'react';
import {connect} from 'react-redux';

import './OrderInfo.scss';

class OrderInfo extends Component {

    constructor(props) {
        super(props)
 
    }

    handleClick(event){
        event.preventDefault()
        window.location.href = '/';
    }

    render() {

        const {newOrder} = this.props.orders
        return(
        <React.Fragment>
            {newOrder?
            <div className="order-prev d-flex flex-column justify-content-center align-items-center">
                <div className="container text-center">
                    <span className="display-4">{"Order №: "+ newOrder.order_no}</span>
                    <p className="card-text">Delivery type: {newOrder.delivery_type}</p>
                    <p className="card-text">{newOrder.delivery_info.length>1?newOrder.delivery_info:null}</p>
                    <p className="card-text">Payment: {newOrder.payment_type}</p>
                </div>
                <button className="btn orderinfo-btn" onClick={this.handleClick.bind(this)}>Home page</button>
            </div>
            :this.props.history.push('/')}
        </React.Fragment>         
        )
    }

}


const mapStateToProps = function (store) {
    return {
        orders:store.orders.newOrder
    }
};

const mapDispatchToProps = function (dispatch) {
    return {
      
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderInfo);