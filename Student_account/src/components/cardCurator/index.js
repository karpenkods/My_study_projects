import React, {useState} from 'react';
import './style.scss';

import noavatar from '../../images/noavatar.png';
import DropDownList from '../dropDownList/index';

import { Curators } from '../../utils/constanst';

const CardCurator = (props) => {

    const [surnameCurator, SetSurnameCurator] = useState("");

    // Изменение выбора куратора
    const setEditCurator = (name, value) => {
        SetSurnameCurator(value);
    };

    // Выбрать куратора
    const setAppointCurator = () => {
        // Отправка через Api
        console.log(surnameCurator);
        props.onChangeCurator("curator", surnameCurator);

        SetSurnameCurator("");
        
        props.onCloseCard();
    };

    return (
        <div className="card-curator">
            <div className="card-curator-container">
                <i 
                    className="fa fa-sign-out"
                    onClick={props.onCloseCard ? props.onCloseCard : null}>
                </i>
                <div className="ui card">
                    <div className="image">
                        <img alt="Фотография наставника" src={noavatar} />
                    </div>
                    <div className="content">
                        <DropDownList 
                            type="text"
                            clsRightLabeled="middle"
                            options={Curators}
                            className="card-curator__input"
                            value={surnameCurator}
                            name="curator"
                            onChange={(name, value) => setEditCurator(name, value)}
                            placeholder="Выберите куратора"/>
                    </div>
                </div>
                <button 
                    className="btn card-curator__btn"
                    disabled={surnameCurator.length === 0 ? "disbled" : ""}
                    onClick={setAppointCurator}>
                        Выбрать куратора
                </button>
            </div>
        </div>
    );
};

export default CardCurator;