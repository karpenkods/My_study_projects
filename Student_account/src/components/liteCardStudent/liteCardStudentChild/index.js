import React from 'react';
import './style.scss';

import noavatar from '../../../images/noavatar.png';

const LiteCardStudentChild = (props) => {

    // Обработка изображений
    const getReturnImage = () => {
        let photo = props.photo === null ? "" : props.photo;
        photo = `${photo}`;
        let photoFoo = noavatar;

        if (photo) {
            photoFoo = `data:image/png;base64,${photo}`
        }

        return photoFoo;
    };

    return (
        <React.Fragment>
            <div className="container-list-element">
                {/* Click по самой карточке */}
                <div 
                    className="list-element"
                    onClick={props.setOpenCardStudent}>
                    <div className="list-element__our">
                        <div className = "list-element-identificator">
                            <p className = "list-element-identificator__label">№</p>
                            {/* Номер карточки {activePage*10-10 + idx + 1} */}
                            <p className = "list-element-identificator__number">{props.id+1}</p>
                        </div>
                        <div className = "list-element-date">
                            <p className = "list-element-date__label">Дата заявки</p>
                            {/* Дата {filingDate.slice(0, 10)} */}
                            <p className = "list-element-date__value">{props.filingDate}</p>
                        </div>
                    </div>
                    {/* Обработчик для изображения {getReturnImage()} */}
                    <img src={noavatar} alt="Фотография студента" className = "list__profile-pic" />
                    {/* ФИО студента { secondName + " " + firstName + " " + patronymic } */}
                    <p className = "list__name">{props.secondName + " " + props.firstName + " " + props.patronymic}</p>
                    <div className = "list__info">
                        <div className = "list__contacts__element">
                            <i className="fa fa-envelope fa-envelope__mail"></i>
                            {/* Эл почта { email } */}
                            <p className = "list__contacts__text">{props.email}</p>
                        </div>
                        <div className = "list__contacts__element">
                            <i className ="fa fa-mobile list__contact-icon"></i>
                            {/* Номер телефона { phone } */}
                            <p className = "list__contacts__text">{props.phone}</p>
                        </div>
                    </div>
                    <div className = "list__info">
                        <div className = "list__info-element_institution">
                            <p className = "list__info-label">Учебное заведение:</p>
                            {/* Обработчик для колледжа { this.getReturnNameColledge() } */}
                            <p className = "list__info-text">{props.colledge}</p>
                        </div>
                        <div className = "list__info-element_institution">
                            <p className = "list__info-label">Специальность:</p>
                            {/* Специальность { speciality } */}
                            <p className = "list__info-text">{props.speciality}</p>
                        </div>
                    </div>
                    <div className = "list__info">
                        <div className = "list__info-element">
                            <p className = "list__info-label">Дата практики:</p>
                            {/* Для сроков практики { practiesBegining.slice(0, 10) + " - " + practiesEnding.slice(0, 10) } */}
                            <p className = "list__info-text">{props.practiesBegining + " " + props.practiesEnding}</p>
                        </div>
                        <div className = "list__info-element">
                            <p className = "list__info-label">Направление деятельности:</p>
                            {/* Желаемое направление { practicArea } */}
                            <p className = "list__info-text">{props.practicArea}</p>
                        </div>
                    </div>
                </div>
                <div className = "list__buttons">
                    {props.buttons ?
                        props.buttons.map((item, index) => {
                            return (
                                <span className="list__buttons-our" key={index}>
                                    <i 
                                        className ={`fa ${item.icon}`}
                                        onClick={item.onChange ? () => item.onChange(props.id) : null}>
                                    </i>
                                    <label className="list__buttons-text">{item.label}</label>
                                </span>
                            );           
                    }) : null}
                </div>
            </div>
            {props.visibleBtnDelCard ? 
                <div className="btn-close">
                    <i 
                        className="fa fa-minus-circle"
                        onClick={props.setVisibleCardDeleteStudent ? props.setVisibleCardDeleteStudent : null}>
                    </i>
                </div>
            : null}
        </React.Fragment>
    );
};

export default LiteCardStudentChild;