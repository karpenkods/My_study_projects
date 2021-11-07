import React, { useState, useRef } from 'react';
import './style.scss';

const DropDownList = (props) => {

    // Состоние меню
    const [listVisible, SetList] = useState(false);
    // Определение клика вне меню
    const listClickRef = useRef(null);

    document.addEventListener('click', (e) => {
        if (listClickRef.current && !listClickRef.current.contains(e.target)) {
            SetList(false)
        } else return;
    });

    // Открыть/закрыть выпадающий список
    const setListVisible = (value) => {
        SetList(value);
    };

    // Закрыть меню после отправки значения
    const setCloseListItems = (value, name) => {

        if (props.onChange) {
            props.onChange(name, value);
            SetList(false);
        } else {
            return;
        }
    };
    
    return (
        <div 
            className={`ui right labeled input ${props.clsRightLabeled}`}
            ref={listClickRef} >
            <input 
                readOnly={props.value ? '' : 'readOnly'}
                type="text" 
                placeholder={props.placeholder}
                value={props.value}
                className={props.className ? props.className : ''} />
            <div role="listbox" aria-expanded="false" className="ui dropdown label" tabIndex="0">
                <i 
                    aria-hidden="true" 
                    className="dropdown icon"
                    onClick={() => setListVisible(!listVisible)}>
                </i>
                {listVisible &&
                    <div className="menu transition block">
                    {props.options ? 
                        props.options.map((item, index) => {
                            return (
                                <div 
                                    onClick={() => setCloseListItems(item.label, props.name)}
                                    key={index}
                                    role="option" 
                                    aria-checked="true" 
                                    aria-selected="true" 
                                    className="active selected item"
                                    name={props.name ? props.name : ''}>
                                    <span               
                                        className="text">
                                            {item.label}
                                    </span>
                            </div>
                            )
                        })
                        : 
                        <div 
                            onClick={() => setCloseListItems("Пусто", props.name)}
                            role="option" 
                            aria-checked="true" 
                            aria-selected="true" 
                            className="active selected item">
                            <span 
                                className="text">
                                    Пусто
                            </span>
                        </div>
                        }
                </div>}
            </div>
        </div>
    );
};

export default DropDownList;

