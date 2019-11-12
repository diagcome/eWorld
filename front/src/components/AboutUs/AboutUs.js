import React from "react";
import {Link} from "react-router-dom"
import "../AboutUs/AboutUs.scss"
import Header from "../Header/Header";
import Subscribe from "../Subscribe/Subscribe";
export default function AboutUs() {

        return (
            <React.Fragment>
                <Header/>
                <div className="container">
                    <div className="row m-0">
                        <div className="col-12 about-header">
                            <Link to="/">
                                <i className='fa fa-home about-header__linkHome'/>
                            </Link>
                            <Link to="/aboutUs">
                                <span className="about-header__linkAboutUs">About Us</span>
                            </Link>
                        </div>
                    </div>
                    <div className="row about-content">
                        <div className="col-lg-4 about-content__category d-flex flex-column">
                            <div className="about-content__asideBanner">
                                <img className="about-content__asideImage" src="/img/AboutUs/aside_img.jpg"
                                     alt="aside-img"/>
                            </div>

                            <div className="about-content__info d-flex flex-column p-0 mt-3">
                                <span className="about-content__info-title align-items-start">information</span>
                                <ul className="about-content__info-list d-flex flex-column">
                                    <li className="about-content__info-item">
                                        <Link to="/aboutUs" className="about-content__info-link">About Us</Link>
                                    </li>
                                    <li className="about-content__info-item">
                                        <Link to="/deliveryInfo" className="about-content__info-link">Delivery Information</Link>
                                    </li>
                                    <li className="about-content__info-item">
                                        <Link to="/privacyPolicy" className="about-content__info-link">Privacy Policy</Link>
                                    </li>
                                    <li className="about-content__info-item">
                                        <Link to="/termsConditions" className="about-content__info-link">Terms & Conditions</Link>
                                    </li>
                                    <li className="about-content__info-item">
                                        <Link to="/contacts" className="about-content__info-link">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-lg-8 mainContent pr-0">
                            <h2 className="mainContent__headline">about us</h2>
                            <ul className="mainContent__listm p-0">
                                <li className="mainContent__item">
                                    <h6 className="mainContent__title">100% Fully Responsive</h6>
                                    <i className="fa fa-mobile mainContent__icon" aria-hidden="true"/>
                                    <span className="mainContent__text">These days Mobile is the handiest device to access internet. Hence your website must be mobile accessible as compatibility.</span>
                                </li>
                                <li className="mainContent__item">
                                    <h6 className="mainContent__title">Cross Browser Compatibility</h6>
                                    <i className="fab fa-chrome mainContent__icon"/>
                                    <span className="mainContent__text">Cross-browser means web application works with all versions of all browsers. To claim cross-browser compatibility, the website is nowadays expected to support browsers.</span>
                                </li>
                                <li className="mainContent__item">
                                    <h6 className="mainContent__title">Dedicated support team</h6>
                                    <i className="fas fa-headset mainContent__icon"/>
                                    <span className="mainContent__text">Our support team guarantees to respond you within 24 working hours. We will process tickets and respond you to in the queue order.</span>
                                </li>
                                <li className="mainContent__item">
                                    <h6 className="mainContent__title">High Quality Products</h6>
                                    <i className="far fa-thumbs-up mainContent__icon"/>
                                    <span className="mainContent__text">Website design can do wonders for your traffic. Giving a fresh look to your website makes your visitors think that you care for them and are ready to change with time.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Subscribe/>
            </React.Fragment>

        )
}


