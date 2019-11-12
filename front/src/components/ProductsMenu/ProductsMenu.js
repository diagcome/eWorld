import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import { Navbar} from 'react-bootstrap';
import {connect} from 'react-redux';

import {getProductsMenu} from '../../actions/productsMenu'
import './ProductsMenu.scss';


class ProductsMenu extends Component {
	
	componentDidMount(){
		this.props.getProductsMenuAction()
	}

  render() {

	const {productsMenu} = this.props;

	const productMenuDesc = productsMenu.map((obj) => {
		if(obj.lvl === 1) {
			const firstLvlRender = obj._id;
			return(
				<li key={obj._id} className="nav-item dropdown brand-list_item" id={obj._id}>
					<Link className="nav-link dropdown-toggle" 
						to='/'
						id="navbarDropdown" 
						role="button" 
						data-toggle="dropdown" 
						aria-haspopup="true" 
						aria-expanded="false">
					{obj.name}
					</Link>
					<div className="dropdown-menu brand-list_item-menu" aria-labelledby="navbarDropdown">
					{ productsMenu.map((obj) => {
						if(obj.lvl === 2 && obj.parent === firstLvlRender){
							const secondLvlRender = obj._id;
							return(
								<div key={obj.name} className="item-menu__wrapper">
									<Link className="dropdown-item" 
									to={{
										pathname:'/product-list',
										brandFilter: obj.categoryFilter.brand,
										categoryFilter:obj.categoryFilter.category
									}} 
									id={obj.id}>{obj.name}</Link>
									<div className="dropdown-divider"></div>
									{productsMenu.map((obj) => {
										
										if(obj.lvl === 3 && obj.parent === secondLvlRender){
											return(
												<Link 
												key={obj.categoryFilter.model}
												className="dropdown-item_down" 
												to={{
													pathname:'/product-list',
													categoryFilter:obj.categoryFilter.category,
													modelFilter: obj.categoryFilter.model,
													brandFilter: obj.categoryFilter.brand
												}} 
												id={obj._id}>{obj.name}</Link>
											)
										}
									})}
								</div>
							)
						}
					})}
					</div>
				</li>
			)
		}
	})

	const productMenuTabl = productsMenu.map((obj) => {
		if(obj.lvl === 1) {
			const firstLvlRender = obj._id;
			return(
				<li key={obj._id} className="nav-item dropdown brand-list_item" id={obj._id}>
					<Link className="nav-link dropdown-toggle" 
						to='/'
						id="navbarDropdown" 
						role="button" 
						data-toggle="dropdown" 
						aria-haspopup="true" 
						aria-expanded="false">
					{obj.name}
					</Link>
					<div className="dropdown-menu brand-list_item-menu" aria-labelledby="navbarDropdown">
					{ productsMenu.map((obj) => {
						if(obj.lvl === 2 && obj.parent === firstLvlRender){
							const secondLvlRender = obj._id;
							return(
								<div key={obj.name} className="item-menu__wrapper">
									<Link className="dropdown-item"
										to={{
											pathname:'/product-list',
											brandFilter: obj.categoryFilter.brand,
											categoryFilter:obj.categoryFilter.category
										}} 
									id={obj.id}>{obj.name}</Link>
									<div className="item-menu__wrapper_down">
										{productsMenu.map((obj) => {	
											if(obj.lvl === 3 && obj.parent === secondLvlRender){
												return(
													<Link key={obj.categoryFilter.model} className="dropdown-item_down" 
													to={{
														pathname:'/product-list',
														categoryFilter:obj.categoryFilter.category,
														modelFilter: obj.categoryFilter.model,
														brandFilter: obj.categoryFilter.brand
													}}  
													id={obj._id}>{obj.name}</Link>
												)
											}
										})}
									</div>
								</div>
							)
						}
					})}
					</div>
				</li>
			)
		}
	})
    

    return (
        <Navbar collapseOnSelect expand="lg" className="products-menu m-0 p-0">
			<button className="navbar-toggler products-menu_button" 
				type="button" 
				data-toggle="collapse" 
				data-target="#navbarSupportedContent" 
				aria-controls="responsive-navbar-nav" 
				aria-expanded="false" aria-label="Toggle navigation">
				<span className="fa fa-navicon products-menu_button__burger"/>
			</button>
			<div className="collapse navbar-collapse collapse-list_brand" id="navbarSupportedContent">
				<ul className="navbar-nav collapse-list_brand-list">
					{productMenuDesc}
				</ul>
			</div>
			<div className="collapse navbar-collapse collapse-list_brand-mini" id="navbarSupportedContent">
				<ul className="navbar-nav collapse-list_brand-list">
					{productMenuTabl}
				</ul>
			</div>
		</Navbar>
    )
  }
}

const mapStateToProps = function (store) {
    return {
		productsMenu:store.productsMenu.productsMenu,
    }

};
const mapDispatchToProps = function (dispatch) {
    return {
		getProductsMenuAction:() => dispatch(getProductsMenu())
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsMenu))
