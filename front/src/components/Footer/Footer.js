import React, {Fragment} from 'react';
import {Link, withRouter} from "react-router-dom";
import FooterBottom from './FooterBottom';
import './Footer.scss'



export default  function Footer() {
    return (
        <Fragment>
            <div className="pt-5 pb-5 footer">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5 col-xs-12 about-company">
                            <Link className="nav-link footer-link" to='/'><img src='/img/eWorld-logo.png'/></Link>
                            <p className="pr-5 footer__text-footer">There are many variations of passages of look even
                                slightly believable.</p>
                            <a href="https://www.facebook.com/ "target="https://www.facebook.com/"><i className="fab fa-facebook-square fa-2x"></i> </a>
                            <a href="https://twitter.com/" target="https://twitter.com/"><i className="fab fa-twitter-square fa-2x"></i></a>
                            <a href="https://rss.com/" target="https://rss.com/"><i className="fas fa-rss-square fa-2x"></i></a>
                            <a href="https://www.google.com.ua/" target="https://www.google.com.ua/"><i className="fab fa-google-plus-square fa-2x"></i></a>


                        </div>
                        <div className="col-lg-3 col-xs-12 links">
                            <h4 className="mt-lg-0 mt-sm-3 mt-3">INFORMATION</h4>
                            <ul className="m-0 p-0">
                                <Link className="nav-link footer-link" to='/aboutUs'>About Us</Link>
                                <Link className="nav-link footer-link" to='/deliveryInfo'>Delivery Information</Link>
                                <Link className="nav-link footer-link" to='/privacyPolicy'>Privacy Policy</Link>
                                <Link className="nav-link footer-link" to='/termsConditions'>Terms & Conditions</Link>
                                <Link className="nav-link footer-link" to='/contacts'>Contact Us</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottom/>
        </Fragment>
    );
}




