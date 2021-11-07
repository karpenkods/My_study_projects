import React, {useEffect, useState} from 'react';
import './style.scss';

import MyInput from '../../components/myInput/index';

const Autorize = (props) => {

    const [data, SetData] = useState(
        {
            login: "",
            pass: "",
            check: false
        }
    );
    // Видимость подсказки
    const [visibleConflict, SetVisibleConflict] = useState(false);

    // Изменение Data
    const editData = (name, value) => {
        let newObj = {...data};
        newObj[name] = value;

        return newObj;
    };

    // Изменение данных
    const setEditData = (name, value) => {
        SetData(editData(name, value));
    };

    // Отправить данные
    const setSingInSistem = (e) => {
        e.preventDefault();

        // Отправка данных по Api

        if (props.setLogin) {
            props.setLogin(data.login);
        }
    };

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-t-50 p-b-90">
                    <form className="login100-form validate-form flex-sb flex-w">
                        <span className="login100-form-title p-b-51">
                            Login
                        </span>
                        <div className="wrap-input100 validate-input m-b-16" data-validate = "Username is required">
                            <MyInput 
                                className="input100" 
                                type="text" 
                                name="login" 
                                placeholder="Username" 
                                onChange={(e) => setEditData("login", e.target.value)}
                                value={data.login}/>
                            <span className="focus-input100"></span>
                        </div>
                        <div className="wrap-input100 validate-input m-b-16" data-validate = "Password is required">
                            <MyInput                                     
                                className="input100" 
                                type="password" 
                                name="pass" 
                                placeholder="Password" 
                                onChange={(e) => setEditData("pass", e.target.value)}
                                value={data.pass}/>
                            <span className="focus-input100"></span>
                        </div>
                        <div className="flex-sb-m w-full p-t-3 p-b-24">                                
                            <div className="contact100-form-checkbox">
                                <MyInput 
                                    className="input-checkbox100" 
                                    id="ckb1" 
                                    type="checkbox" 
                                    name="check" 
                                    checked={data.check}
                                    onClick={(e) => setEditData("check", e.target.checked)}
                                    />
                                <label className="label-checkbox100" htmlFor="ckb1">
                                    Remember me
                                </label>
                            </div>
                         </div>
                        <div className="container-login100-form-btn m-t-17">
                            <button 
                                className="login100-form-btn"
                                onClick={setSingInSistem}> 
                                    Войти   
                            </button>  
                            {visibleConflict === true ?
                                <p className="container__prompt">
                                    Заполните все поля!
                                </p> : null}                              
                         </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Autorize;