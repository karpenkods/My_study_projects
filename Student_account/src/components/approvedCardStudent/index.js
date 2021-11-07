import React, {useState} from 'react';
import './style.scss';

import noavatar from "../../images/noavatar.png";
import InputMask from 'react-input-mask';
import MyInput from "../myInput/index";
import DropDownList from "../dropDownList";
import ModalCardProcess from '../modalCardProcess/index';
import CardCurator from '../cardCurator/index';
import { arrColledges, directions } from '../../utils/constanst';

const ApprovedCardStudent = (props) => {

    // Разрешить/запретить редактирование
    const [editCard, SetEditCard] = useState(false);
    // Видимость карточки выбора
    const [visibleModalChoice, SetvisibleModalChoice] = useState(false);
    // Видимость карточки уведомления сохранений
    const [visibleModalNotification, SetvisibleModalNotification] = useState(false);
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
            curator: ''
        }
    );

    // Изменения data
    const editData = (name, value) => {
        let newObj = {...data};
        newObj[name] = value;

        return newObj;
    };

    // Изменение данных о студенте
    const setEditData = (name, value) => {
        SetData(editData(name, value));

        console.log(value);
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
    };

    // Закрыть окно подтверждения именений
    const setCloseModalNotification = () => {
        SetvisibleModalNotification(false);
        // Закрыть карточку студента
    };

    return (
        <React.Fragment>
            <div className="container-approved-card">
                <div className="student-card">
                    <div className="card__header">
                        <p className="card__label">Карточка студента</p>                   
                        <div className="card__controls">
                            <i className="fa fa-print"></i>
                            <i className="fa fa-edit" onClick={() => SetEditCard(!editCard)}></i>
                            <i className="fa fa-download"></i>
                            <i className="fa fa-trash" onClick={props.deletedCardStudent ? props.deletedCardStudent : null}></i>
                            <i className="fa fa-times-circle" onClick={setCloseCardStud}></i>
                        </div>
                    </div>
                    <div className="card__student">
                        <img src={noavatar} alt="Фотография студента" className="card__profile-pic" />
                        <div className="card__student-info">
                            {editCard === false ?
                                <p className="card__student-name">{data.name + " " + data.patronymic + " " + data.surname}</p>
                            :
                                <label className="card__student_label">
                                    <MyInput 
                                        className="card__student_input"
                                        type="text"
                                        value={data.name}
                                        name="name"
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
                            <div className="card__contacts">
                                <i className="fa fa-envelope"></i>
                                {editCard === false ?
                                    <p className="card__student-contact">{data.email}</p>
                                :
                                    <label className="our-input">
                                        <MyInput 
                                            type="email"
                                            className="card__info-text_input"
                                            value={data.email}
                                            name="email"
                                            onChange={(e) => setEditData("email", e.target.value)}/>
                                    </label> }
                            </div>
                            <div className="card__contacts">
                                <i className="fa fa-mobile card__contacts-mobile-icon"></i>
                                {editCard === false ?
                                    <p className="card__student-contact">{data.phone}</p>
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
                            <div className="card__contacts">
                                <p className="card__info-label">Учебное заведение:</p>
                                {editCard === false ?
                                    <p className="card__info-text">{data.colledge}</p>
                                :
                                    <label className="our-input">
                                        <DropDownList 
                                            list="institutionApprovedCard"
                                            type="text"
                                            className="card__info-text_input"
                                            clsRightLabeled="light"
                                            value={data.colledge}
                                            options={arrColledges}
                                            name="colledge"
                                            onChange={(name, value) => setEditData(name, value)}/>
                                    </label> }
                            </div>
                            <div className="card__contacts">
                                <p className="card__info-label">Факультет, специальность:</p>
                                {editCard === false ?
                                    <p className="card__info-text">{data.facul}</p>
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
                            <div className="card__contacts">
                                <p className="card__info-label">Сроки практики:</p>
                                {editCard === false ?
                                    <p className="card__info-text">{data.practicStart + "-" + data.practicEnd}</p>
                                :
                                    <label className="our-input">
                                        <MyInput 
                                            type="text"
                                            className="card__info-text_input card__info-text_input-date"
                                            value={data.practicStart}
                                            name="practicStart"
                                            onChange={(e) => setEditData("practicStart", e.target.value)}/>
                                        <label className="label">-</label>
                                        <MyInput 
                                            type="text"
                                            className="card__info-text_input bt card__info-text_input-date"
                                            value={data.practicEnd}
                                            name="practicEnd"
                                            onChange={(e) => setEditData("practicEnd", e.target.value)}/>
                                    </label> }
                            </div>
                            <div className="card__contacts">
                                <p className="card__info-label">Направление деятельности:</p>
                                {editCard === false ?
                                    <p className="card__info-text">{data.practicArea}</p>
                                :
                                    <label className="our-input">
                                        <DropDownList 
                                            type="text"
                                            className="card__info-text_input"
                                            clsRightLabeled="light"
                                            value={data.practicArea}
                                            options={directions}
                                            name="practicArea"
                                            onChange={(name, value) => setEditData(name, value)}/>
                                    </label> }
                            </div>
                        </div>
                        <div className="card__curator">
                            <img src={noavatar} alt="Фотография куратора" className="card__profile-pic card__profile-pic_curator" />
                            {data.curator.length === 0 ? 
                                <button 
                                    className="btn card__curator__choose-button"
                                    onClick={() => SetVisibleCardCurator(true)}
                                    disabled={editCard === false ? "disabled" : ""} >
                                        Назначить куратора
                                </button>
                            :
                                <p className="practic-card-info__curator-name">
                                    {data.curator}
                                </p> }
                        </div>
                    </div>  
                    {editCard === true ?
                        <div className="student-card-approved__our-btn">
                            <button className="btn" onClick={setСancelEdit}>Отмена</button>
                            <button className="btn" onClick={() => SetvisibleModalChoice(true)}>Сохранить</button>
                        </div> : null }
                </div> 
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

export default ApprovedCardStudent;