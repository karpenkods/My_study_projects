import React from 'react';
import './style.scss';

const Filters = (props) => {

    return (
        <div className="filter">
            <p className="filter__text">{props.text}</p>
            <div className="filter__items">
                <button 
                    className="filter__btn"
                    onClick={props.onChangeSortDate}>
                        {props.valueBtnFirst}
                    {props.stateArrowDate === false ? <span>&#9660;</span>  : <span>&#9650;</span>}
                </button>
                <button 
                    className="filter__btn"
                    onClick={props.onChangeSortName}>
                        {props.valueBtnLast}
                    {props.stateArrowName === false ? <span>&#9660;</span> : <span>&#9650;</span>}
                </button>
            </div>
        </div>  
    );
};

export default Filters;