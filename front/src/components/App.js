import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import Home from './Home/Home';
import BlogDetails from "./Blog/BlogsArticles/BlogsArticles";
import Profile from './Profile/Profile';
import ProductList from './ProductList/ProductList';
import ProductId from './ProductId/ProductId';
import Checkout from './Checkout/Checkout';
import OrderInfo from './Checkout/OrderInfo/OrderInfo';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import AboutUs from "./AboutUs/AboutUs";
import Contacts from "./Contacts/Contacts";
import Delivery from "./Delivery/Delivery";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy"
import NotFound from "./Page404/Page404";
import SkrollUp from "./SkrollUp/SkrollUp";

import checkAccessExpHelper from '../helpers/tokenHelpers/checkAccessExp';
import updateAccessTokenHelper from '../helpers/tokenHelpers/updateAccessTokenHelper';
import '../scss/style.scss';
import TermsConditions from "./TermsConditions/TermsConditions";


if (checkAccessExpHelper()) {  //refresh token
	updateAccessTokenHelper(window.location.href)
}

class App extends Component {

	render() {
		return (
			<React.Fragment>
				<SkrollUp></SkrollUp>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/product-list" component={ProductList} />
					<Route exact path="/productId" component={ProductId} />
					<Route exact path="/checkout" component={Checkout} />
					<Route exact path="/blog" component={Profile} />
					<Route exact path="/blog/id" component={Profile} />
					<PrivateRouter exact path="/profile" component={Profile} />
					<Route path="/login" component={() =>
						<LoginForm />
					} />
					<Route exact path='/order-information' component={OrderInfo}></Route>
					<Route path="/registration" component={() =>
						<RegistrationForm />
					} />
					<Route path="/blog-posts/:id" component={(props) =>
						<BlogDetails {...props} />
					} />
					<Route exact path="/aboutUs" component={AboutUs} />
					<Route exact path="/deliveryInfo" component={Delivery} />
					<Route exact path="/privacyPolicy" component={PrivacyPolicy} />
					<Route exact path="/termsConditions" component={TermsConditions} />
					<Route exact path="/contacts" component={Contacts} />

					<Route path="*" component={NotFound} />
				</Switch>
			</React.Fragment>				
		);
	}
}

const mapStateToProps = function (store) {
	return {
		
	}

};

const mapDispatchToProps = function (dispatch) {
	return {
		
	}
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(App))
