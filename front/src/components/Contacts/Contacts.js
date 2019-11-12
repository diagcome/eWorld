import React from 'react';
import './Contacts.scss';
import Header from '../Header/Header';
import {Link} from "react-router-dom";
import Subscribe from "../Subscribe/Subscribe";

export default function Contacts () {
            return (
            <React.Fragment>
                <Header></Header>
                <div className="container">
                    <div className="row m-0">
                        <div className="col-12 contact-header">
                            <Link to="/">
                                <i className='fa fa-home contact-header__linkHome'/>
                            </Link>
                            <Link to="/contacts">
                                <span className="contact-header__linkAboutUs">Contact Us</span>
                            </Link>
                        </div>
                    </div>
                    <div className="row contact-content">
                        <div className="col-lg-4 contact-content__aside d-flex flex-column p-0">
                            <div className="contact-content__asideBanner">
                                <img className="contact-content__asideImage " src="/img/AboutUs/aside_img.jpg"
                                     alt="aside-img"/>
                            </div>

                            <div className="contact-content__info d-flex flex-column p-0 mt-3">
                                <span className="contact-content__info-title align-items-start">information</span>
                                <ul className="contact-content__info-list d-flex flex-column">
                                    <li className="contact-content__info-item">
                                        <Link to="/aboutUs"
                                              className="contact-content__info-link">About Us</Link></li>
                                    <li className="contact-content__info-item">
                                        <Link to="/deliveryInfo" className="contact-content__info-link">Delivery Information</Link>
                                    </li>
                                    <li className="contact-content__info-item">
                                        <Link to="/privacyPolicy" className="contact-content__info-link">Privacy Policy</Link>
                                    </li>
                                    <li className="contact-content__info-item">
                                        <Link to="/termsConditions" className="contact-content__info-link">Terms & Conditions</Link>
                                    </li>
                                    <li className="contact-content__info-item">
                                        <Link to="/contacts" className="contact-content__info-link">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div id="content" className="col-lg-8 mainContent pr-0 ">
                            <h2 className="mainContent__headline ">Contact Us</h2>
                            <h4 className="mainContent__locationHeadline">Our Location</h4>
                            <div className="mainContent__locationBox">
                                <h6 className="mainContent__nameStore">Company: Best Electronics Store</h6>
                                <div className="mainContent__addressDetails">
                                    <h6 className="mainContent__adress">
                                        <i className="fas fa-home mainContent__addressIcon"/>
                                        Adress:<br/>1b, Pavla Tychyny ave., Kyiv, Ukraine Silver Breeze, office A,
                                        3th floor</h6>

                                    <h6 className="mainContent__contact">
                                        <i className="fas fa-mobile-alt mainContent__contactIcon"/>
                                        How to contact:<br/>
                                        (044) 290-22-44</h6>

                                    <h6 className="mainContent__shedule"><i className="fas fa-calendar-alt mainContent__sheduleIcon"/>Schedule:<br></br>Mon-Fri
                                        10:00 – 21:00 Sat-Sun 10:00 – 16:00</h6>

                                    <h6 className="mainContent__transport">
                                        <i className="fas fa-bus mainContent__transportIcon"/>
                                        How to get there:<br/>
                                        From Levoberezhnaya metro station by buses No. 95, 49, 108; by minibuses No.
                                        177, 178, 249
                                    </h6>
                                </div>
                            </div>
                            <div className="mainContent__map ">
                                <iframe  width="600" height="300" id="gmap_canvas" className='col-sm-12' title="location"
                                        src="https://maps.google.com/maps?q=1b%2C%20Pavla%20Tychyny%20ave.%2C%20Kyiv%2C%20Ukraine%20Silver%20Breeze%2C%20office%20A&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
                            </div>
                        </div>
                    </div>
                </div>
                <Subscribe/>
            </React.Fragment>
        )
}
