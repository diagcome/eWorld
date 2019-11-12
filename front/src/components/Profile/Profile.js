import React, {Component, Fragment} from 'react';
import { ListGroup, Col, Row, Tab} from 'react-bootstrap';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from '../Header/Header';
import PersonalData from './PersonalData/PersonalData';
import OrderInformation from './OrderInformation/OrderInformation';
import PopUp from '../PopUp/PopUp';
import './Profile.scss';

class Profile extends Component {

	render() {

        const {popupValidator} = this.props;

        const popup = (popupValidator.statusError)
        ?(<PopUp 
        messageError={popupValidator.messageError} 
        statusError={popupValidator.statusError}></PopUp>)
        :null
        
		return (
            <Fragment>
                <Header/>
                <div className="jumbotron col-12 p-0 bg-white  min-vh-100 text-center m-0 d-flex 
                flex-column align-items-center">
                    {popup}
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="personal-data">
                        <Row className="col-12">
                            <Col sm={3} className="profile-menu_tabs mt-5 mb-5 m-sm-0">
                                <ListGroup>
                                    <ListGroup.Item className="list-menu" eventKey="personal-data">
                                        Personal data
                                    </ListGroup.Item>
                                    <ListGroup.Item className="list-menu"  eventKey="order-information">
                                        Order Information
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm={9} className='border-bottom'>
                                <Tab.Content>
                                    <Tab.Pane eventKey="personal-data">
                                        <PersonalData></PersonalData>
                                    </Tab.Pane>
                                <Tab.Pane eventKey="order-information">
                                        <OrderInformation></OrderInformation>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                </Tab.Container>
            </div>
        </Fragment>
		);
	}
}

const mapStateToProps = function (store) {
    return {
        popupValidator:store.popupValidator.popupValidator
    }

};
const mapDispatchToProps = function (dispatch) {
    return {
       
    }
};

export default  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile));