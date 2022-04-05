// Удаление контакта

import { createModalHeader } from "./modal-header.js";
import { createBtnWrapper } from "./button.js";

export function deleteClient(id) {
    let modalContent = document.querySelector('#modal .modal-content');
    modalContent.append(createModalHeader({ textContent: 'Удалить клиента', paddingLeft: '30%' }));

    const modalBody = document.createElement('div'),
        text = document.createElement('p'),
        form = document.createElement('form'),
        modalCreateBtnWrapper = createBtnWrapper({ textBtn: 'Удалить', textCancelOrDelete: 'Отмена' });

    modalBody.classList.add('modal-body', 'text-center');
    text.innerHTML = 'Вы действительно хотите удалить<br> данного клиента?';
    modalCreateBtnWrapper.cancelOrDelete.setAttribute('data-bs-dismiss', 'modal');

    form.append(modalCreateBtnWrapper.btnWrapper);
    modalBody.append(text, form);
    modalContent.append(modalBody);

    modalCreateBtnWrapper.btnSaveOrDelete.addEventListener('click', () => {
        fetch(`http://localhost:3000/api/clients/${id}`, {
            method: 'DELETE'
        });
    });
}