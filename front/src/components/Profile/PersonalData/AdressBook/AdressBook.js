import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';
import { InputGroup,FormControl, Button, Form, Col } from 'react-bootstrap';

import {editAdress} from '../../../../actions/profile'
import './AdressBook.scss'
import FormValidator from '../../../../modules/formValidator';
import formRules from '../../../../modules/formValidationRules';

class AdressBook extends Component {

    constructor(props) {
        super(props)

        this.validator = new FormValidator(formRules);
        
        this.state = {
            city:'',
            street:'',
            num:'',
            post_code:'',
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
            this.props.editAdressAction(this.state.city, this.state.street, this.state.num, this.state.post_code);
        }
    }

    componentDidMount(){
        this.setState({
            city:this.props.customer.customer.adress.city,
            street:this.props.customer.customer.adress.street,
            num:this.props.customer.customer.adress.num,
            post_code:this.props.customer.customer.adress.post_code,
        })
    }

    render() {
        const {customer} = this.props.customer;

        let validation = this.submitted?            // if the form has been submitted at least once
            this.validator.validate(this.state) :   // then check validity every time we render
            this.state.validation                   // otherwise just use what's in state

        return(
            <InputGroup className="d-flex flex-column align-items-center justify-content-center mt-5">
                <Form.Group as={Col} md="5" className={"mt-3 " + validation.city.isInvalid && 'has-error'}>
                    <Form.Label className="text-primary editadress-label">Your city</Form.Label>
                    <FormControl
                        aria-label="Your city"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Your city"
                        name="city"
                        ref={ref => this.city = ref}
                        defaultValue={customer.adress.city}
                        onChange={this.handleInputChange}
                    />
                    <span className="help-block">{validation.city.message}</span>
                </Form.Group>
                <Form.Group  as={Col} md="5" className={"mt-3 " + validation.street.isInvalid && 'has-error'}>
                    <Form.Label className="text-primary editadress-label">Name your street</Form.Label>
                    <Form.Control
                        aria-label="Your street"
                        aria-describedby="inputGroup-sizing-default" 
                        placeholder="Your street"
                        onChange={this.handleInputChange}
                        name='street'
                        ref={ref => this.street = ref}
                        defaultValue={customer.adress.street}
                    />
                    <span className="help-block">{validation.street.message}</span>
                </Form.Group>
                <Form.Group as={Col} md="5" className={"mt-3 " + validation.num.isInvalid && 'has-error'}>
                    <Form.Label className="text-primary editadress-label">Number of street</Form.Label>
                    <FormControl
                        aria-label="Number of street"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Number of street"
                        name="num"
                        ref={ref => this.num = ref}
                        defaultValue={customer.adress.num}
                        onChange={this.handleInputChange}
                    />
                    <span className="help-block">{validation.num.message}</span>
                </Form.Group>
                <Form.Group as={Col} md="5" className={"mt-3 " + validation.post_code.isInvalid && 'has-error'}>
                    <Form.Label className="text-primary editadress-label">Postal code</Form.Label>
                    <FormControl
                        aria-label="Postal code"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Postal code"
                        name="post_code"
                        ref={ref => this.post_code = ref}
                        defaultValue={customer.adress.post_code}
                        onChange={this.handleInputChange}
                    />
                    <span className="help-block">{validation.post_code.message}</span>
                </Form.Group>
                <Button variant="info" type="submit" className="mt-5 mb-5" 
                    onClick={this.handleFormSubmit}>
                        Edit book adress
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
        editAdressAction:(city, street, num, post_code) => dispatch(editAdress(city, street, num, post_code))
    }
};


export default  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AdressBook));
