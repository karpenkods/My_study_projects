import React from 'react';
import './style.scss';

const MyInput = (props) => {
    
    return (
        <input 
            name={props.name ? props.name : ''}
            className={`add-card__input ${props.className}`} 
            placeholder={props.placeholder}
            value={props.value}
            type={props.type} 
            readOnly={props.readOnly}
            disabled={props.disabled}
            onChange={props.onChange ? props.onChange : null}
            onFocus={props.onFocus ? props.onFocus : null}
            onBlur={props.onBlur ? props.onBlur : null}
            onClick={props.onClick ? props.onClick : null}/>
    );
};

export default MyInput;