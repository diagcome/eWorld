import React from 'react';
import Header from '../Header/Header';
import ProductsMenu from "../ProductsMenu/ProductsMenu";
import RecommendedProducts from '../RecommendedProducts/RecommendedProducts';
import Slider from '../Slider/Slider';
import Subscribe from '../Subscribe/Subscribe'
import Footer from '../Footer/Footer'
import Blog from "../Blog/Blog";

function Home () {

    return (
        <React.Fragment>
            <Header></Header>
            <ProductsMenu></ProductsMenu>
            <Slider></Slider>
            <RecommendedProducts></RecommendedProducts>
            <Blog />
            <Subscribe/>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;