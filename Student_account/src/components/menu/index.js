import React, { useState } from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom'

const Menu = (props) => {

    return (
        <nav className="menu-item">
            {props.buttons ? 
            
                props.buttons.map((item, index) => {
                    return (
                        <span 
                            className="container-item"
                            key={index}>
                            <NavLink 
                                to={item.path}
                                className="item">
                                    {item.label}
                            </NavLink>
                            {item.bid ? 
                                <span className="item-label">{item.bid}</span>
                            : null}
                        </span>
                    )
                })
            : null}
        </nav>
    );
};

export default Menu;