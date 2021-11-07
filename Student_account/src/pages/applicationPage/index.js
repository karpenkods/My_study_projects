import React, {useState, useEffect} from 'react';
import './style.scss';

import Filters from '../../components/filters/index';
import LiteCardStudent from '../../components/liteCardStudent/index';
import ToolBar from '../../components/toolbar/index';
import Pagination from "react-js-pagination";
import Layout from '../../Layout';
import SearchBar from '../../components/searchBar/index';
import { connect } from 'react-redux';
import ModalCardProcess from '../../components/modalCardProcess/index';
// Получение списка студентов 
import {getStudentsListRequest} from '../../store/student/actions';

const ApplicationPage = (props) => {
    
    // Название страницы
    const [namePage, SetNamePage] = useState('applicationPage');
    // Состояние фильтра для даты
    const [stateSortDate, SetStateSortDate] = useState(false);
    // Состояние фильтра для имени
    const [stateSortName, SetStateSortName] = useState(false);
    // Активная страница
    const [activePage, SetStateActivePage] = useState(1);
    // Видимость формы добавления студента
    const [visibleAddForm, SetVisibleAddForm] = useState(false);
    // Видимость кнопки удаления студента
    const [visibleBtnDelCard, SetVisibleBtnDelCard] = useState(false);
    // Видимость кнопки очищения поиска
    const [visibleBtnResetSearch, SetVisibleBtnResetSearch] = useState(false);
    // Сохранение id студента
    const [idStudent, SetIdStudent] = useState(null);
    // Видисость модальной карточки смены категории
    const [visibleModalCardChangeCategory, SetVisibleModalCardChangeCategory] = useState(false);
    // Видисость модалки, что студен принят и ему отправлено уведомление
    const [visibleModalCardPositive, SetVisibleModalCardPositive] = useState(false);
    // Видисость модалки отклонения
    const [visibleModalCardNegative, SetVisibleModalCardNegative] = useState(false);
    // Видисость модалки, что заяка студента отклонена
    const [visibleModalCardNegativePractic, SetVisibleModalCardNegativePractic] = useState(false);
    // Данные поиска
    const [data, SetData] = useState(
        {
            college: '',
            fullName: '',
            directionName: '',
            startDate: '',
            endDate: ''            
        }
    );

    // Список студентов
    const [studentList, SetStudentList] = useState([]);

    useEffect(() => {
        props.getStudentsListRequest();
    }, []);

    useEffect(() => {
        props.students ? SetStudentList(props.students) : SetStudentList([]);
    }, [props.students]);

    // Сортировать по дате
    const setSortDate = () => {
        SetStateSortDate(!stateSortDate);
    };

    // Сортировать по имени
    const setSortName = () => {
        SetStateSortName(!stateSortName);
    };

    // Изменение старницы Pagination
    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        SetStateActivePage(pageNumber);
    };

    // Открыть/закрыть форму добавления студентов
    const setVisibleAddForm = (value) => {
        SetVisibleAddForm(value);
    };

    // Открыть/закрыть кнопку удаления на карточке студента
    const setVisibleBtnDelCard = () => {
        SetVisibleBtnDelCard(!visibleBtnDelCard);
    };

    // Функция обновления массива data
    const setCreateNewObj = (name, value) => {
        let newObj = {...data};
        newObj[name] = value;

        return newObj;
    };

    // Изменение данных поиска
    const setEditDropDate = (name, value) => {
        SetData(setCreateNewObj(name, value));

        if (data.college.length === 0 && data.fullName.length === 0 && data.directionName.length === 0 &&
            data.startDate.length === 0 && data.endDate.length === 0) {

            SetVisibleBtnResetSearch(false);
        } else SetVisibleBtnResetSearch(true); 
    };

    // Изменение данных поиска для даты
    const setEditRangeDate = (start, end) => {
        let newObj = {...data};
        newObj["startDate"] = start;
        newObj["endDate"] = end;

        if (start.length === 0 && end.length === 0) {
            SetVisibleBtnResetSearch(false);
        } else SetVisibleBtnResetSearch(true);

        SetData(newObj);
    };

    // Начать поиск
    const setSearchStudents = () => {
        console.log(data);
    };

    // Очистить поиск
    const setResetSearch = () => {
        SetData({
            college: '',
            fullName: '',
            directionName: '',
            startDate: {},
            endDate: {}    
        });

        SetVisibleBtnResetSearch(false);
    };

    // Открыть модалку для перемещения студента в другую категорию
    const setOpenModalChangeCategory = (id) => {
        SetIdStudent(id);
        SetVisibleModalCardChangeCategory(true);
    };

    // Принять студента на практику
    const setMoveInPractic = () => {
        // Отправить данные по Api
        SetVisibleModalCardChangeCategory(false);
        SetVisibleModalCardPositive(true);
    };

    // Открыть модалку для отмены принятия студента на практику
    const setOpenModalNegative = (id) => {
        SetIdStudent(id);

        SetVisibleModalCardNegative(true);
    };

    // Отклонить заявку из-за нехватки мест
    const setNoPlaces = () => {
        // Отправить по Api
        console.log(idStudent);
        SetVisibleModalCardNegative(false);
        SetVisibleModalCardNegativePractic(true);
    };

    // Отклонить из-за отсутствия специальности
    const setNoPlacesSpecial = () => {
        // Отправить по Api
        console.log(idStudent);
        SetVisibleModalCardNegative(false);
        SetVisibleModalCardNegativePractic(true);
    };


    return(
        <Layout 
            loginUser={props.loginUser}
            setOutInSistem={props.setOutInSistem} >
            <div className="application-page">
                <SearchBar
                    college="college"
                    fullName="fullName"
                    directionName="directionName"
                    fullNameVal={data.fullName}
                    directionVal={data.directionName}
                    collegeVal={data.college}
                    dateStart={data.startDate}
                    dateEnd={data.endDate}
                    placeholderFullName="ФИО"
                    placeholderDirection="Направление"
                    placeholderCollege="Учебное заведение"
                    placeholderDate="Дата практики"
                    textBtn="Найти"
                    onChangeDropData={setEditDropDate}
                    onChangeDate={setEditRangeDate}
                    searchStud={setSearchStudents}
                    visibleResetBtn={visibleBtnResetSearch}
                    resetSearch={setResetSearch} />
                <div className="application-page__tools">
                    <Filters 
                        text={'Сортировать: '}
                        valueBtnFirst={'Дата'}
                        valueBtnLast={'Имя'}
                        stateArrowDate={stateSortDate} 
                        stateArrowName={stateSortName}
                        onChangeSortDate={setSortDate}
                        onChangeSortName={setSortName} />
                    <ToolBar 
                        onClickAdd={() => setVisibleAddForm(true)}
                        onClickDel={setVisibleBtnDelCard} />
                </div>
                <div className="application-page__cards">
                    <LiteCardStudent 
                        buttons={[{icon: "fa-check-circle", label: 'Принять', onChange: setOpenModalChangeCategory}, {icon: "fa-ban", label: 'Отклонить', onChange: setOpenModalNegative}]}
                        visibleAddForm={visibleAddForm}
                        closeAddFormStudent={setVisibleAddForm}
                        visibleBtnDelCard={visibleBtnDelCard}
                        studentList={studentList}
                        namePage={namePage} />
                </div>
                <div className="application-page__pagination">
                    <Pagination 
                        innerClass="pagination page-numbers"
                        itemClass="page-item"
                        linkClass="page-link"
                        pageRangeDisplayed={5}
                        itemsCountPerPage={10}
                        activePage={activePage}
                        // Должен быть массив с данными
                        totalItemsCount={10}
                        onChange={handlePageChange}/>
                </div>
                {/* Принять заявку */}
                <ModalCardProcess
                    visible={visibleModalCardChangeCategory}
                    modalClassName="modal-card-container"
                    noBtnClose={false}
                    onClose={() => SetVisibleModalCardChangeCategory(false)}
                    title="Принять заявку"
                    noFooter={false}
                    allBtns={[
                        {text: "Отмена", color: "gray", onClick: () => SetVisibleModalCardChangeCategory(false)},
                        {text: "Да", color: "red", onClick: setMoveInPractic}]        
                    } >
                        <p className="modal-card-container__text">Вы действительно хотите принять заявку?</p>
                </ModalCardProcess>
                {/* Заявка принята */}
                <ModalCardProcess
                    visible={visibleModalCardPositive}
                    modalClassName="modal-card-container"
                    noBtnClose={false}
                    onClose={() => SetVisibleModalCardPositive(false)}
                    title="Заявка успешно принята"
                    noFooter={false}
                    allBtns={[{text: "Ок", color: "red", actionButtonsPosition: 'ALIGN-CENTER', onClick: () => SetVisibleModalCardPositive(false)}]        
                    } >
                        <p className="modal-card-container__text">Студенту отправлено уведомление</p>
                </ModalCardProcess>
                {/* Выбор причины для отклонения заявки */}
                <ModalCardProcess
                    visible={visibleModalCardNegative}
                    modalClassName="modal-card-container"
                    noBtnClose={false}
                    onClose={() => SetVisibleModalCardNegative(false)}
                    title="Отклонить заявку"
                    noFooter={false}
                    allBtns={[
                        {text: "Нет мест", color: "pink", onClick: setNoPlaces},
                        {text: "Специальность", color: "pink", onClick: setNoPlacesSpecial}]        
                    } >
                        <p className="modal-card-container__text">Выберите причину отклонения:</p>
                </ModalCardProcess>
                {/* Заявка отклонена */}
                <ModalCardProcess
                    visible={visibleModalCardNegativePractic}
                    modalClassName="modal-card-container"
                    noBtnClose={false}
                    onClose={() => SetVisibleModalCardNegativePractic(false)}
                    title="Заявка отклонена"
                    noFooter={false}
                    allBtns={[
                        {text: "Ок", color: "red", actionButtonsPosition: 'ALIGN-CENTER', onClick: () => SetVisibleModalCardNegativePractic(false)}]        
                    } >
                        <p className="modal-card-container__text">Студенту отправлено уведомление</p>
                </ModalCardProcess>
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

export default connect(mapStateToProps, mapDispatchToProps())(ApplicationPage);