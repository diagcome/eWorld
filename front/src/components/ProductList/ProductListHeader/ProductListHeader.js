import React from 'react';
import {Link} from 'react-router-dom';

import './ProductListHeader.scss';

const ProductListHeader = (props) => {

    return(
        <div className="product-list_header d-flex align-items-center ">
            <Link to="/" className="fas fa-home"></Link>
            <span className="product-list_header__category">
                {props.filters.productFilters.productCategory?props.filters.productFilters.productCategory.replace(/_/g, ' '):"All Products"}
                {props.filters.productFilters.propductBrand?" | " + props.filters.productFilters.propductBrand.replace(/_/g, ' '):null}
                {props.filters.productFilters.propductModel?" | " + props.filters.productFilters.propductModel.replace(/_/g, ' '):null}
            </span> 
        </div>
    )
}

export default ProductListHeader;