import * as React from "react";
import {Link, withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import "./Card.scss";

const Card = ({title, description, image, id,date}) => {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth();
    const day = new Date(date).getDate();
    const fullDate = `${year}/${month+1}/${day}`;

    return (
        <Link to={`/blog-posts/${id}`} className='card__link'>
        <div
            className="card"
        >
            <div>
                <div className="card__imgbox">
                    <img className="card__img" src={image} alt="here was beauty"/>
                    <div className="card__calendar">
                        <i className="fa fa-calendar card__icon" aria-hidden="true"/>
                        <span className="card__date">{fullDate}</span>
                    </div>
                </div>
            </div>

            <div className="card__boxLink">
                    <span className="card__title">{title}</span>
            </div>
            <div className="card__desc" dangerouslySetInnerHTML={{__html: description}}/>
        </div>
        </Link>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    headline: PropTypes.string,
    desc: PropTypes.string
}

export default withRouter(Card)