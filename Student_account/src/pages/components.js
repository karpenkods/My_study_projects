import React, { useState } from 'react';
import './style.scss';

import DropDownList from '../components/dropDownList/index';
import MyInput from '../components/myInput/index';
import MyButton from '../components/myBtn/index';
import ModalCardProcess from '../components/modalCardProcess/index';
import MyAvatar from '../components/myAvatar/index';
import Menu from '../components/menu/index';
import SearchBar from '../components/searchBar/index';
import AppHeader from '../components/appHeader/index';
import Toolbar from '../components/toolbar/index';
import Filters from '../components/filters/index';
import LiteCardStudent from '../components/liteCardStudent/index';
import NewCardStudent from '../components/newCardStudent/index';
import RejectCardStudent from '../components/rejectCardStudent/index';
import PracticCardStudent from '../components/practicCardStudent/index';
import ApprovedCardStudetn from '../components/approvedCardStudent/index';
import ArchiveCardStudent from '../components/archiveCardStudent/index';
import RatingTableStudent from '../components/ratingTableStudent/index';
import CardCurator from '../components/cardCurator/index';
import Autorize from '../pages/autorize/index';

const Components = () => {

    // Видимость модальных карточек
    const [visibleCardActiv, SetActiv] = useState(false);
    const [visibleCardСonfirm, SetConfirm] = useState(false);
    // Состояние пути изображения студента
    const [src, SetSrc] = useState('');
    // Значение InputDrop
    const [valInputDrop, SetValInputDrop] = useState('');
    // Значение MyInput 
    const [valMyInput, SetValMyInput] = useState('');
    // Значение 1 InputDrop (SearchBar) 
    const [keywordInputDrop, SetKeywordInputDrop] = useState('');
    // Значение 2 InputDrop (SearchBar)
    const [directionInputDrop, SetDirectionInputDrop] = useState('');
    // Значение Input (SearchBar)
    const [valFullNameMyInput, SetFullNameMyInput] = useState('');
    // Начальное значение Даты RangePicker (SearchBar)
    const [valRangePickerStart, SetValRangePickerStart] = useState('');
    // Конечное значение Даты RangePicker (SearchBar)
    const [valRangePickerEnd, SetValRangePickerEnd] = useState('');
    // Состояние кнопки поиска
    // const [stateBtnSearch, SetBtnSearch] = useState('disabled');

    // Состояние фильтра для даты
    const [stateSortDate, SetStateSortDate] = useState(false);
    // Состояние фильтра для имени
    const [stateSortName, SetStateSortName] = useState(false);


    // Открыть/закрыть окно с выбором
    const setCardActiv = (value) => {
        SetActiv(value);
    }

    // Открыть/закрыть окно с подтверждения
    const setCardConfirm = (value) => {
        SetConfirm(value);
    }

    // Изменение дефолтного изображения студента 
    const editProfileImage = (src) => {
        SetSrc(src);
    }

    // Изменение значения InputDrop
    const setEditValueDropInput = (value) => {
        SetValInputDrop(value);
    }

    // Изменение значения MyImput
    const setEditValueMyInput = (e) => {
        SetValMyInput(e.target.value);
    }

    // Изменение значения keywordInputDrop
    const setEditKeywordInputDrop = (value) => {
        SetKeywordInputDrop(value);
    };
    
    // Изменение значения keywordInputDrop
    const setEditDirectionInputDrop = (value) => {
        SetDirectionInputDrop(value);
    };

    // Изменение значения valFullNameMyInput
    const setEditFullNameMyInput = (e) => {
        SetFullNameMyInput(e.target.value);
    };

    // Поиск студентов
    const setSearchStudents = () => {
        console.log(
            "Ключевое слово: " + keywordInputDrop,
            "ФИО: " + valFullNameMyInput,
            "Направление: " + directionInputDrop,
            "Начальная дата: " + valRangePickerStart,
            "Конечная дата: " + valRangePickerEnd
        );
    };

    // Изменение даты
    const setEditRangePicker = (startDate, endDate) => {
        SetValRangePickerStart(startDate);
        SetValRangePickerEnd(endDate);
    };

    // Сортировать по дате
    const setSortDate = () => {
        SetStateSortDate(!stateSortDate);
    };

    // Сортировать по имени
    const setSortName = () => {
        SetStateSortName(!stateSortName);
    };

    return (
        <div className="container-components">
            <div>
                <h3 className="title-item">Выпадающий список</h3>
                <DropDownList   
                    clsRightLabeled='light'
                    className={'components'}
                    name={'drop-list-stud'}
                    placeholder={'Drop list'}
                    type={'input'}
                    value={valInputDrop}
                    onChange={setEditValueDropInput}
                    options={[
                        {id: '1', label: '1'},
                        {id: '1', label: '2'},
                        {id: '1', label: '3'},
                    ]}  
                    />
            </div>
            <div>
                <h3 className="title-item">Input</h3>
                <MyInput 
                    value={valMyInput}
                    onChange={setEditValueMyInput}
                    placeholder={'Это input'}
                    readOnly={false}
                    disabled={false}
                    type={'text'}
                    />
            </div>
            <div>
                <h3 className="title-item">Кнопка</h3>
                <MyButton 
                    name={'my-btn'}
                    onClick={() => setCardActiv(true)}
                    oneOf={'secondary'}
                    disabled={''}
                    text={'Открыть модалку'} />
            </div>
            <div>
                <h3 className="title-item">Кнопка</h3>
                <MyButton 
                    name={'my-btn'}
                    oneOf={'default'}
                    disabled={''}
                    text={'Открыть модалку'} 
                    onClick={() => setCardConfirm(true)}/>
            </div>
            <div>
                <h3 className="title-item">Кнопка</h3>
                <MyButton 
                    name={'my-btn'}
                    oneOf={'primary'}
                    disabled={'disabled'}
                    text={'Кнопка'} />
            </div>
            <div style={{position: 'relative'}}>
                <ModalCardProcess
                    visible={visibleCardActiv}
                    onClose={() => setCardActiv(false)}
                    title={'Заголовок'}
                    allBtns={[
                        {text: "Ok", color: "red", onClick: () => setCardActiv(false)},
                        {text: "No", color: "gray", onClick: () => setCardActiv(false)}
                    ]}
                    modalClassName="modal-card-container"
                    noFooter={false}
                    noBtnClose={false}
                    autoHeight={true} >
                        <p className="modal-card-container__text">
                            Текст карточки
                        </p>   
                </ModalCardProcess>
            </div>
            <div style={{position: 'relative'}}> 
                <ModalCardProcess
                    visible={visibleCardСonfirm}
                    onClose={() => setCardConfirm(false)}
                    title={'Заголовок'}
                    allBtns={[
                        {text: "Ok", color: "red", actionButtonsPosition: 'ALIGN-CENTER', onClick: () => setCardConfirm(false)},
                    ]} 
                    modalClassName="modal-card-container"
                    noFooter={false}
                    noBtnClose={false}
                    autoHeight={false} />
            </div>
            <div>
                <h3 style={{textAlign: 'center'}} className="title-item">Аватарка</h3>
                <MyAvatar
                    src={src}
                    editProfileImage={editProfileImage} />
            </div>
            <div>
                <h3 className="title-item">Меню</h3>
                <Menu 
                    buttons={[
                        {id: 1, label: 'Заявки', path: '/applications', bid: '5'},
                        {id: 2, label: 'Одобренные', path: '/approved'},
                        {id: 3, label: 'Отклоненные', path: '/reject'},
                        {id: 4, label: 'На практике', path: '/practik'},
                        {id: 5, label: 'Архив', path: '/achive', bid: '8'},
                        {id: 6, label: 'Отчет', path: '/report'}
                    ]} />
            </div>
            <div>
                <h3 className="title-item">Поиск</h3>
                <SearchBar 
                    name={'drop-list-stud'}
                    valueKeyword={keywordInputDrop}
                    onChangeKeyword={setEditKeywordInputDrop}
                    valueDirection={directionInputDrop}
                    onChangeDirection={setEditDirectionInputDrop}
                    placeholderKeyword={'Ключевое слово (ВУЗ)'}
                    placeholderDirection={'Направление'}
                    valueFullName={valFullNameMyInput}
                    onChangeFullName={setEditFullNameMyInput}
                    placeholderFullName={'ФИО Иван Иванов'}
                    textBtn={'Найти'}
                    onClickBtn={setSearchStudents}
                    valueRangePickerStart={valRangePickerStart}
                    valueRangePickerEnd={valRangePickerEnd}
                    onChangeRangePicker={setEditRangePicker}/>
            </div>
            <div>
                <h3 className="title-item">Заголовок сервиса</h3>
                <AppHeader />
            </div>
            <div>
                <h3 className="title-item">Вспомогательные инструменты</h3>
                <Toolbar />
            </div>
            <div>
                <h3 className="title-item">Фильтры</h3>
                <Filters 
                    stateArrowDate={stateSortDate} 
                    stateArrowName={stateSortName}
                    onChangeSortDate={setSortDate}
                    onChangeSortName={setSortName}
                    text={'Сортировать: '}
                    valueBtnFirst={'Дата'}
                    valueBtnLast={'Имя'} />
            </div>
            <div>
                <h3 className="title-item">Лайт карточка студента</h3>
                <LiteCardStudent />
            </div>
            {/* <div>
                <h3 className="title-item">Новая карточка студента</h3>
                <NewCardStudent />
            </div>
            <div>
                <h3 className="title-item">Карточка отказа практики студенту</h3>
                <RejectCardStudent />
            </div>
            <div>
                <h3 className="title-item">Карточка практики студента</h3>
                <PracticCardStudent />
            </div>
            <div>
                <h3 className="title-item">Одобренная карточка студента</h3>
                <ApprovedCardStudetn />
            </div>
            <div>
                <h3 className="title-item">Архивная карточка студента</h3>
                <ArchiveCardStudent /> 
            </div> */}
            {/* <div>
                <h3 className="title-item">Рейтинговая таблица студента</h3>
                <RatingTableStudent /> 
            </div> */}
            <div>
                <h3 className="title-item">Карточка куратора</h3>
                <CardCurator /> 
            </div>
            <div>
                <h3 className="title-item">Форма авторизации</h3>
                <Autorize /> 
            </div>
        </div>
    );
};

export default Components;