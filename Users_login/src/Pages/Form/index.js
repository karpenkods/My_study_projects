import React, {useState} from 'react';
import './style.css';

import Input from '../../Components/Input/index';
import DropList from '../../Components/DropList/index';
import Button from '../../Components/Button/index';

const Form = (props) => {

    // Данные формы
    const [data, setData] = useState(
        {
            name: '',
            email: '',
            phone: '',
            lang: '',
            check: false
        }
    );

    const [nameValidate, setNameValidate] = useState(true);
    const [emailValidate, setEmailValidate] = useState(true);
    const [phoneValidate, setPhoneValidate] = useState(true);

    // Изменить массив data
    const editData = (name, value) => {
        setDataValide(name, value);

        let newObj = {...data};
        newObj[name] = value;

        return newObj;
    };

    // Изменение данных
    const setEditFormData = (name, value) => {
        setData(editData(name, value))
    };

    // Валидация данных
    const setDataValide = (name, value) => {
        switch(name) {
            case 'name': 
                let regName = /(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/;

                if (regName.test(value) === false && value.length !== 0) {
                    setNameValidate(false);
                } else setNameValidate(true);
            break;

            case 'email': 
                let regMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

                if (regMail.test(value) === false && value.length !== 0) {
                    setEmailValidate(false);
                } else setEmailValidate(true);
            break;

            case 'phone':
                let regPhone =  /(^(?!\+.*\(.*\).*\-\-.*$)(?!\+.*\(.*\).*\-$)(\+[0-9]{1,3}\([0-9]{1,3}\)[0-9]{1}([-0-9]{0,8})?([0-9]{0,1})?)$)|(^[+0-9]{1}([0-9]{0,11})?$)/;

                if (regPhone.test(value) === false && value.length !== 0) {
                    setPhoneValidate(false);
                } else setPhoneValidate(true);
            break;

            default: return;
        };
    };

    // Отправить данные
    const setSendData = (e) => {
        e.preventDefault();

        if (nameValidate === true && emailValidate === true && phoneValidate === true) {
            console.log(data);
            alert("Данные успешно отправлены");
        } else {
            alert("Введены некорректные данные");
        };

        setData(
            {
                name: '',
                email: '',
                phone: '',
                lang: '',
                check: false
            }
        );
    };

    return (
        <form className="form">
            <div className="container">
                <div className="form__header">
                    <h1 className="form__title">
                        Регистрация
                    </h1>
                    <div className="form__account"> 
                        <p className="form__text">
                            Уже есть аккаунт?
                        </p>
                        <a className="form__a" href="#">
                            Войти
                        </a>
                    </div>
                </div>
                <div className="users-info">
                    <div className="users-info__item">
                        <label className="users-info__span" htmlFor="name">Имя</label>
                        <Input 
                            className="users-info__input"
                            placeholder="Введите Ваше имя"
                            value={data.name}
                            id="name"
                            name="name"
                            type="text"
                            onChange={(e) => setEditFormData("name", e.target.value)} />
                        {nameValidate === false ?
                            <p className="users-info__error">Введено не корректное значение</p>
                        : null}
                    </div>
                    <div className="users-info__item">
                        <label className="users-info__span" htmlFor="email">Email</label>
                        <Input 
                            className="users-info__input"
                            placeholder="Введите ваш email"
                            value={data.email}
                            id="email"
                            name="email"
                            type="email"
                            onChange={(e) => setEditFormData("email", e.target.value)} />
                        {emailValidate === false ?
                            <p className="users-info__error">Введено не корректное значение</p>     
                        : null}
                    </div>
                    <div className="users-info__item">
                        <label className="users-info__span" htmlFor="phone">Номер телефона</label>
                        <Input 
                            className="users-info__input"
                            placeholder="Введите номер телефона"
                            value={data.phone}
                            id="phone"
                            name="phone"
                            type="number"
                            onChange={(e) => setEditFormData("phone", e.target.value)} />
                        {phoneValidate === false ?
                            <p className="users-info__error">Введено не корректное значение</p>
                        : null}
                    </div>
                    <div className="users-info__item">
                        <label className="users-info__span" htmlFor="lang">Язык</label>
                        <DropList 
                            classMenu="users-info__input users-info__input_lang"
                            classItem="users-info__option"
                            placeholder="Язык"
                            name="lang"
                            onClick={(name, value) => setEditFormData(name, value)}
                            type="text" 
                            value={data.lang}/>
                    </div>
                </div>
                <div className="conditions">
                    <Input 
                        className="conditions__check"
                        type="checkbox"
                        value={data.check}
                        name="check"
                        onChange={(e) => setEditFormData("check", e.target.checked)} />
                    <span className="defolt__span"></span>
                    <p className="conditions__text">
                        Принимаю <a className="conditions__a" href="#">условия</a> использования
                    </p>
                </div>
                <div className="footer">
                    <Button 
                        className="footer__btn"
                        text="Зарегистрироваться"
                        onClick={setSendData}
                        disabled={data.name.length === 0 || data.email.length === 0 ||
                                  data.phone.length === 0 || data.lang.length === 0 || 
                                  data.check === false ? 'disabled' : ''} />
                </div>
            </div>
        </form>
    );
};

export default Form;