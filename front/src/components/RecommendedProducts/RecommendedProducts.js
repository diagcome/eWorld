import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';

import ProductCard from '../ProductCard/ProductCard'
import './RecommendedProducts.scss';

import {getRecProd} from "../../actions/recommendedProducts";

class RecommendedProducts extends Component {
    constructor(props) {
        super(props);
        this.state={
            renderCount:8
        }	
    }

    componentDidMount() {
        this.props.getRecProdAction();
    }

    viewMoreHandler(event){
        event.preventDefault()
        this.setState({
            renderCount:16
        })
    }
    
    render(){
        const {recProduct} = this.props;
        
        return(
            <div className="jumbotron jumbotron-fluid recommended-products text-center d-flex flex-column ">
                <div className='recommended-products__tittle'>
                    <span>Recommended Products</span>
                </div>
                <div className="container-fluid recommended-products_items row justify-content-center">
                    <ProductCard recProduct={recProduct.length != null?recProduct.slice(0, this.state.renderCount):null}></ProductCard>
                </div>
                <div className="recommended-products_items-viewmore">
                   {this.state.renderCount > 8?null:<button className="btn items-viewmore__btn" onClick={ this.viewMoreHandler.bind(this)}>View More Products</button>} 
                </div>
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
		recProduct:store.recProduct.recProduct
    }

};
const mapDispatchToProps = function (dispatch) {
    return {
        getRecProdAction: () => dispatch(getRecProd()),
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(RecommendedProducts))
