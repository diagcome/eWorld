import React from "react";
import {Link} from "react-router-dom"
import "../Delivery/Delivery.scss"
import Header from "../Header/Header";
import Subscribe from "../Subscribe/Subscribe";
export default function Delivery() {

    return (
        <React.Fragment>
            <Header/>
            <div className="container">
                <div className="row m-0">
                    <div className="col-12 delivery-header">
                        <Link to="/">
                            <i className='fa fa-home delivery-header__linkHome'/>
                        </Link>
                        <Link to="/deliveryInfo">
                            <span className="delivery-header__linkAboutUs">Delivery Information</span>
                        </Link>
                    </div>
                </div>
                <div className="row delivery-content">
                    <div className="col-lg-4 delivery-content__category d-flex flex-column">
                        <div className="delivery-content__asideBanner">
                            <img className="delivery-content__asideImage" src="/img/AboutUs/aside_img.jpg"
                                 alt="aside-img"/>
                        </div>

                        <div className="delivery-content__info d-flex flex-column p-0 mt-3">
                            <span className="delivery-content__info-title align-items-start">information</span>
                            <ul className="delivery-content__info-list d-flex flex-column">
                                <li className="delivery-content__info-item">
                                    <Link to="/aboutUs" className="delivery-content__info-link">About Us</Link>
                                </li>
                                <li className="delivery-content__info-item">
                                    <Link to="/deliveryInfo" className="delivery-content__info-link">Delivery Information</Link>
                                </li>
                                <li className="delivery-content__info-item">
                                    <Link to="/privacyPolicy" className="delivery-content__info-link">Privacy Policy</Link>
                                </li>
                                <li className="delivery-content__info-item">
                                    <Link to="/termsConditions" className="delivery-content__info-link">Terms & Conditions</Link>
                                </li>
                                <li className="delivery-content__info-item">
                                    <Link to="/contacts" className="delivery-content__info-link">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-lg-8 mainContent pr-0">
                        <h2 className="mainContent__headline">Delivery information</h2>
                        <ul className="mainContent__listm p-0">
                            <li className="mainContent__item">
                                <h6 className="mainContent__title text-uppercase">standard delivery</h6>
                                <span className="mainContent__text p-0">Free delivery for all orders over 100$. Our standard delivery option is at the heart of our promise to our customers. For any orders made that are less than 30$ in total, you'll pay an additional charge, starting at 3.99$ (calculated based on the weight and dimensions of your parcel).</span>
                            </li>
                            <li className="mainContent__item">
                                <h6 className="mainContent__title text-uppercase">next day delivery</h6>
                                <span className="mainContent__text p-0">We're proud to offer to our customers next working day, home deliveries on orders made before 4pm the previous day.Of course, there is a small charge for this service, starting at 6.99$ (we calculate our decisions on the weight and dimensions of the product).</span>
                            </li>
                            <li className="mainContent__item">
                                <h6 className="mainContent__title text-uppercase">weekend delivery</h6>
                                <span className="mainContent__text p-0">We've made Saturday and Sunday home deliveries available from 9.99$ (based on the weight and dimensions of your items).</span>
                            </li>
                            <li className="mainContent__item ">
                                <h6 className="mainContent__title text-uppercase">morning delivery</h6>
                                <span className="mainContent__text p-0">Exactly what it says on the tin. We can deliver your products the next working morning (before noon), if you make your order online before 4pm the previous day.</span>
                            </li>
                        </ul>
                        <div className=" mainContent__delivery ">
                            <h6 className="mainContent__deliveryTitle text-uppercase  ">our partners</h6>
                            <img className="img-fluid w-75 text-center" src="/img/Delivery/shipping.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe/>
        </React.Fragment>

    )
}