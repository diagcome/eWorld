import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter, Link} from 'react-router-dom';
import { ListGroup, Card, Button } from 'react-bootstrap';

import './RealProfile.scss'


class RealProfile extends Component {
    render() {

        const {customer} = this.props.customer;
 
        return(
            <div className="relprofile">
                <Card.Header as="h2" className="relprofile_header mt-5" style={{border:'1px solid white'}}>Welcome, <span>{customer.login}</span></Card.Header>
                <Card.Body className="d-flex flex-column flex-md-row justify-content-around">
                    <ListGroup className="text-left mt-2">
                        <Card.Title className="title-profile">Your profile</Card.Title>
                        <div className='mb-2'><b>Email: </b>{customer.email}</div>
                        <div className='mb-2'><b>Phone number: </b>{customer.phone}</div>
                        <div className='mb-2'><b>First name:</b> {customer.first_name}</div>
                        <div className='mb-2'><b>Last name:</b> {customer.last_name}</div>
                    </ListGroup>
                    <ListGroup className="text-left mt-2">
                        <Card.Title className="title-delivery">Delivery adress</Card.Title>
                        <div className='mb-2'><b>City: </b>{customer.adress.city}</div>
                        <div className='mb-2'><b>Street name: </b>{customer.adress.street}</div>
                        <div className='mb-2'><b>Street number:</b> {customer.adress.num}</div>
                        <div className='mb-2'><b>ZIP code:</b> {customer.adress.post_code}</div>
                    </ListGroup>
                </Card.Body>
                <Link to="/"><Button variant="info mt-5 mb-5" className="profile-home_btn" >Home page</Button></Link>
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        customer: store.customer,
    }

};
const mapDispatchToProps = function (dispatch) {
    return {
       
    }
};


export default  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(RealProfile));
