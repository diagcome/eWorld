import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {getProductsMenu} from '../../../actions/productsMenu';
import {getProductsFilters} from '../../../actions/poroductFilters';
import idGeneratorHelper from '../../../helpers/renderHelpers/idGeneratorHelper';
import './LeftFilter.scss';

class LeftFilter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filterOn:false,
            ram:[],
            color:[],
            display:[],
            productCategory:'',
            propductModel:'',
            propductBrand:'',
            productName:''
        }

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleClickCategory = this.handleClickCategory.bind(this);
    };

    componentDidMount() {
        
        this.setState({
            productCategory: this.props.location.categoryFilter?this.props.location.categoryFilter:'',
            propductBrand: this.props.location.brandFilter?this.props.location.brandFilter:'',
            propductModel:this.props.location.modelFilter?this.props.location.modelFilter:'',
            filterOn:this.props.location.categoryFilter?true:false
        })

        this.props.getProductsMenuAction();
        this.props.getProductsFiltersAction();
    }


    handleCheckboxChange(event) {
        
        if(this.state.ram.length + this.state.color.length + this.state.display.length === 0) {
            this.setState({
                filterOn: false
            })
        }

        if(event.target.checked) {

            this.setState({
                [event.target.name]:[...this.state[event.target.name], event.target.value],
                filterOn: true
            })

        } else if(!event.target.checked) {

            let remove = this.state[event.target.name].map((item) => { 
                if(item === event.target.value){
                    return item;
                }
            }).indexOf(event.target.value);
            this.setState({
                [event.target.name]: this.state[event.target.name].filter((_, i) => i !== remove)
            })
        }   
    }

    handleClickCategory(event) {
        event.preventDefault()

        this.setState({
            productCategory:event.target.text != "All products"?event.target.name:'',
            productName:event.target.text != "All products"?event.target.text:'',
            propductModel:'',
            propductBrand:'',
            filterOn: true,
        })
    }

    componentDidUpdate(){
        this.props.getfilterOn(this.state);
    }

    render(){

        const {productsMenu, allProductsFilters} = this.props;
        
        const mainCategory = productsMenu.map((obj) => {
            const key = idGeneratorHelper()
            return(<React.Fragment key={key}>
                    {(obj.lvl === 1)
                    ?<li >
                        <Link to="/"
                        name={obj.categoryFilter.category}
                        onClick={this.handleClickCategory}>{obj.name}</Link>
                    </li>
                    :null
                    }
                </React.Fragment>
            )  
        })

        const productsFiulter =  allProductsFilters.length > 2?
            allProductsFilters.map((obj) => {
                    {return(
                        Object.keys(obj).map((arr)=>{
                            return(
                                arr != "_id"?
                            <div key={obj._id}className="type-list d-flex flex-md-column flex-wrap">
                                <span className={"type-list_"+ arr + " align-self-center"}>
                                    {arr + "s :"}
                                </span>
                                    {obj[arr].map((atr) => {
                                        return(
                                            <div key={atr} className={"form-check_filters " + arr}>
                                                <input className="form-check-input_filters mb-2 m-md-0" type="checkbox" name={arr} value={atr} 
                                                onChange={this.handleCheckboxChange}/>
                                                <label className="form-check-label_filters mr-1 m-md-0 ml-md-1" htmlFor={atr + "-check"}>
                                                    {atr}
                                                </label>
                                            </div>
                                        )
                                    })}
                            </div>
                            :null
                            )
                        })
                    )}
                })
                :null
                    
        return(
            <React.Fragment>
  
                    <button className="btn hidden product-filter__btn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Filter menu
                    </button>
                    
                    <div className="collapse dont-collapse-sm" id="collapseExample">
                       <div className="product-filter_category d-flex flex-column">
                            <span className="product-filter_category-title">Category</span>
                            <div className="product-filter_category_list d-flex flex-column">
                                <ul className="category_list_box-category d-flex flex-column">
                                <li>
                                    <Link to="/"
                                    onClick={this.handleClickCategory}>All products</Link>
                                </li>
                                    {mainCategory}
                                </ul>
                            </div>
                        </div>
                        <div className="product-filter_type d-flex flex-column">
                            <span className="product-filter_type-title">REFINE SEARCH</span>
                            <div className="product-filter_type-list">  
                                {productsFiulter}
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        productsMenu:store.productsMenu.productsMenu,
        allProductsFilters: store.allProductsFilters.allProductsFilters
    }

};
const mapDispatchToProps = function (dispatch) {
    return {
        getProductsMenuAction: () => dispatch(getProductsMenu()),
        getProductsFiltersAction: () => dispatch(getProductsFilters())
		
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftFilter))
