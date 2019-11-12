import React, {Component} from 'react';
import { Form, Button, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';

import FormValidator from '../../modules/formValidator';
import formRules from '../../modules/formValidationRules';
import PopUp from '../PopUp/PopUp';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './RegistrationForm.scss';

import {registrationCustomer} from "../../actions/authentication";

class RegistrationForm extends Component {

    constructor(props) {
		super(props)
		
		
        formRules.push({ 
            field: 'newPassword2', 
            method: this.passwordMatch,
            validWhen: true, 
            message: 'The second new password must match the first'
        })

        this.validator = new FormValidator(formRules);
        
        this.state = {
			email:'',
			phone:'',
            login:'',
            firstName:'',
            lastName:'',
            newPassword1:'',
            newPassword2:'',
            validation: this.validator.valid(),
        }

        this.submitted = false;
	}

	passwordMatch = (confirmation, state) => (state.newPassword1 === confirmation);

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
			this.props.registrationCustomerAction(
				this.inputEmail.value,
				this.inputLogin.value,
				this.inputFirstName.value,
				this.inputLastName.value,  
				this.inputPasswordSecond.value,
				this.inputPhone.value)
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
					<Row className="m-0">
						<div
						className="jumbotron col-12 p-0 bg-white min-vh-100 text-center mb-5 d-flex 
									flex-column justify-content-center align-items-center">
						{popup}
							<Form className="login-form col-lg-4 bg-light registration-form">
								<Form.Group className={validation.email.isInvalid && 'has-error'}>
									<Form.Label>Email address</Form.Label>
									<Form.Control 
									required
									type="email" 
									placeholder="Enter email"
									onChange={this.handleInputChange}
									name='email'
									ref={ref => this.inputEmail = ref}/>
									<Form.Text className="text-danger">
									We'll never share your email with anyone else.
									</Form.Text>
									<span className="help-block">{validation.email.message}</span>
								</Form.Group>

								<Form.Group className={validation.phone.isInvalid && 'has-error'}>
									<Form.Label>Phone number</Form.Label>
									<Form.Control 
									required
									type="text" 
									placeholder="Enter your phone"
									onChange={this.handleInputChange}
									name='phone'
									ref={ref => this.inputPhone = ref}/>
									<span className="help-block">{validation.phone.message}</span>
								</Form.Group>

								<Form.Group className={validation.login.isInvalid && 'has-error'}>
									<Form.Label>Login</Form.Label>
									<Form.Control
										required
										type="text"
										placeholder="Login"
										ref={ref => this.inputLogin = ref}
										name="login"
										onChange={this.handleInputChange}
									/>
									<span className="help-block">{validation.login.message}</span>
								</Form.Group>

								<Form.Group className={validation.firstName.isInvalid && 'has-error'}>
									<Form.Label>First name</Form.Label>
									<Form.Control
										required
										type="text"
										placeholder="First name"
										ref={ref => this.inputFirstName = ref}
										name="firstName"
										onChange={this.handleInputChange}
									/>
									<span className="help-block">{validation.firstName.message}</span>
								</Form.Group>

								<Form.Group className={validation.lastName.isInvalid && 'has-error'}>
									<Form.Label>Last name</Form.Label>
									<Form.Control
										required
										type="text"
										placeholder="First name"
										ref={ref => this.inputLastName = ref}
										name="lastName"
										onChange={this.handleInputChange}
									/>
									<span className="help-block">{validation.lastName.message}</span>
								</Form.Group>

								<Form.Group className={validation.newPassword1.isInvalid && 'has-error'}>
									<Form.Label>Your password</Form.Label>
									<Form.Control 
									required 
									type="password" 
									placeholder="Password"
									name="newPassword1"
									ref={ref => this.inputPasswordFirst = ref}
									onChange={this.handleInputChange}
									/>
									<span className="help-block">{validation.newPassword1.message}</span>
								</Form.Group>
								<Form.Group className={validation.newPassword2.isInvalid && 'has-error'}>
									<Form.Label>Confirm password</Form.Label>
									<Form.Control
									required
									type="password"
									placeholder="Password"
									ref={ref => this.inputPasswordSecond = ref}
									name='newPassword2'
									onChange={this.handleInputChange}
									/>
									<span className="help-block">{validation.newPassword2.message}</span>
								</Form.Group>

								<Row className="justify-content-around align-items-center mt-5">
									<Button variant="info" type="submit" 
									onClick={this.handleFormSubmit}>
										Register
									</Button>
									<Link to='/'>
										<Button variant="info">Back to home page</Button>
									</Link>
								</Row>
							</Form>
						</div>
					</Row>
					<Footer></Footer>
				</>}
			</React.Fragment>
			);
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
		registrationCustomerAction: (email, login, firstName, lastName, secondPass, phone) => dispatch(registrationCustomer(email, login, firstName, lastName, secondPass, phone)),
    }
};

export default  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationForm))