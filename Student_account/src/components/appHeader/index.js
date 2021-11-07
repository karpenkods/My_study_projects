import React from 'react';
import './style.scss';

const AppHeader = (props) => {
    return (
        <div className="container-app-header">
            <h1 className="container-app-header__title">Сервис учета студентов-практикантов</h1>
            <div className="container-app-header__info">
                <p className="container-app-header__text">{props.loginUser ? props.loginUser : ''}</p>
                <i onClick={props.setOutInSistem ? props.setOutInSistem : null} className="fa fa-times"></i>
            </div> 
        </div>
    )
}

export default AppHeader;