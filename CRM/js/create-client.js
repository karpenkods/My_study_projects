// Добавление контакта и валидация

import { createForm } from "./client-form.js";
import { createModalHeader } from "./modal-header.js";
import { createBtnWrapper } from "./button.js";

export function createClient() {
    let btnCreate = document.querySelector('.btn-create');
    let countContactsForms = 0;
    let modalContent = document.querySelector('#modal .modal-content');
    
    btnCreate.addEventListener('click', () => {
        countContactsForms = 0;
        modalContent.innerHTML = '';
        modalContent.classList.remove('modal-delete-client', 'modal-change-client');
        modalContent.classList.add('modal-create-client');
        modalContent.append(createModalHeader({ textContent: 'Новый клиент' }));

        let modalCreateForm = createForm({}),
            modalCreateBtnWrapper = createBtnWrapper({ textBtn: 'Сохранить', textCancelOrDelete: 'Отмена' });

        modalContent.append(modalCreateForm.modalBody);
        modalCreateForm.form.append(modalCreateBtnWrapper.btnWrapper);
        modalCreateBtnWrapper.cancelOrDelete.setAttribute('data-bs-dismiss', 'modal');

        modalCreateBtnWrapper.btnSaveOrDelete.addEventListener('click', (e) => {
            let contacts = [];
            for (let i = 0; i < modalCreateForm.contactsForm.childNodes.length; ++i) {
                if (modalCreateForm.contactsForm.childNodes[i].childNodes[0].value.trim() &&
                    modalCreateForm.contactsForm.childNodes[i].childNodes[1].value.trim()) {
                    contacts.push({
                        type: modalCreateForm.contactsForm.childNodes[i].childNodes[0].value.trim(),
                        value: modalCreateForm.contactsForm.childNodes[i].childNodes[1].value.trim()
                    });
                }
            }

            if (modalCreateForm.inputName.value.trim() && modalCreateForm.inputSurname.value.trim()) {
                fetch('http://localhost:3000/api/clients', {
                    method: 'POST',
                    body: JSON.stringify({
                        name: modalCreateForm.inputName.value.trim().toLowerCase(),
                        surname: modalCreateForm.inputSurname.value.trim().toLowerCase(),
                        lastName: modalCreateForm.inputMiddleName.value.trim().toLowerCase(),
                        contacts: contacts
                    }),
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
            } else if (!modalCreateForm.inputName.value.trim() && modalCreateForm.inputSurname.value.trim()) {
                e.preventDefault();
                modalCreateForm.inputName.classList.add('error-input');
                modalCreateBtnWrapper.errorText.textContent = 'Ошибка: не заполнено поле Имя';
                modalCreateBtnWrapper.btnSaveOrDelete.style.marginTop = '0px';
            } else if (modalCreateForm.inputName.value.trim() && !modalCreateForm.inputSurname.value.trim()) {
                e.preventDefault();
                modalCreateForm.inputSurname.classList.add('error-input');
                modalCreateBtnWrapper.errorText.textContent = 'Ошибка: не заполнено поле Фамилия';
                modalCreateBtnWrapper.btnSaveOrDelete.style.marginTop = '0px';
            } else {
                e.preventDefault();
                modalCreateForm.inputName.classList.add('error-input');
                modalCreateForm.inputSurname.classList.add('error-input');
                modalCreateBtnWrapper.errorText.textContent = 'Ошибка: не заполнены поля Фамилия и Имя';
                modalCreateBtnWrapper.btnSaveOrDelete.style.marginTop = '0px';
            }
        });
    });
}