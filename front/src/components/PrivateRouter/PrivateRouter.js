import React, {Component} from 'react';
import {Redirect, Route } from 'react-router-dom';
import {connect} from 'react-redux';

import {checkAuth} from "../../actions/authentication";
import store from '../../store/store';

if(localStorage.getItem('accessToken') != null){
	store.dispatch(checkAuth());
}

class PrivateRoute extends Component {

    constructor(props) {
        super(props)
        
    }

    componentWillMount(){
        this.props.checkAuth()
    }

    render() {

        const {loginIs , component: Component, ...rest } = this.props;

        return(  
            <Route {...rest} render={props => (
    
                (document.referrer.indexOf({...rest}.path) != -1 || loginIs)
                ? <Component {...props}/>
    
                :<Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                    }}
                />
            )}/>
        )

    }
} 


const mapStateToProps = function (store) {
    return {
        loginIs: store.loginIs.loginIs,
    }
};

export default connect(
    mapStateToProps,
    {checkAuth}
)(PrivateRoute)