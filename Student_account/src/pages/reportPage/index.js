import React, {useState, useEffect} from 'react';
import './style.scss';

import Layout from '../../Layout';
import DropDownList from '../../components/dropDownList/index';
import Datetime from 'react-date-picker';
import { dataCardsStudentsChild, arrColledges, directions, Curators, Special } from '../../utils/constanst';
import { connect } from 'react-redux';
import {getStudentsListRequest} from '../../store/student/actions';

const ReportPage = (props) => {

    // Данные студента
    const [data, SetData] = useState(
        {
            nameStudent: '',
            colledge: '',
            special: '',
            practic: '',
            curator: '',
            periodStart: '',
            periodEnd: ''
        }
    );
    // Видимость кнопки очистки данных
    const [visibleBtnReset, SetVisibleBtnReset] = useState(false);

    // Список студентов
    const [studentList, SetStudentList] = useState([]);

    useEffect(() => {
        props.getStudentsListRequest();
    }, []);

    useEffect(() => {
        props.students ? SetStudentList(props.students) : SetStudentList([]);
    }, [props.students]);

    // Изменение Date
    const editData = (name, value) => {
        let newObj = {...data};
        newObj[name] = value;

        return newObj;
    };

    // Изменение данных студента
    const setEditData = (name, value) => {
        SetData(editData(name, value));

        if (data.nameStudent.length > 0 || data.colledge.length > 0 || data.special.length > 0 ||
            data.practic.length > 0 || data.curator.length > 0 || data.periodStart !== null ||
            data.periodEnd !== null) {
                SetVisibleBtnReset(true);
            } else {
                SetVisibleBtnReset(false);
            }
    };

    // Обработка ФИО студента
    const setInitialsStud = () => {
        let initials = [];

        dataCardsStudentsChild.forEach(item => {
            initials.push(
                { label: item.secondName + " " + item.firstName + " " + item.patronymic }
            );
        });

        return initials;
    };
    
    // Сброс данных 
    const setResetData = () => {
        SetData({
            nameStudent: '',
            colledge: '',
            special: '',
            practic: '',
            curator: '',
            periodStart: '',
            periodEnd: ''
        });

        SetVisibleBtnReset(false);
    };

    return(
        <Layout
            loginUser={props.loginUser}
            setOutInSistem={props.setOutInSistem} >
            <div className="report-page">
                <div className="report-page__inner">
                    <h3 className="report-page__title">
                        Фильтры
                    </h3>
                    <div className="report-page__our">
                        {visibleBtnReset === true ? 
                            <div className="report-page__reset">
                                <i 
                                    className="fa fa-undo"
                                    onClick={setResetData} ></i>
                            </div> : null }
                        <div className="report-page__our-container">
                            <div className="report-page__our-left">
                                <div className="report-page__item">
                                    <p className="report-page__item-text">Студент:</p>
                                    <DropDownList
                                        name="nameStudent"
                                        value={data.nameStudent}
                                        options={setInitialsStud()}
                                        onChange={(name, value) => setEditData(name, value)}
                                        clsRightLabeled="light" />
                                </div>
                                <div className="report-page__item">
                                    <p className="report-page__item-text">Учебное заведение:</p>
                                    <DropDownList
                                        name="colledge"
                                        value={data.colledge}
                                        options={arrColledges}
                                        onChange={(name, value) => setEditData(name, value)}
                                        clsRightLabeled="light" />
                                </div>
                                <div className="report-page__item">
                                    <p className="report-page__item-text">Специальность:</p>
                                    <DropDownList 
                                        name="special"
                                        value={data.special}
                                        options={Special}
                                        onChange={(name, value) => setEditData(name, value)}
                                        clsRightLabeled="light" />
                                </div>
                            </div>
                            <div className="report-page__our-right">
                                <div className="report-page__item">
                                    <p className="report-page__item-text">Направление практики:</p>
                                    <DropDownList 
                                        name="practic"  
                                        value={data.practic}
                                        options={directions}
                                        onChange={(name, value) => setEditData(name, value)}
                                        clsRightLabeled="light" />
                                </div>
                                <div className="report-page__item">
                                    <p className="report-page__item-text report-page__item-text_last">Куратор:</p>
                                    <DropDownList
                                        name="curator"
                                        value={data.curator}
                                        options={Curators}
                                        onChange={(name, value) => setEditData(name, value)}
                                        clsRightLabeled="light" />
                                </div>
                            </div>
                        </div>
                        <div className="report-page__period">
                            <span className="report-page__span">Период с:</span> 
                            <Datetime 
                                value={data.periodStart}
                                onChange={(value) => setEditData("periodStart", value)} />
                            <span className="report-page__span">по</span> 
                            <Datetime 
                                value={data.periodEnd}
                                onChange={(value) => setEditData("periodEnd", value)} />
                            <button className="btn report-page__btn report-page__btn_left">
                                Сформировать
                            </button>
                            <button className="btn report-page__btn report-page__btn_right">
                                Экспорт в Excel
                            </button>
                        </div>
                    </div>
                </div>
                <div className="report-page__offer">
                    <div className="table">
                        <div className="table__item">
                            <p className="table__text">
                                №
                            </p>
                            <p className="table__text">
                                Студент
                            </p>
                            <p className="table__text">
                                Учебное заведение
                            </p>
                            <p className="table__text">
                                Специальность
                            </p>
                            <p className="table__text">
                                Направление практики
                            </p>
                            <p className="table__text">
                                Куратор
                            </p>
                        </div>
                        {/* Обработка сформированных данных */}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

const mapStateToProps = (state) => {
    return {
        students: state.students.studentsList
    }
};

const mapDispatchToProps = (dispatch => {
    return {
        getStudentsListRequest
    }
});

export default connect(mapStateToProps, mapDispatchToProps())(ReportPage);