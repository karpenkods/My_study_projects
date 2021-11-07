import React, { useState } from 'react';
import './style.scss';

const MyAvatar = (props) => {

    const [defaultPath, SetDefaultPath] = useState(require("../../images/noavatar.png"));

    // Измение иконки студента
    const editImg = (e) => {

        const file = e.target.files[0];
        const reader = new FileReader();   

        if (file) {
            reader.readAsDataURL(file);
            reader.onload = () => {
                // onChange(name, reader.result, file.name);     

                if (props.editProfileImage) {
                    SetDefaultPath(reader.result)
                    props.editProfileImage(props.name, reader.result)
                } else {
                    return;
                }
            }
        }
    };

    return (
        <div className="student-add-form__header">
            <img 
                className="student-add-form__img"
                src={props.src ? props.src : defaultPath} />
            <input 
                type="file"
                accept="image/*"
                className="student-add-form__input-file"
                onChange={editImg}
                name={props.name ? props.name : ''} />

            <h3 className="student-add-form__title">Добавление студента</h3>
        </div>
    );
};

export default MyAvatar;