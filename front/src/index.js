import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


import App from './components/App';
import store from './store/store';

ReactDOM.render(  
    <Provider store={store} >
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('wrapper')
);


