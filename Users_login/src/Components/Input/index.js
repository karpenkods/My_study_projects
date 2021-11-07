import React from 'react';
import './style.css';

const Input = (props) => {
    return (
        <input 
            className={props.className ? props.className : ''}
            id={props.id ? props.id : ''}
            placeholder={props.placeholder ? props.placeholder : ''}
            type={props.type ? props.type : 'text'}
            value={props.value ? props.value : null}
            onChange={props.onChange ? props.onChange : null}
            pattern={props.pattern ? props.pattern : ''}
             />
    );
};

export default Input;