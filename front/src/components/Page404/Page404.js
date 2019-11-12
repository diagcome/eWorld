import React from 'react';
import { Link } from 'react-router-dom';

import './Page404.scss'

const NotFound = () => (

    <div id="notfound">
        <div className="notfound">
            <div className="notfound-bg">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h1 className="notfound_header">oops!</h1>
            <span className="notfound_text">Error 404 : Page Not Found</span>
            <Link className='notfound_goback' to="/">go back</Link>
            <div className="notfound-social">
                <Link to="#"><i className="fab fa-facebook"></i></Link>
                <Link to="#"><i className="fab fa-twitter"></i></Link>
                <Link to="#"><i className="fab fa-google-plus"></i></Link>
            </div>
        </div>
    </div>
);

export default NotFound;