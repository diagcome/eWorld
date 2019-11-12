import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';

import recProductCardRenderHelper from '../../helpers/renderHelpers/recProductCardRenderHelper';
import allProductCardRenderHelper from '../../helpers/renderHelpers/allProductCardRenderHelper';
import './ProductCard.css';


class ProductCard extends Component {
    render() {

       const recProd = this.props.recProduct? //for recommend block in Home page
                this.props.recProduct.length > 7
                ?recProductCardRenderHelper(this.props.recProduct)
                :null
            :null

        const allProd = this.props.allProducts?
                allProductCardRenderHelper(this.props.allProducts, this.props.gridType)
                :null


        return(
            <React.Fragment>
                {recProd}
                {allProd}
            </React.Fragment>
        )
    }
}
    
const mapStateToProps = function (store) {
    return {
        
    }

};
const mapDispatchToProps = function (dispatch) {
    return {
    
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductCard))
