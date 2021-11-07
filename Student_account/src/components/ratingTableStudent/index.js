import React, {useState} from 'react';
import './style.scss';

import MyInput from '../myInput/index';

const RatingTableStudent = (props) => {

    const [data, SetData] = useState(
        {
            name: props.intials.firstName ? props.intials.firstName : "",
            surname: props.intials.secondName ? props.intials.secondName : "",
            patronymic: props.intials.patronymic ? props.intials.patronymic : "",
            date: props.dataCard.date ? props.dataCard.date : "",
            learnability_comm: props.dataCard.learnability_comment ? props.dataCard.learnability_comment : "",
            learnability_appraisal: props.dataCard.learnability_appraisal ? props.dataCard.learnability_appraisal : "",
            quality_comm: props.dataCard.quality_comment ? props.dataCard.quality_comment : "",
            quality_appraisal: props.dataCard.quality_appraisal ? props.dataCard.quality_appraisal : "",
            responsibility_comm: props.dataCard.responsibility_comment ? props.dataCard.responsibility_comment : "",
            responsibility_appraisal: props.dataCard.responsibility_appraisal ? props.dataCard.responsibility_appraisal : "",
            initiative_comm: props.dataCard.initiative_comment ? props.dataCard.initiative_comment : "",
            initiative_appraisal: props.dataCard.initiative_appraisal ? props.dataCard.initiative_appraisal : "",
            conflicts_comm: props.dataCard.conflicts_comment ? props.dataCard.conflicts_comment : "",
            conflicts_appraisal: props.dataCard.conflicts_appraisal ? props.dataCard.conflicts_appraisal : "",
            relationship_comm: props.dataCard.relationship_comment ? props.dataCard.relationship_comment : "",
            relationship_appraisal: props.dataCard.relationship_appraisal ? props.dataCard.relationship_appraisal : "",
            interest_comm: props.dataCard.interest_comment ? props.dataCard.interest_comment : "",
            interest_appraisal: props.dataCard.interest_appraisal ? props.dataCard.interest_appraisal : "",
            final_comment: props.dataCard.final_comment ? props.dataCard.final_comment : "",
            final_appraisal: props.dataCard.final_appraisal ? props.dataCard.final_appraisal : ""
        }
    );

    const [edit, SetEdit] = useState(false);

    // Изменение data
    const editData = (name, value) => {
        let new_obj = {...data};
        new_obj[name] = value;

        return new_obj;
    };

    // Изменение данных о студенте (для комментариев)
    const setEditDataComment = (name, value) => {
        SetData(editData(name, value));
    };

    // Изменение данных о студенте (для оценок)
    const setEditDataAppraisal = (name, value) => {

        if ((isNaN(value)) || (value > 5 || value < 2)  ) {
            SetData(editData(name, ""));
        }   else {
            SetData(editData(name, value));
        }
    };

    // Отмена изменений
    const setCanceling = () => {
        SetData(
            {
                date: props.dataCard.date ? props.dataCard.date : "",
                learnability_comm: props.dataCard.learnability_comment ? props.dataCard.learnability_comment : "",
                learnability_appraisal: props.dataCard.learnability_appraisal ? props.dataCard.learnability_appraisal : "",
                quality_comm: props.dataCard.quality_comment ? props.dataCard.quality_comment : "",
                quality_appraisal: props.dataCard.quality_appraisal ? props.dataCard.quality_appraisal : "",
                responsibility_comm: props.dataCard.responsibility_comment ? props.dataCard.responsibility_comment : "",
                responsibility_appraisal: props.dataCard.responsibility_appraisal ? props.dataCard.responsibility_appraisal : "",
                initiative_comm: props.dataCard.initiative_comment ? props.dataCard.initiative_comment : "",
                initiative_appraisal: props.dataCard.initiative_appraisal ? props.dataCard.initiative_appraisal : "",
                conflicts_comm: props.dataCard.conflicts_comment ? props.dataCard.conflicts_comment : "",
                conflicts_appraisal: props.dataCard.conflicts_appraisal ? props.dataCard.conflicts_appraisal : "",
                relationship_comm: props.dataCard.relationship_comment ? props.dataCard.relationship_comment : "",
                relationship_appraisal: props.dataCard.relationship_appraisal ? props.dataCard.relationship_appraisal : "",
                interest_comm: props.dataCard.interest_comment ? props.dataCard.interest_comment : "",
                interest_appraisal: props.dataCard.interest_appraisal ? props.dataCard.interest_appraisal : "",
                final_comment: props.dataCard.final_comment ? props.dataCard.final_comment : "",
                final_appraisal: props.dataCard.final_appraisal ? props.dataCard.final_appraisal : ""
            }
        )

        props.closeCardRating();
    };

    // Добавить изменения
    const setAddEdit = () => {
        let date = new Date();
        let newDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        // Добавление через Api
        SetEdit(false);

        props.onChangeDateTable(newDate);
        props.setEditData("dataCardRating", data);
        props.closeCardRating();
    };

    let defaultInitials = "ФИО студента";
    let defaultDate = "Дата";

    return (
        <div className="rating-table">
            <div className="rating-table-container">
                <div className="rating-table__header">
                    <p className="rating-table__name rating-table__text">{(data.surname && data.name + data.patronymic) ? data.surname + " " + data.name + " " + data.patronymic : defaultInitials}</p>
                    <p className="rating-table__date rating-table__text">{data.date ? data.date : defaultDate}</p>
                    <div className="rating-table__tools">
                        <i className = "fa fa-print"></i>
                        <i className = "fa fa-edit" onClick={() => SetEdit(!edit)}></i>
                        <i className = "fa fa-download"></i>
                        <i className = "fa fa-trash"></i>
                    </div>
                </div>
                <div className="rating-table-competence">
                    <div className="rating-table-competence__item rating-table-competence__item_first">
                        <div className="rating-table-competence__cell rating-table-competence__cell_criteria">
                            <p className="rating-table-competence__text_first-criteria">
                                Критерии
                            </p>
                        </div>
                        <div className="rating-table-competence__cell rating-table-competence__cell_appraisal">
                            <p className="rating-table-competence__text_first-appraisal">
                                Оценка(1-5)
                            </p>
                        </div>
                        <div className="rating-table-competence__cell_remarks">
                            <p className="rating-table-competence__text_first-remarks">
                                Замечания
                            </p>
                        </div>
                    </div>
                    <div className="rating-table-competence__item rating-table-competence__item">
                        <div className="rating-table-competence__cell rating-table-competence__cell_criteria">
                            <span className="rating-table-competence__span">Обучаемость</span> 
                            <p className="rating-table-competence__item-text">
                                (способность усвоить и применить на практике максимум знаний в минимальные сроки)
                            </p>
                        </div>
                        <div className="rating-table-competence__cell rating-table-competence__cell_appraisal">
                            <MyInput 
                                disabled={edit === false ? "disabled" : ""}
                                className="rating-table-competence__input"
                                value={data.learnability_appraisal}
                                name="learnability_appraisal"
                                onChange={(e) => setEditDataAppraisal("learnability_appraisal", e.target.value)} />
                        </div>
                        <div className="rating-table-competence__cell_remarks">
                            <textarea
                                disabled={edit === false ? "disabled" : ""}
                                className="rating-table-competence__textarea"
                                value={data.learnability_comm}
                                name="learnability_comm"
                                onChange={(e) => setEditDataComment("learnability_comm", e.target.value)} >
                            </textarea>
                        </div>
                    </div>
                    <div className="rating-table-competence__item rating-table-competence__item">
                        <div className="rating-table-competence__cell rating-table-competence__cell_criteria">
                            <span className="rating-table-competence__span">Качество</span> 
                            <p className="rating-table-competence__item-text">
                                (тщательность и аккуратность выполнения работы, независимо от количества)
                            </p>
                        </div>
                        <div className="rating-table-competence__cell rating-table-competence__cell_appraisal">
                            <MyInput 
                                disabled={edit === false ? "disabled" : ""}
                                className="rating-table-competence__input"
                                value={data.quality_appraisal}
                                name="quality_appraisal"
                                onChange={(e) => setEditDataAppraisal("quality_appraisal", e.target.value)} />
                        </div>
                        <div className="rating-table-competence__cell_remarks">
                            <textarea
                                disabled={edit === false ? "disabled" : ""}
                                className="rating-table-competence__textarea"
                                value={data.quality_comm}
                                name="quality_comm"
                                onChange={(e) => setEditDataComment("quality_comm", e.target.value)} >
                            </textarea>
                        </div>
                    </div>
                    <div className="rating-table-competence__item rating-table-competence__item">
                        <div className="rating-table-competence__cell rating-table-competence__cell_criteria">
                            <span className="rating-table-competence__span">Ответственность</span> 
                            <p className="rating-table-competence__item-text">
                                (исполнение обязанностей в срок с минимумом контроля)
                            </p>
                        </div>
                        <div className="rating-table-competence__cell rating-table-competence__cell_appraisal">
                            <MyInput 
                                disabled={edit === false ? "disabled" : ""}
                                className="rating-table-competence__input"
                                value={data.responsibility_appraisal}
                                name="responsibility_appraisal"
                                onChange={(e) => setEditDataAppraisal("responsibility_appraisal", e.target.value)} />
                        </div>
                        <div className="rating-table-competence__cell_remarks">
                            <textarea
                                disabled={edit === false ? "disabled" : ""}
                                className="rating-table-competence__textarea"
                                value={data.responsibility_comm}
                                name="responsibility_comm"
                                onChange={(e) => setEditDataComment("responsibility_comm", e.target.value)} >
                            </textarea>
                        </div>
                    </div>
                    <div className="rating-table-competence__item rating-table-competence__item">
                        <div className="rating-table-competence__cell rating-table-competence__cell_criteria">
                            <span className="rating-table-competence__span">Инициативность</span> 
                            <p className="rating-table-competence__item-text">
                                (говоря о проблемах, предлагает варианты решения)
                            </p>
                        </div>
                        <div className="rating-table-competence__cell rating-table-competence__cell_appraisal">
                            <MyInput 
                                disabled={edit === false ? "disabled" : ""}
                                className="rating-table-competence__input"
                                value={data.initiative_appraisal}
                                name="initiative_appraisal"
                                onChange={(e) => setEditDataAppraisal("initiative_appraisal", e.target.value)} />
                        </div>
                        <div className="rating-table-competence__cell_remarks">
                            <textarea
                                disabled={edit === false ? "disabled" : ""}
                                className="rating-table-competence__textarea"
                                value={data.initiative_comm}
                                name="initiative_comm"
                                onChange={(e) => setEditDataComment("initiative_comm", e.target.value)} >
                            </textarea>
                        </div>
                    </div>
                    <div className="rating-table-competence__item rating-table-competence__item">
                        <div className="rating-table-competence__cell rating-table-competence__cell_criteria">
                            <span className="rating-table-competence__span">Конфликтность</span> 
                            <p className="rating-table-competence__item-text">
                                (конструктивное восприятие критики, способность тактично обсудить неприятный вопрос)
                            </p>
                        </div>
                        <div className="rating-table-competence__cell rating-table-competence__cell_appraisal">
                            <MyInput 
                                disabled={edit === false ? "disabled" : ""}
                                className="rating-table-competence__input"
                                value={data.conflicts_appraisal}
                                name="conflicts_appraisal"
                                onChange={(e) => setEditDataAppraisal("conflicts_appraisal", e.target.value)} />
                        </div>
                        <div className="rating-table-competence__cell_remarks">
                            <textarea
                                disabled={edit === false ? "disabled" : ""}
                                className="rating-table-competence__textarea"
                                value={data.conflicts_comm}
                                name="conflicts_comm"
                                onChange={(e) => setEditDataComment("conflicts_comm", e.target.value)} >
                            </textarea>
                        </div>
                    </div>
                    <div className="rating-table-competence__item rating-table-competence__item">
                        <div className="rating-table-competence__cell rating-table-competence__cell_criteria">
                            <span className="rating-table-competence__span">Взаимоотношения с окружающими</span> 
                            <p className="rating-table-competence__item-text">
                                (легко идет на контакт, умеет наладить горизонтальные и вертикальные связи)
                            </p>
                        </div>
                        <div className="rating-table-competence__cell rating-table-competence__cell_appraisal">
                            <MyInput 
                                disabled={edit === false ? "disabled" : ""}
                                className="rating-table-competence__input"
                                value={data.relationship_appraisal}
                                name="relationship_appraisal"
                                onChange={(e) => setEditDataAppraisal("relationship_appraisal", e.target.value)} />
                        </div>
                        <div className="rating-table-competence__cell_remarks">
                            <textarea
                                disabled={edit === false ? "disabled" : ""}
                                className="rating-table-competence__textarea"
                                value={data.relationship_comm}
                                name="relationship_comm"
                                onChange={(e) => setEditDataComment("relationship_comm", e.target.value)} >
                            </textarea>
                        </div>
                    </div>
                    <div className="rating-table-competence__item rating-table-competence__item">
                        <div className="rating-table-competence__cell rating-table-competence__cell_criteria">
                            <span className="rating-table-competence__span">Интерес к работе</span> 
                            <p className="rating-table-competence__item-text">
                                (видит перспективы, возможности реализации, ему нравится содержание работы)
                            </p>
                        </div>
                        <div className="rating-table-competence__cell rating-table-competence__cell_appraisal">
                            <MyInput 
                                disabled={edit === false ? "disabled" : ""}
                                className="rating-table-competence__input"
                                value={data.interest_appraisal}
                                name="interest_appraisal"
                                onChange={(e) => setEditDataAppraisal("interest_appraisal", e.target.value)} />
                        </div>
                        <div className="rating-table-competence__cell_remarks">
                            <textarea   
                                disabled={edit === false ? "disabled" : ""}
                                className="rating-table-competence__textarea"
                                value={data.interest_comm}
                                name="interest_comm"
                                onChange={(e) => setEditDataComment("interest_comm", e.target.value)} >
                            </textarea>
                        </div>
                    </div>
                    <div className="rating-table-competence__item rating-table-competence__item">
                        <div className="rating-table-competence__cell rating-table-competence__cell_criteria">
                            <span className="rating-table-competence__span rating-table-competence__span_appraisal">Итоговая оценка</span> 
                        </div>
                        <div className="rating-table-competence__cell rating-table-competence__cell_appraisal">
                            <MyInput 
                                disabled="disabled"
                                className="rating-table-competence__input"
                                value={
                                    Math.ceil((Number(data.learnability_appraisal) + 
                                               Number(data.quality_appraisal) +  Number(data.responsibility_appraisal) + 
                                               Number(data.initiative_appraisal) + Number(data.conflicts_appraisal) + 
                                               Number(data.relationship_appraisal) + Number(data.interest_appraisal)) / 7) }
                                name="final_appraisal" />
                        </div>
                        <div className="rating-table-competence__cell_remarks">
                            <textarea
                                disabled={edit === false ? "disabled" : ""}
                                className="rating-table-competence__textarea"
                                value={data.final_comment}
                                name="final_comment"
                                onChange={(e) => setEditDataComment("final_comment", e.target.value)} >
                            </textarea>
                        </div>
                    </div>
                </div>
                <div className="rating-table-btns">
                    <button 
                        className="btn rating-table-btns__button" 
                        onClick={setCanceling}>
                            Отменить
                    </button>
                    <button
                        className="btn rating-table-btns__button"
                        onClick={setAddEdit} >
                            Сохранить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RatingTableStudent;
