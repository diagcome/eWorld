import React from "react";
import {Link} from "react-router-dom"
import "../TermsConditions/TermsConditions.scss"
import Header from "../Header/Header";
import Subscribe from "../Subscribe/Subscribe";

export default function TermsConditions() {

    return (
        <React.Fragment>
            <Header/>
            <div className="container">
                <div className="row m-0">
                    <div className="col-12 about-header">
                        <Link to="/">
                            <i className='fa fa-home about-header__linkHome'/>
                        </Link>
                        <Link to="/termsConditions">
                            <span className="about-header__linkAboutUs">Terms & Conditions</span>
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
                        <h2 className="mainContent__headline">Terms & Conditions</h2>
                        <ul className="mainContent__listm p-0">
                            <li className="mainContent__item">
                                <h6 className="mainContent__title">PLEASE READ CAREFULLY</h6>
                                <span className="mainContent__text p-0">By accessing, browsing and/or using the pages
                                    in this Site, you agree to these Terms and Conditions. If you do not agree,
                                    do not access, browse or use this Site. If you are currently a party to a formal
                                    purchase agreement with eWorld or any of its affiliates
                                    (such as an industrial distribution agreement or a master purchase agreement),
                                    the terms of that agreement will supersede any terms of this Site to the extent inconsistent.
                                    Please see the terms and conditions available at those sites.</span>
                            </li>
                            <li className="mainContent__item">
                                <h6 className="mainContent__title">TERMINATION</h6>
                                <span className="mainContent__text p-0">eWorld or you may terminate this agreement
                                    at any time. You may terminate this agreement by destroying: (a) all Materials
                                    obtained from the Site, and (b) all related documentation and all copies and
                                    installations. Upon termination, you must destroy all Materials including, without
                                    limitation, permanently deleting all Materials from any computer and/or media and,
                                    upon eWorld's request, certify in writing that all Materials have been destroyed.
                                    The warranty disclaimers, limitations and exclusions of liability.
                                    </span>
                            </li>
                            <li className="mainContent__item">
                                <h6 className="mainContent__title">SUBMISSIONS</h6>
                                <span className="mainContent__text p-0">All remarks, suggestions, ideas, graphics, or
                                    other information communicated to Snap-on through this Site
                                    (together, the "Submission") will forever be the property of eWorld or any of its
                                    related, affiliated or subsidiary companies and you waive all of your rights,
                                    including but not limited to moral rights, therein if applicable.
                                    </span>
                            </li>
                            <li className="mainContent__item">
                                <h6 className="mainContent__title">MODIFICATIONS TO TERMS AND CONDITIONS</h6>
                                <span className="mainContent__text p-0">Eworld can revise these Terms and Conditions
                                    at any time by modifying or updating this posting. Your use of this Site on or
                                    after the effective date of any such modification or update will constitute your
                                    acceptance of these Terms and Conditions as modified and/or updated.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Subscribe/>
        </React.Fragment>

    )
}


