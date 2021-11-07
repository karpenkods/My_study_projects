import React, {useState} from 'react';
import './style.scss';

import DropDownList from '../dropDownList/index';
import MyInput from '../myInput/index';
import MyBtn from '../myBtn/index';
import RangePicker from 'react-range-picker';

// Набор данных для отображения
import {arrColledges, directions} from '../../utils/constanst'

const SearchBar = (props) => {
    return (
        <div className="search-menu">
            <div className="search-menu__container">
                <DropDownList 
                    clsRightLabeled="big"
                    className={'search-menu__item'}
                    name={props.college}
                    value={props.collegeVal}
                    onChange={(name, value) => props.onChangeDropData(name, value)}
                    placeholder={props.placeholderCollege}
                    options={arrColledges}/>

                <RangePicker
                    className={'search-menu__item'}
                    placeholderText={props.placeholderDate}
                    onDateSelected={props.onChangeDate}
                    value={[props.dateStart, props.dateEnd]}
                    />
                    
                <MyInput 
                    value={props.fullNameVal}
                    onChange={(e) => props.onChangeDropData(props.fullName, e.target.value)}
                    type={'text'}
                    className={'search-menu__item'}
                    name={props.fullName}
                    placeholder={props.placeholderFullName} />

                <DropDownList   
                    clsRightLabeled="big"
                    value={props.directionVal}
                    onChange={(name, value) => props.onChangeDropData(name, value)}
                    className={'search-menu__item'}
                    name={props.directionName}
                    placeholder={props.placeholderDirection}
                    options={directions}/>

                <MyBtn 
                    className={'search-menu__item'}
                    text={props.textBtn}
                    name="btn btn-item"
                    onClick={props.searchStud}/>
                
            </div>
                {props.visibleResetBtn ?
                    <i 
                        className={`fa fa-undo`}
                        onClick={props.resetSearch}>
                    </i> 
                :null}
        </div>
    );
};

export default SearchBar;