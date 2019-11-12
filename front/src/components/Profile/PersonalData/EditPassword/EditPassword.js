import React,{Component} from 'react';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';
import { InputGroup,FormControl, Button,Form, Col } from 'react-bootstrap';

import "./EditPassword.scss";
import FormValidator from '../../../../modules/formValidator';
import formRules from '../../../../modules/formValidationRules';

import {editCustomerPass} from "../../../../actions/profile";

class EditPassword extends Component {

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
            oldPassword:'',
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
            this.props.editCustomerPassAction(this.oldPassword.value, this.newPassword2.value);
        }
    }

    render() {
        const {customer} = this.props.customer;


        let validation = this.submitted?            // if the form has been submitted at least once
            this.validator.validate(this.state) :   // then check validity every time we render
            this.state.validation                   // otherwise just use what's in state


        return(
            <InputGroup className="d-flex flex-column align-items-center justify-content-center mt-5">
                <Form.Group as={Col}  md="5" className={"d-flex flex-column align-items-center " + `${validation.oldPassword.isInvalid && 'has-error'}`}>
                    <FormControl
                        aria-label="Old password"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Old password"
                        className="mt-3"
                        name="oldPassword"
                        type="password"
                        ref={ref => this.oldPassword = ref}
                        onChange={this.handleInputChange}
                    />
                    <span className="help-block">{validation.oldPassword.message}</span>
                </Form.Group>
                <Form.Group as={Col} md="5" className={"d-flex flex-column align-items-center " +`${validation.newPassword1.isInvalid && 'has-error'}`}>
                 <FormControl
                    aria-label="New password"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="New password"
                    className="mt-3"
                    name="newPassword1"
                    type="password"
                    ref={ref => this.newPassword1= ref}
                    onChange={this.handleInputChange}
                />
                    <span className="help-block">{validation.newPassword1.message}</span>
                </Form.Group>
                <Form.Group as={Col} md="5" className={"d-flex flex-column align-items-center " + `${validation.newPassword2.isInvalid && 'has-error'}`}>
                    <FormControl
                        aria-label="New password again"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="New password again"
                        className="mt-3"
                        type="password"
                        name="newPassword2"
                        ref={ref => this.newPassword2 = ref}
                        onChange={this.handleInputChange}
                    />
                    <span className="help-block">{validation.newPassword2.message}</span>
                </Form.Group>
                <Button variant="info" type="submit" className="mt-5 mb-5" 
                    onClick={this.handleFormSubmit}>
                        Edit password
                </Button>
          </InputGroup>
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
        editCustomerPassAction: (oldPassword, newPassword) => dispatch(editCustomerPass(oldPassword, newPassword)),
    }
};

export default  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPassword))
