import React, {useEffect, useState} from 'react';
import './style.scss';

import LiteCardStudentChild from './liteCardStudentChild/index';
import ModalCardProcess from '../modalCardProcess/index';
import MyAvatar from '../myAvatar/index';
import MyInput from '../myInput/index';
import DropDownList from '../dropDownList/index';
import Spinner from '../spinner/index';

import InputMask from 'react-input-mask';
import Datetime from 'react-date-picker';

import NewCardStudent from '../newCardStudent/index';
import ApprovedCardStudent from '../approvedCardStudent/index';
import ArchiveCardStudent from '../archiveCardStudent/index';
import PracticCardStudent from '../practicCardStudent/index';
import RejectCardStudent from '../rejectCardStudent/index';

// Импорт данных для отображения
import {dataCardsStudentsChild, arrColledges} from '../../utils/constanst';

const LiteCardStudent = (props) => {

    useEffect(() => {
        // Добавить подгрузку списка студентов
    });

    // Данные для добавления студента
    const [data, SetData] = useState(
        {
            imgSrc: '',
            surname: '',
            name: '',
            patronymic: '',
            colledge: '',
            specialty: '',
            practic: {},
            practicName: '',
            practicDateBegin: '',
            practicDateEnd: '',
            phone: '',
            email: ''
        }
    );

    console.log("Список студентов: ", props.studentList ? props.studentList : [])

    // id карточки студента
    const [idCardStud, SetIdCardStud] = useState('');
    // Видимость карточки подтверждения или отмены удаления студента
    const [visibleModalCardDelete, SetVisibleModalCardDelete] = useState(false);
    // Видимость карточки подтверждения или отмены удаления студента
    const [visibleModalCardDeleteCompleted, SetVisibleModalCardDeleteCompleted] = useState(false);
    // Видимомсь карточки студента
    const [visibleModalCardStud, SetVisibleModalCardStud] = useState(false);
    // Данные карточки студента
    const [dataCardStud, SetDataCardStud] = useState(null);

    // Изменение стейта 
    const editData = (name, value) => {
        let newObj = {...data};
        newObj[name] = value;

        return newObj;
    };

    // Изменение состояния объекта практики
    const editDataPractic = (name, value) => {
        let newObj = {...data};
        newObj.practic = {};
        newObj.practic[name] = value;

        return newObj;
    };

    // Измнение данных о студенте
    const setEditData = (name, value) => {
        SetData(editData(name, value));
    };

    // Заполнение практики студента
    const setEditPractic = (e) => {
        SetData(editDataPractic(e.target.name, e.target.checked));
    };

    // Добавление студента
    const setAddStudent = () => {
        console.log(data);

        props.closeAddFormStudent(false);
    };

    // Отмена добавления студента
    const setCancelingStudent = () => {
        SetData({
            imgSrc: '',
            surname: '',
            name: '',
            patronymic: '',
            colledge: '',
            specialty: '',
            practic: {},
            practicName: '',
            practicDateBegin: '',
            practicDateEnd: '',
            phone: '',
            email: ''
        });

        props.closeAddFormStudent(false);
    };

    // Вызов карточки удаления по клику на кнопку лайт карты
    const setVisibleCardDeleteStudent = (id) => {
        SetIdCardStud(id);
        SetVisibleModalCardDelete(true);
    };

    // Подтверждение удаления студента
    const setDeleteStud = () => {
        console.log(idCardStud);
        // Закрыть карточку удления или отмены
        SetVisibleModalCardDelete(false);
        // Открыть карточку подтверждения действия
        SetVisibleModalCardDeleteCompleted(true);
    };

    // Открыть карточку студента
    const setOpenCardStudent = (item) => {
        SetIdCardStud(item.id);
        SetDataCardStud(item);
        SetVisibleModalCardStud(true);
    };

    const CardsStudents = dataCardsStudentsChild.map((elem, index) => {
        return (
            <li className="list-element-block" key={index}>
                <LiteCardStudentChild 
                    buttons={props.buttons}
                    {...elem}
                    visibleBtnDelCard={props.visibleBtnDelCard}
                    setVisibleCardDeleteStudent={() => setVisibleCardDeleteStudent(elem.id)}
                    setOpenCardStudent={() => setOpenCardStudent(elem)} />
            </li>
        );
    });
    
    return (
        <React.Fragment>
            <ul className="list">
                {CardsStudents.length > 0 ? CardsStudents : <Spinner />}
            </ul>
            {/* карточка добавления студента */}
            <ModalCardProcess 
                visible={props.visibleAddForm}
                noBtnClose={true}
                noFooter={false}
                clsContainer={'__our-btn-add-form'}
                allBtns={[
                    {id: 1, text: 'Отмена', cls: '__btn-add-form', onClick: setCancelingStudent},
                    {id: 2, text: 'Добавить', cls: '__btn-add-form', onClick: setAddStudent}
                ]} >
                <form id="form-add" className="student-add-form">
                    <MyAvatar
                        name="imgSrc" 
                        src={data.imgSrc}
                        editProfileImage={(name, value) => setEditData(name, value)} />
                    <div className="student-container">
                        <div className="form-our">
                            <div className="from-our__input">
                                <MyInput 
                                    name="surname"
                                    type="text" 
                                    className="form-our__item" 
                                    value={data.surname}
                                    onChange={(e) => setEditData("surname", e.target.value)}
                                    placeholder="Фамилия*" />

                                <MyInput 
                                    name="name"
                                    type="text" 
                                    className="form-our__item" 
                                    value={data.name}
                                    onChange={(e) => setEditData("name", e.target.value)}
                                    placeholder="Имя*"  />

                                <MyInput 
                                    name="patronymic"
                                    type="text" 
                                    className="form-our__item" 
                                    value={data.patronymic}
                                    onChange={(e) => setEditData("patronymic", e.target.value)}
                                    placeholder="Отчество"  />

                                <DropDownList 
                                    name="colledge"
                                    className="form-our__item"
                                    clsRightLabeled={'middle'}
                                    value={data.colledge}
                                    onChange={(name, value) => setEditData(name, value)}
                                    placeholder="Учебное заведение*"
                                    options={arrColledges} />

                                <MyInput 
                                    name="specialty"
                                    type="text" 
                                    className="form-our__item form-our__last-child" 
                                    value={data.specialty}
                                    onChange={(e) => setEditData("specialty", e.target.value)}
                                    placeholder="Факультет, специальность*" />             
                                <h4 className="form-our__title">Направление практики*</h4>
                                <div className="form-our__checkbox">
                                    <input 
                                        type="checkbox" 
                                        onChange={setEditPractic}
                                        checked={data.practic.Backend}
                                        name="Backend"/> 
                                    <label htmlFor="check1">Backend</label>
                                </div>      
                                <div className="form-our__checkbox">
                                    <input 
                                        type="checkbox" 
                                        onChange={setEditPractic}
                                        checked={data.practic.Frontend}
                                        name="Frontend"/> 
                                    <label htmlFor="check2">Frontend</label>
                                </div>
                                <div className="form-our__checkbox">
                                    <input 
                                        type="checkbox" 
                                        onChange={setEditPractic}
                                        checked={data.practic.Testing}
                                        name="Testing"/> 
                                    <label htmlFor="check3">Тестирование</label>
                                    </div>
                                <div className="form-our__checkbox">
                                    <input 
                                        type="checkbox" 
                                        onChange={setEditPractic}
                                        checked={data.practic.System_analysis}
                                        name="System_analysis"/> 
                                    <label htmlFor="check4">Системный анализ</label>
                                </div>
                                <div className="form-our__checkbox">
                                    <input 
                                        type="checkbox" 
                                        onChange={setEditPractic}
                                        checked={data.practic.System_administration}
                                        name="System_administration" /> 
                                    <label htmlFor="check5">Системное администрирование</label>
                                </div>
                            </div>
                            <div className="form-practic">
                                <h4 className="form-practic__title">Предполагаемые сроки практики*</h4>
                                <div className="form-practic__date">
                                    <div className="form-practic__checkbox">
                                        <label className="form-practic__label" htmlFor="pract-begin">с</label>                                
                                        <Datetime 
                                            name="practicDateBegin" 
                                            className="form-practic__item"
                                            placeholderText="Выбрать..." 
                                            value={data.practicDateBegin}
                                            onChange={(value) => setEditData("practicDateBegin", value)} />                          
                                    </div>
                                    <div className="form-practic__checkbox">
                                        <label className="form-practic__label" htmlFor="pract-end">по</label>
                                        <Datetime  
                                            name="practicDateEnd"
                                            className="form-practic__item" 
                                            placeholderText="Выбрать..."
                                            value={data.practicDateEnd}
                                            onChange={(value) => setEditData("practicDateEnd", value)} />                          
                                    </div>
                                </div>
                                <div className="form-practic__date form-practic__communication">
                                    <h4 className="form-practic__title from-practic__title_bottom">Данные связи*</h4>
                                    <div className="form-practic__checkbox_bottom from-practic__checkbox_bottom-first">
                                        <i className="fa fa-mobile"></i>
                                        <InputMask 
                                            name="phone"
                                            type="tel"
                                            className="form-practic__item" 
                                            mask="+7\ (999) 999-99-99" 
                                            maskChar=" "
                                            value={data.phone}
                                            onChange={(e) => setEditData("phone", e.target.value)} />                         
                                    </div>
                                    <div className="form-practic__checkbox_bottom">  
                                        <i className="form-practic_bottom-i fa fa-envelope"></i>  
                                        <MyInput 
                                            name="email"
                                            type="email" 
                                            className="form-practic__item" 
                                            value={data.email}
                                            onChange={(e) => setEditData("email", e.target.value)} />                         
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="student-container__text">* - поля обязательного заполнения</p>
                    </div>   
                </form>
            </ModalCardProcess>
            {/* Карточка для подтверждения удаления или отмены */}
            <ModalCardProcess
                visible={visibleModalCardDelete}
                noBtnClose={false}
                modalClassName="modal-card-container"
                title="Удаление"
                noFooter={false}
                onClose={() => SetVisibleModalCardDelete(false)}
                allBtns={[
                    {text: "Отмена", color: "gray", onClick: () => SetVisibleModalCardDelete(false)},
                    {text: "Да", color: "red", onClick: setDeleteStud}
                ]} >
                    <p className="modal-card-container__text">
                        Вы действительно хотите удалить заявку?
                    </p>
            </ModalCardProcess>
            {/* Карточка уведомления о том, что студент удален */}
            <ModalCardProcess
                visible={visibleModalCardDeleteCompleted}
                noBtnClose={false}
                modalClassName="modal-card-container"
                title="Заявка успешно удалена"
                noFooter={false}
                onClose={() => SetVisibleModalCardDeleteCompleted(false)}
                allBtns={[
                    {text: "Ок", color: "red", actionButtonsPosition: 'ALIGN-CENTER', onClick: () => SetVisibleModalCardDeleteCompleted(false)}
                ]} />
            {/* Карточки студентов */}
            <ModalCardProcess
                visible={visibleModalCardStud}
                noBtnClose={true}
                noFooter={true}
                onClose={null} >
                    {
                        props.namePage === "applicationPage" ? 
                            <NewCardStudent 
                                closeCardStud={() => SetVisibleModalCardStud(false)}
                                dataCardStud={dataCardStud}
                                deletedCardStudent={() => SetVisibleModalCardDelete(true)} /> :
                        props.namePage === "achivePage" ? 
                            <ArchiveCardStudent 
                                closeCardStud={() => SetVisibleModalCardStud(false)}
                                dataCardStud={dataCardStud}
                                deletedCardStudent={() => SetVisibleModalCardDelete(true)} /> :
                        props.namePage === "approvedPage" ? 
                            <ApprovedCardStudent 
                                closeCardStud={() => SetVisibleModalCardStud(false)}
                                dataCardStud={dataCardStud}
                                deletedCardStudent={() => SetVisibleModalCardDelete(true)} /> :
                        props.namePage === "practicPage" ? 
                            <PracticCardStudent 
                                closeCardStud={() => SetVisibleModalCardStud(false)}
                                dataCardStud={dataCardStud}
                                deletedCardStudent={() => SetVisibleModalCardDelete(true)} /> :
                        props.namePage === "rejectPage" ? 
                            <RejectCardStudent 
                                closeCardStud={() => SetVisibleModalCardStud(false)}
                                dataCardStud={dataCardStud}
                                deletedCardStudent={() => SetVisibleModalCardDelete(true)} /> :
                        <p className="modal-card-container__text">Ошибка отображения карточки студента</p>
                    }
            </ModalCardProcess>
        </React.Fragment>
    );
};

export default LiteCardStudent;