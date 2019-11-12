import React, {Component} from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import {connect} from 'react-redux';
import { Link, withRouter} from 'react-router-dom';

import PreloaderSmall from '../../PreloaderSmall/PreloaderSmall';
import EditPassword from './EditPassword/EditPassword';
import EditProfile from './EditProfile/EditProfile';
import RealProfile from './RealProfile/RealProfile';
import AdressBook from './AdressBook/AdressBook';
import "./PersonalData.scss";

import {getCustomer} from "../../../actions/profile";

class PersonalData extends Component{
    componentDidMount() {
        this.props.getCustomerAction();	
	}
    
    render() {
        const {customer} = this.props;

        let customerInfo = (Object.keys(customer).length >= 4)?(
            <Tabs id="controlled-tab-example" className="d-flex flex-column
            flex-md-row profile-tabs">
                <Tab eventKey="Profile" title="Profile">
                    <RealProfile></RealProfile>
                    <Link to='/' className="mt-5 profile-home_link">
                </Link>
                </Tab>
                <Tab eventKey="Edit profile" title="Edit profile">
                    <EditProfile></EditProfile>
                </Tab>
                <Tab eventKey="Change password" title="Change password">
                    <EditPassword></EditPassword>
                </Tab>
                <Tab eventKey="Adress book" title="Adress book">
                   <AdressBook></AdressBook>
                </Tab>
            </Tabs>
        ):<PreloaderSmall></PreloaderSmall>
        
        return (
            <React.Fragment>
                {customerInfo}
            </React.Fragment>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        customer: store.customer.customer,
    }
};

const mapDispatchToProps = function (dispatch) {
    return {
        getCustomerAction:() => dispatch(getCustomer()),
    }
};

export default  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalData))


