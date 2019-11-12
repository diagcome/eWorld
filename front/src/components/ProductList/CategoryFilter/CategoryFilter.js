import React, {useState, useEffect} from 'react';

import './CategoryFilter.scss';

const CategoryFilter = (props) =>{

    const [typeFilter, setTypeFilter] = useState(
        "row"
    );

    const [numOfColumn, setNumOfColumn] = useState(
        9
    );

    function typeFilterState() {
        return typeFilter;
    }

    function numOfColumnState() {
        return numOfColumn;
    }

    useEffect(() => {
        props.getCategoryFilterChange(typeFilterState());
        props.getNumOfColumnChange(numOfColumnState())
    });


    const sortListHandler = function(event){
        if(event.target.getAttribute('id') === "product-list") {
            setTypeFilter("row")
        } else {
            setTypeFilter("col")
        }
    }

    const numOfColumnHandler = function(event){

        if(event.target.value != numOfColumn){
            setNumOfColumn(event.target.value)
        }
    }

    return(
        <div className="product-list_category-filter d-flex justify-content-between align-items-center">
            <div className="category-filter_visualsort">
                <i onClick={sortListHandler.bind(this)} className="fas fa-columns" id="product-list"></i>
                <i onClick={sortListHandler.bind(this)} className="far fa-list-alt" id="product-column"></i>
            </div>
            <div className="category-filter_num d-flex flex-row align-items-center justify-content-center">
            <label htmlFor="choiseNumOfColumn" className="m-0">Show:</label>
            <select className="form-control" id="choiseNumOfColumn" onChange={numOfColumnHandler.bind(this)}>
                <option>9</option>
                <option>20</option>
                <option>30</option>
            </select>
            </div>
        </div>
    )
}

export default CategoryFilter