import React, {Fragment} from 'react';
import {Link, withRouter} from "react-router-dom";
import './Footer.scss'



export default function FooterBottom() {
    return (
                <section className='footer-bottom'>
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <h5 className="m-0">Powered By OpenCart Avnet Electronics Store © 2019</h5>
                            <div className='d-flex justify-content-center  align-items-center pl-4'>
                                <a href="https://www.americanexpress.com/" target="https://www.americanexpress.com/"><img src='/img/Footer/american_express.png'/> </a>
                                <a href="https://www.discover.com/" target="https://www.discover.com/"> <img src='/img/Footer/discover.png' /></a>
                                <a href="https://pay.google.com/payments/home" target="https://pay.google.com/payments/home"> <img src='/img/Footer/google_wallet.png' /></a>
                                <a href="https://www.paypal.com/ru/home" target="https://www.paypal.com/ru/home"> <img src='/img/Footer/paypal.png' /></a>
                                <a href="https://www.visa.com.ua/" target="https://www.visa.com.ua/"> <img src='/img/Footer/visa.png' /></a>
                            </div>
                        </div>
                    </div>
                </section>
    );
}