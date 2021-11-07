import React, {useState} from 'react';
import './style.scss';

import ModalCardProcess from '../modalCardProcess/index';
import StarRatings from 'react-star-ratings';
import InputMask from 'react-input-mask';
import noavatar from '../../images/noavatar.png';
import MyInput from '../myInput/index';
import DropDownList from '../dropDownList/index';
import RatingCardStudent from '../ratingTableStudent/index';
import CardCurator from '../cardCurator/index';
import { arrColledges, directions } from '../../utils/constanst';

const PracticCardStudent = (props) => {

    // Разрешить/запретить редактирование
    const [editCard, SetEditCard] = useState(false);
    // Видимость карточки выбора
    const [visibleModalChoice, SetvisibleModalChoice] = useState(false);
    // Видимость карточки уведомления сохранений
    const [visibleModalNotification, SetvisibleModalNotification] = useState(false);
    // Видимость таблицы рейтинга студента
    const [visibleTableRating, SetvisibleTableRating] = useState(false);
    // Видимость карточки куратора
    const [visibleCardCurator, SetVisibleCardCurator] = useState(false);
    // Данные карточки студента
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
            comment: '',
            dataCardRating: props.dataCardStud.infoLearning ? props.dataCardStud.infoLearning : ""
        }
    );

    // Изменения data
    const editData = (name, value) => {
        let newObj = {...data};
        newObj[name] = value;

        return newObj;
    };

    // Изменение даты в рейтинговой таблице
    const setEditDateRatingTable = (value) => {
        let newObj = {...data};
        newObj.dataCardRating['date'] = value;

        SetData(newObj);
    };

    // Изменение данных о студенте
    const setEditData = (name, value) => {
        SetData(editData(name, value));
    };

    // Обработка изображений
    const getReturnImage = () => {
        let photo = this.props.dataList.studentModalCardData.photo === null ? "" : this.props.dataList.studentModalCardData.photo;
        photo = `${photo}`;
        let photoFoo = noavatar;

        if (photo) {
            photoFoo = `data:image/png;base64,${photo}`
        }

        return photoFoo;
    };

    // Отмена сохранения изменений
    const setСancelEdit = () => {
        SetData({
            name: '',
            surname: '',
            patronymic: '',
            email: '',
            phone: '',
            colledge: '',
            facul: '',
            practicStart: '',
            practicEnd: '',
            practicArea: ''
        });

        SetEditCard(false);
        // Добавить закрытие карточки
    };

    // Закрыть карточку студента
    const setCloseCardStud = () => {
        SetData({
            name: '',
            surname: '',
            patronymic: '',
            email: '',
            phone: '',
            colledge: '',
            facul: '',
            practicStart: '',
            practicEnd: '',
            practicArea: ''
        });

        SetEditCard(false);
        // Добавить закрытие карточки
        props.closeCardStud();
    }

    // Сохранить изменения
    const setSaveEdit = () => {
        SetvisibleModalChoice(false);
        SetEditCard(false);

        SetvisibleModalNotification(true);
        // Отправить data через api
        console.log(data);
    };

    // Закрыть окно подтверждения именений
    const setCloseModalNotification = () => {
        SetvisibleModalNotification(false);
    };

    return (
        <React.Fragment>
            <div className="practic-card">
                <div className="practic-card__header">
                    <p className="practic-card__text">
                        Карточка студента
                    </p>
                    <div className="practic-card__tools">
                        <i className="fa fa-print"></i>
                        <i className="fa fa-edit" onClick={() => SetEditCard(!editCard)}></i>
                        <i className="fa fa-download"></i>
                        <i className="fa fa-trash" onClick={props.deletedCardStudent ? props.deletedCardStudent : null}></i>
                        <i className="fa fa-times-circle" onClick={setCloseCardStud}></i>
                    </div>
                </div>
                <div className="practic-card-info">
                    <img className="practic-card-info__img" src={noavatar} alt="Иконка студента" />
                    <div className="practic-card-info__student">
                        <div className="practic-card-info__item">
                            {editCard === false ?
                                <p className="practic-card-info__text">{data.name + " " + data.patronymic + " " + data.surname}</p>
                            :
                                <label className="practic-card-info__label">
                                    <MyInput 
                                        className="card__student_input"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        onChange={(e) => setEditData("name", e.target.value)}/>
                                    <MyInput 
                                        className="card__student_input"
                                        type="text"
                                        name="patronymic"
                                        value={data.patronymic}
                                        onChange={(e) => setEditData("patronymic", e.target.value)}/>
                                    <MyInput 
                                        className="card__student_input"
                                        type="text"
                                        name="surname"
                                        value={data.surname}
                                        onChange={(e) => setEditData("surname", e.target.value)}/>
                                </label> }
                        </div>
                        <div className="practic-card-info__item">
                            <i className = "fa fa-envelope"></i>
                            {editCard === false ?
                                <p className="practic-card-info__text">{data.email}</p>
                            :
                                <label className="our-input">
                                    <MyInput 
                                        type="email"
                                        name="email"
                                        className="card__info-text_input"
                                        value={data.email}
                                        onChange={(e) => setEditData("email", e.target.value)}/>
                                </label> }
                        </div>
                        <div className="practic-card-info__item">
                            <i className="fa fa-mobile card__contacts-mobile-icon"></i>
                            {editCard === false ?
                                <p className="practic-card-info__text">{data.phone}</p>
                            : 
                                <label className="our-input">
                                    <InputMask
                                        mask="+7\ (999) 999-99-99" 
                                        maskChar=" "
                                        type="tel"  
                                        className="card__info-text_input"
                                        value={data.phone}
                                        name="phone"
                                        onChange={(e) => setEditData("phone", e.target.value)}/>
                                </label> }
                        </div>
                        <div className="practic-card-info__item">
                            <p className="practic-card-info__title">Учебное заведение:</p>
                            {editCard === false ?
                                <p className="practic-card-info__text">{data.colledge}</p>
                            :
                                <label className="our-input">
                                    <DropDownList 
                                        clsRightLabeled="light"
                                        type="text"
                                        className="card__info-text_input"
                                        value={data.colledge}
                                        options={arrColledges}
                                        name="colledge"
                                        onChange={(name, value) => setEditData(name, value)}/>
                                </label> }
                        </div>
                        <div className="practic-card-info__item">
                            <p className="practic-card-info__title">Факультет, специальность:</p>
                            {editCard === false ?
                                <p className="practic-card-info__text">{data.facul}</p>
                            :
                                <label className="our-input">
                                    <MyInput 
                                        type="text"
                                        className="card__info-text_input"
                                        value={data.facul}
                                        name="facul"
                                        onChange={(e) => setEditData("facul", e.target.value)}/>
                                </label> }
                        </div>
                        <div className="practic-card-info__item">
                            <p className="practic-card-info__title">Сроки практики:</p>   
                            {editCard === false ?
                                <p className="practic-card-info__text">{data.practicStart + "-" + data.practicEnd}</p>
                            :
                                <label className="our-input">
                                    <MyInput 
                                        type="text"
                                        className="card__info-text_input"
                                        value={data.practicStart}
                                        name="practicStart"
                                        onChange={(e) => setEditData("practicStart", e.target.value)}/>
                                    <label className="label">-</label>
                                    <MyInput 
                                        type="text"
                                        className="card__info-text_input bt"
                                        value={data.practicEnd}
                                        name="practicEnd"
                                        onChange={(e) => setEditData("practicEnd", e.target.value)}/>
                                </label> }
                        </div>
                        <div className="practic-card-info__item">
                            <p className="practic-card-info__title practic-card-info__text_end">Направление деятельности:</p> 
                            {editCard === false ?
                                <p className="practic-card-info__text">{data.practicArea}</p>
                            :
                                <label className="our-input">
                                    <DropDownList 
                                        clsRightLabeled="light"
                                        type="text"
                                        className="card__info-text_input"
                                        value={data.practicArea}
                                        options={directions}
                                        name="practicArea"
                                        onChange={(name, value) => setEditData(name, value)}/>
                                </label> }  
                        </div>
                    </div>
                    <div className="practic-card-info__curator">
                        <img className="practic-card-info__img" src={noavatar} alt="Иконка куратора" />
                        <p 
                            className="practic-card-info__appraisal"
                            disabled={editCard === false ? "disabled" : ''}
                            onClick={() => SetvisibleTableRating(true)} >
                            Оценить компетенции студента
                        </p>
                        {data.curator.length === 0 ? 
                            <button
                                className="btn practic-card-info__btn"
                                disabled={editCard === false ? "disabled" : ''}
                                onClick={() => SetVisibleCardCurator(true)} >
                                Назначить куратора
                            </button>
                        :
                            <p className="practic-card-info__curator-name">
                                {data.curator}
                            </p> 
                        }
                    </div>
                </div>
                <div className="practic-card-info__evaluation">
                    <div className="practic-card-evaluation__item">
                        <p className="practic-card-evaluation__text">Общая оценка за практику</p>
                        <div className="practic-card-evaluation__rating">
                            <StarRatings
                                rating={
                                    Math.ceil((
                                        Number(data.dataCardRating.learnability_appraisal) + 
                                        Number(data.dataCardRating.quality_appraisal) +  
                                        Number(data.dataCardRating.responsibility_appraisal) + 
                                        Number(data.dataCardRating.initiative_appraisal) +
                                        Number(data.dataCardRating.conflicts_appraisal) + 
                                        Number(data.dataCardRating.relationship_appraisal) + 
                                        Number(data.dataCardRating.interest_appraisal)) / 7)}
                                starRatedColor="gold"
                                starHoverColor="blue"
                                changeRating={(value) => setEditData("rating", value)}
                                numberOfStars={5}
                                name='rating'
                                isSelectable={editCard === false ? false : true} />
                        </div>
                    </div>
                    <div className="practic-card-evaluation__item">
                        <p className="practic-card-evaluation__text">Отчет по практике</p>
                        <div 
                            className="practic-card-evaluation__file"
                            disabled={editCard === false ? "disabled" : ''} >
                            <i className="fa fa-folder card__download-doc__icon"></i>
                            <p className="practic-card-evaluation__description">Прикрепить файл</p>
                            <input 
                                className="practic-card-evaluation__input" 
                                type="file"
                                disabled={editCard === false ? "disabled" : ''} />
                        </div>
                    </div>
                    <div className="practic-card-evaluation__comment">
                        <textarea 
                            value={data.comment}
                            name="comment"
                            onChange={(e) => setEditData("comment", e.target.value)}
                            className="practic-card-evaluation__textarea"
                            placeholder="Комментарий"
                            disabled={editCard === false ? "disabled" : ''} />
                    </div>
                </div>
                {editCard === true ?
                    <div className="practic-card__our-btn">
                        <button className="btn practic-card__btn" onClick={setСancelEdit}>Отмена</button>
                        <button className="btn practic-card__btn" onClick={() => SetvisibleModalChoice(true)}>Сохранить</button>
                    </div> : null }
            </div> 
            {/* Модальное окно для подтверждения сохранения изменений */}
            <ModalCardProcess
                visible={visibleModalChoice}
                noBtnClose={false}
                onClose={() => SetvisibleModalChoice(false)}
                title="Внесение изменений"
                noFooter={false}
                modalClassName="modal-card-container"
                allBtns={[
                    {text: "Отмена", color: "gray", onClick: () => SetvisibleModalChoice(false)},
                    {text: "Да", color: "red", onClick: setSaveEdit}
                ]} >
                    <p className="modal-card-container__text">Сохранить изменения?</p>
            </ModalCardProcess>
            {/* Модальное окно после сохранения изменений */}
            <ModalCardProcess
                visible={visibleModalNotification}
                onClose={() => SetvisibleModalNotification(false)}
                noBtnClose={false}
                title="Изменения сохранены"
                noFooter={false}
                modalClassName="modal-card-container"
                allBtns={[
                    {text: "Ок", color: "red", actionButtonsPosition: 'ALIGN-CENTER', onClick: setCloseModalNotification}
                ]} />
            {/* Рейтинговая таблица */}
            <ModalCardProcess 
                visible={visibleTableRating}
                onClose={null}
                noBtnClose={true}
                noFooter={true}>
                    <RatingCardStudent 
                        closeCardRating={() => SetvisibleTableRating(false)}
                        dataCard={data.dataCardRating}
                        intials={props.dataCardStud ? props.dataCardStud : ""}
                        setEditData={setEditData}
                        onChangeDateTable={setEditDateRatingTable} />
            </ModalCardProcess> 
            {/* Карточка куратора */}
            <ModalCardProcess 
                visible={visibleCardCurator}
                modalClassName="card-curator__card-process"
                onClose={null}
                noBtnClose={true}
                noFooter={true}>
                    <CardCurator 
                        onCloseCard={() => SetVisibleCardCurator(false)}
                        onChangeCurator={setEditData} />
            </ModalCardProcess> 
        </React.Fragment>
    );
};

export default PracticCardStudent;