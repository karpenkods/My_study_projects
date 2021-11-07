import React, {useState} from 'react';
import './style.scss';

const MyButton = (props) => {

    const [colorTextBtn, SetColorTextBtn] = useState(props.oneOf ? props.oneOf : '')

    return (
        <button 
            className={`btn-card btn-card_${props.name} ${colorTextBtn} `}
            onClick={props.onClick ? props.onClick : null}
            disabled={props.disabled}
            >
            {props.text}
        </button>
    );
};

export default MyButton;