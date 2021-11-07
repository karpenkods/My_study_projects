import React, {useState, useEffect} from 'react';
import './style.scss';

// import AppHeader from '../../components/appHeader/index';
// import Menu from '../../components/menu/index';
import Filters from '../../components/filters/index';
import LiteCardStudent from '../../components/liteCardStudent/index';
import ToolBar from '../../components/toolbar/index';
import Pagination from "react-js-pagination";
import Layout from '../../Layout';
import SearchBar from '../../components/searchBar/index';

const AchivePage = (props) => {

    // Название страницы
    const [namePage, SetNamePage] = useState('achivePage');
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
    const setEditDate = (e) => {
        SetData(setCreateNewObj([e.target.name], e.target.value));

        if (e.target.value.length === 0) {
            SetVisibleBtnResetSearch(false);
        } else SetVisibleBtnResetSearch(true); 
    };

    // Изменение данных поиска для выпадающего списка
    const setEditDropDate = (name, value) => {
        SetData(setCreateNewObj(name, value));

        if (value.length === 0) {
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
            startDate: '',
            endDate: ''    
        });

        SetVisibleBtnResetSearch(false);
    };

    return (
        <Layout 
            loginUser={props.loginUser}
            setOutInSistem={props.setOutInSistem} >
            <div className="archive-page">
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
                    onChangeData={setEditDate}
                    onChangeDropData={setEditDropDate}
                    onChangeDate={setEditRangeDate}
                    searchStud={setSearchStudents}
                    visibleResetBtn={visibleBtnResetSearch}
                    resetSearch={setResetSearch} />
                <div className="archive-page__tools">
                    <Filters 
                        text={'Сортировать: '}
                        valueBtnFirst={'Дата'}
                        valueBtnLast={'Имя'}
                        stateArrowDate={stateSortDate} 
                        stateArrowName={stateSortName}
                        onChangeSortDate={setSortDate}
                        onChangeSortName={setSortName}
                        />
                    <ToolBar 
                        onClickAdd={() => setVisibleAddForm(true)}
                        onClickDel={setVisibleBtnDelCard} />
                </div>
                <div className="archive-page__cards">
                    <LiteCardStudent 
                        visibleAddForm={visibleAddForm}
                        closeAddFormStudent={setVisibleAddForm}
                        visibleBtnDelCard={visibleBtnDelCard}
                        namePage={namePage} />
                </div>
                <div className="archive-page__pagination">
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
            </div>
        </Layout>
    );
};

export default AchivePage;