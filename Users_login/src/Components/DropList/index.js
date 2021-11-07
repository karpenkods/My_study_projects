import React, { useState, useRef } from 'react';
import './style.css';

import { langMass } from '../../Data';

const DropList = (props) => {

    // Состоние меню
    const [listVisible, setList] = useState(false);
    // Определение клика вне меню
    const listClickRef = useRef(null);

    // Клик был вне меню?
    document.addEventListener('click', (e) => {
        if (listClickRef.current && !listClickRef.current.contains(e.target)) {
            setList(false);
        } else return;
    });

    // Отправление данных и закрытие меню
    const setSendEndClose = (name, value) => {
        if (props.onClick) {
            props.onClick(name, value);
            setList(false);
        } else return;
    };

    return (
        <div className="drop-list" ref={listClickRef}> 
            <input 
                className={`${props.classMenu} ${listVisible === true ? 'input-active' : ''}`}
                placeholder={props.placeholder}
                value={props.value} />
            <i 
                className="fas fa-chevron-down drop"
                onClick={() => setList(!listVisible)}>
            </i>
            {listVisible === true ?
                <div className="drop-list__content">
                    {langMass.length !== 0 ?
                        langMass.map((item, index) => {
                            return (
                                <span 
                                    key={index}
                                    className={props.classItem} 
                                    onClick={() => setSendEndClose(props.name, item.label)}>
                                        {item.label}
                                </span>
                            );
                        })
                    :
                        <span 
                            className={props.classItem} 
                            onClick={() => setSendEndClose(props.name, 'Пусто')}>
                                Пусто
                        </span> }
            </div> : null}
        </div>  
    );
};

export default DropList;