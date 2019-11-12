import React, {Component} from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import {connect} from 'react-redux';
import { Link, withRouter, Redirect} from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PopUp from '../PopUp/PopUp';

import FormValidator from '../../modules/formValidator';
import formRules from '../../modules/formValidationRules';
import './LoginForm.scss';

import {loginCustomer} from "../../actions/authentication";

 class LoginForm extends Component {

    constructor(props) {
        super(props)

        this.validator = new FormValidator(formRules);
        
        this.state = {
			email:'',
            oldPassword:'',
            validation: this.validator.valid(),
        }

        this.submitted = false;
        
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
    
        if (validation.isValid) {	
            this.props.loginCustomerAction(this.inputLogin.value, this.inputPassword.value, this.props.history);
        }
    }

    render() {

        const {popupValidator, loginIs} = this.props;

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
                {loginIs?<Redirect to="/profile"/>
                :<>
                <Header/>
                    <div className="container-fluid">
                        <Row>
                            <div className="jumbotron col-12 p-0 bg-white mb-5 text-center d-flex 
                                        flex-column justify-content-center align-items-center">
                                {popup}
                                <Form className="login-form col-lg-4 bg-light">
                                    <Form.Group className={validation.email.isInvalid && 'has-error'}>
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control 
                                        required
                                        type="email" 
                                        placeholder="Enter email"
                                        ref={ref => this.inputLogin = ref}
                                        onChange={this.handleInputChange}
                                        name='email'
                                        />
                                        <Form.Text className="text-danger">
                                        We'll never share your email with anyone else.
                                        </Form.Text>
                                        <span className="help-block">{validation.email.message}</span>
                                    </Form.Group>
                                    <Form.Group className={validation.oldPassword.isInvalid && 'has-error'}>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control 
                                        required 
                                        type="password" 
                                        placeholder="Password" 
                                        ref={ref => this.inputPassword = ref}
                                        name="oldPassword"
                                        onChange={this.handleInputChange}
                                        />
                                        <span className="help-block">{validation.oldPassword.message}</span>
                                    </Form.Group>
                                    <Row className="justify-content-around align-items-center mt-5">
                                        <Button variant="info" type="submit" 
                                        onClick={this.handleFormSubmit}>
                                            Submit
                                        </Button>
                                        <Link to='/'>
                                            <Button variant="info">Back to home page</Button>
                                        </Link>
                                    </Row>
                                </Form>
                            </div>
                        </Row>
                    </div>
                <Footer/></>}
            </React.Fragment>
        )  
    }
}


const mapStateToProps = function (store) {
    return {
        popupValidator:store.popupValidator.popupValidator,
        loginIs: store.loginIs.loginIs,
    }

};
const mapDispatchToProps = function (dispatch) {
    return {
        loginCustomerAction:(login, password, history) => dispatch(loginCustomer(login, password, history)),
    }
};

export default  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm))
