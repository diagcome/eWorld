import React from 'react';
import './PreloaderBig.css';

const PreloaderBig = () => {
    return (

        <div className="lds-css ng-scope">
            <div style={{ width: "100%", height: "100%", margin: "0 auto" }} className="lds-eclipse">
                <div />
            </div>
        </div>
    );
}

export default PreloaderBig;