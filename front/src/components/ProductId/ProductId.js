import React, {Component} from 'react';
import './ProductId.scss';
import Header from '../Header/Header';

class ProductId extends Component {

    render() {

        return (
            <React.Fragment>
                <Header></Header>
            <div className="container-fluid">
                <div className="jumbotron col-12 p-0 bg-info min-vh-100 text-center m-0 d-flex
                                flex-column justify-content-center align-items-center">
                    <h1 className="info-color">THIS is PRODUCT ID page!</h1>
                </div>
            </div>
            </React.Fragment>
        )
    }
}


export default ProductId