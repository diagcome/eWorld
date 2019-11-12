import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import PorductCard from '../ProductCard/ProductCard';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import ProductListHeader from './ProductListHeader/ProductListHeader';
import LeftFilter from './LeftFilter/LeftFilter';

import {getAllProducts} from '../../actions/allProducts'
import {getFiltredProducts} from '../../actions/allProducts';
import './ProductList.scss';


class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state={
            renderCount: 9,
            mainFlex:'row',
            pageCount:0,
            filterStatus:false,
            productFilters:{},
        }	

        this.getfilterOn = this.getfilterOn.bind(this);
    }

    componentWillMount() {
        if(!this.props.location.categoryFilter){
            this.props.getAllProductsAction();
        }
    }
    
    viewNextHandler(event){
        event.preventDefault()

        if(this.state.pageCount < this.props.allProducts.allProducts.length && 
            (this.state.pageCount + this.state.renderCount) <= this.props.allProducts.allProducts.length &&
            (this.state.pageCount + this.state.renderCount  + this.state.renderCount) <= this.props.allProducts.allProducts.length){
               
            this.setState({
                pageCount:new Number(this.state.pageCount + this.state.renderCount)
            })
        } else {
            this.setState({
                pageCount:new Number(this.props.allProducts.allProducts.length - this.state.renderCount),
                
            })
        }
    }

    viewPrevHandler(event) {
        event.preventDefault()

        if(this.state.pageCount < this.props.allProducts.allProducts.length && 
            (this.state.pageCount - this.state.renderCount) >= 0){

            this.setState({
                pageCount:new Number(this.state.pageCount - this.state.renderCount)
            })
        } else {
            this.setState({
                pageCount:0
            })
        }
    }

    getCategoryFilterChange(value) {

        if(this.state.mainFlex !== value && value){
            this.setState({
                mainFlex:value
            })
        }
    }

    getNumOfColumnChange(value){
        
        if(this.state.renderCount != value && value){
            this.setState({
                renderCount: new Number(value)
            })
        }
    }

    getfilterOn(stateFilter) {
        
        this.setState({
            filterStatus:stateFilter.filterOn,
            productFilters:stateFilter
        })

        if(stateFilter.filterOn){
            this.props.getFiltredProductsAction(stateFilter);
        }
    }

    render() {
        const {allProducts} = this.props.allProducts
       
        return (
            <React.Fragment>
                <Header/>
                <ProductListHeader filters={this.state}/>
                <div className="eworld-product d-flex flex-column flex-md-row">
                    <div className="product-filter d-flex flex-column">
                        <LeftFilter getfilterOn={this.getfilterOn} getFilterCategory={this.getFilterCategory}></LeftFilter>
                    </div>
                    <div className="product-list d-flex flex-column justify-content-start align-items-center w-100">
                        <CategoryFilter 
                        getCategoryFilterChange={this.getCategoryFilterChange.bind(this)}
                        getNumOfColumnChange={this.getNumOfColumnChange.bind(this)}/>
                        <div className="container-fluid product-list_items row justify-content-center">
                            <div className="product-list_viewmore d-flex justify-content-end">
                                {this.state.pageCount >0
                                ?<button className="btn product-list_viewmore__btn" 
                                    onClick={ this.viewPrevHandler.bind(this)}>
                                    {"<"}
                                </button>
                                :null} 
                                {(this.state.renderCount + this.state.pageCount) < allProducts.length
                                ?<button className="btn product-list_viewmore__btn" 
                                    onClick={ this.viewNextHandler.bind(this)}>
                                    {">"}
                                </button>
                                :null} 
                            </div>
                            {allProducts.length != 0?<PorductCard 
                                gridType={this.state.mainFlex} 
                                allProducts={allProducts.length != null
                                ?allProducts.slice(
                                (this.state.pageCount >= allProducts.length)?0
                                :this.state.pageCount, this.state.renderCount + this.state.pageCount)
                            :null}/>
                            :<img src="/img/noproduct.jpg" className="img-fluid" alt="no-product"/>}
                            <div className="product-list_viewmore d-flex justify-content-end">
                                {this.state.pageCount >0
                                ?<button className="btn product-list_viewmore__btn" 
                                    onClick={ this.viewPrevHandler.bind(this)}>
                                    {"<"}
                                </button>
                                :null} 
                                {(this.state.renderCount + this.state.pageCount) < allProducts.length
                                ?<button className="btn product-list_viewmore__btn" 
                                    onClick={ this.viewNextHandler.bind(this)}>
                                    {">"}
                                </button>
                                :null} 
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        allProducts: store.allProducts
    }

};
const mapDispatchToProps = function (dispatch) {
    return {
        getAllProductsAction:() => dispatch(getAllProducts()),
        getFiltredProductsAction:(filters) => dispatch(getFiltredProducts(filters)),
    }
};


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList))
