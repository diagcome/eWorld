import React from "react";
import {Link} from "react-router-dom"
import "../PrivacyPolicy/PrivacyPolicy.scss"
import Header from "../Header/Header";
import Subscribe from "../Subscribe/Subscribe";

export default function PrivacyPolicy() {

    return (
        <React.Fragment>
            <Header/>
            <div className="container">
                <div className="row m-0">
                    <div className="col-12 about-header">
                        <Link to="/">
                            <i className='fa fa-home about-header__linkHome'/>
                        </Link>
                        <Link to="/privacyPolicy">
                            <span className="about-header__linkAboutUs">Privacy Policy</span>
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
                        <h2 className="mainContent__headline">Privacy Policy</h2>
                        <ul className="mainContent__listm p-0">
                            <li className="mainContent__item">
                                <span className="mainContent__text p-0">We appreciate your interest in our services and
                                    your visit to this website. The protection of your privacy in the processing of your
                                    personal data is an important concern to which eWorld Incorporated
                                    ( pays special attention during our business processes.The privacy practices set
                                    forth in this Privacy Policy are for this Web site only. Other Snap-on affiliate
                                    Web sites may have different practices. If you link to or otherwise visit these or
                                    any other Web sites, please review the privacy policies posted at those sites.
                                </span>
                                </li>
                            <li className="mainContent__item">
                                <h6 className="mainContent__title">What personal data do we gather?</h6>
                                <span className="mainContent__text p-0">
                                    This is information about you that you give to us by filling in forms on our site or by corresponding with us by phone, e-mail, in person or at trade shows or events or otherwise. It includes information you provide when you register to use our site, subscribe to our service, search for a product and when you report a problem with our site. The information you give to us includes for example: name, title, address, business telephone number, purchase information, business email address, fax number, country of origin/nationality, passport number, country of residence, financial and credit card information, personal description, photograph, customer number, business-related information, preferences provided by Internet activity, survey responses marketing efforts, and the name of the company you work for.
                                    </span>
                            </li>
                            <li className="mainContent__item">
                                <h6 className="mainContent__title"> How is that personal data used by us?</h6>
                                <span className="mainContent__text p-0">
                                    For the technical administration of the website; for internal operations; for customer administration; for product surveys; for troubleshooting; for data analysis, data analytics, testing, and research and development purposes; to ensure that content from our site is presented in the most effective manner for you and for your computer; and as part of our efforts to keep our site safe and secure;
                                     To provide customer support and respond to requests, questions, and comments; to notify you about changes to our service; and to measure how effectively we address your concerns;
                                    To protect our rights or property or that of our business partners, franchisees, dealers, suppliers, customers or others when we have reasonable grounds to believe that such rights or property have been or could be affected; to recover debts; to prevent, detect, identify, investigate, respond, and protect against potential or actual claims, liabilities and prohibited behaviour or activities.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Subscribe/>
        </React.Fragment>

    )
}

