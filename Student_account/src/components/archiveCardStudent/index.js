import React, {useState} from 'react';
import './style.scss';
       
import ModalCardProcess from '../modalCardProcess/index';
import StarRatings from 'react-star-ratings';
import noavatar from '../../images/noavatar.png';

const ArchiveCardStudent = (props) => {

    const [data, SetData] = useState(
        {
            name: props.dataCardStud.firstName ? props.dataCardStud.firstName : "",
            surname: props.dataCardStud.secondName ? props.dataCardStud.secondName : "",
            patronymic: props.dataCardStud.patronymic ? props.dataCardStud.patronymic : "",
            email: props.dataCardStud.email ? props.dataCardStud.email : "",
            phone: props.dataCardStud.phone ? props.dataCardStud.phone : "",
            colledge: props.dataCardStud.colledge ? props.dataCardStud.colledge : "",
            facul: props.dataCardStud.speciality ? props.dataCardStud.speciality : "",
            practicStart: props.dataCardStud.practiesBegining ? props.dataCardStud.practiesBegining : "",
            practicEnd: props.dataCardStud.practiesEnding ? props.dataCardStud.practiesEnding : "",
            practicArea: props.dataCardStud.practicArea ? props.dataCardStud.practicArea : "",
            competence: '',
            curator: '',
            rating: 0,
            file: '',
            comment: ''
        }
    );

    return (
        <React.Fragment>
            <div className="practic-card">
                <div className="practic-card__header">
                    <p className="practic-card__text">
                        Карточка студента
                    </p>
                    <div className="practic-card__tools">
                        <i className="fa fa-print"></i>
                        {/* <i className="fa fa-edit" onClick={() => SetEditCard(!editCard)}></i> */}
                        <i className="fa fa-download"></i>
                        <i className="fa fa-trash" onClick={props.deletedCardStudent ? props.deletedCardStudent : null}></i>
                        <i className="fa fa-times-circle" onClick={props.closeCardStud}></i>
                    </div>
                </div>
                <div className="practic-card-info">
                    <img className="practic-card-info__img" src={noavatar} alt="Иконка студента" />
                    <div className="practic-card-info__student">
                        <div className="practic-card-info__item">
                            <p className="practic-card-info__text">{data.name + " " + data.patronymic + " " + data.surname}</p>
                        </div>
                        <div className="practic-card-info__item">
                            <i className = "fa fa-envelope"></i>
                            <p className="practic-card-info__text">{data.email}</p>
                        </div>
                        <div className="practic-card-info__item">
                            <i className="fa fa-mobile card__contacts-mobile-icon"></i>
                            <p className="practic-card-info__text">{data.phone}</p>
                        </div>
                        <div className="practic-card-info__item">
                            <p className="practic-card-info__title">Учебное заведение:</p>
                            <p className="practic-card-info__text">{data.colledge}</p>
                        </div>
                        <div className="practic-card-info__item">
                            <p className="practic-card-info__title">Факультет, специальность:</p>
                            <p className="practic-card-info__text">{data.facul}</p>
                        </div>
                        <div className="practic-card-info__item">
                            <p className="practic-card-info__title">Сроки практики:</p>   
                            <p className="practic-card-info__text">{data.practicStart + "-" + data.practicEnd}</p>
                        </div>
                        <div className="practic-card-info__item">
                            <p className="practic-card-info__title practic-card-info__text_end">Направление деятельности:</p> 
                            <p className="practic-card-info__text">{data.practicArea}</p>
                        </div>
                    </div>
                    <div className="practic-card-info__curator">
                        <img className="practic-card-info__img" src={noavatar} alt="Иконка куратора" />
                        <p 
                            className="practic-card-info__appraisal"
                            disabled="disabled">
                            Оценить компетенции студента
                        </p>
                        <button
                            className="btn practic-card-info__btn"
                            disabled="disabled">
                            Назначить куратора
                        </button>
                    </div>
                </div>
                <div className="practic-card-info__evaluation">
                    <div className="practic-card-evaluation__item">
                        <p className="practic-card-evaluation__text">Общая оценка за практику</p>
                        <div className="practic-card-evaluation__rating">
                            <StarRatings
                                rating={data.rating}
                                starRatedColor="gold"
                                starHoverColor="blue"
                                // changeRating={(value) => setEditData("rating", value)}
                                numberOfStars={5}
                                name='rating'
                                isSelectable={false} />
                        </div>
                    </div>
                    <div className="practic-card-evaluation__item">
                        <p className="practic-card-evaluation__text">Отчет по практике</p>
                        <div 
                            className="practic-card-evaluation__file"
                            disabled="disabled" >
                            <i className="fa fa-folder card__download-doc__icon"></i>
                            <p className="practic-card-evaluation__description">Прикрепить файл</p>
                            <input 
                                className="practic-card-evaluation__input" 
                                type="file"
                                disabled="disabled" />
                        </div>
                    </div>
                    <div className="practic-card-evaluation__comment">
                        <textarea 
                            value={data.comment}
                            name="comment"
                            className="practic-card-evaluation__textarea"
                            placeholder="Комментарий"
                            disabled="disabled" />
                    </div>
                </div>
            </div> 
        </React.Fragment>
    );
};

export default ArchiveCardStudent;