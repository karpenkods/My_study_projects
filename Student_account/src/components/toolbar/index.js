import React from 'react';
import './style.scss';

const Toolbar = (props) => {
    return (
        <div className="tools"> 
            <i 
                className="fa fa-plus-circle"
                onClick={props.onClickAdd ? props.onClickAdd : null}
                ></i>
            <i 
                className="fa fa-trash"
                onClick={props.onClickDel ? props.onClickDel : null}
                ></i>
        </div>
    );
};

export default Toolbar;