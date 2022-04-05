// Форма для клиента

import { createAddContactForm } from "./contact-form.js";

export function createForm({ surnameValue = '', nameValue = '', middleNameValue = '' }) {
    let modalBody = document.createElement('div'),
        form = document.createElement('form'),
        inputs = document.createElement('div'),
        surname = document.createElement('div'),
        name = document.createElement('div'),
        middleName = document.createElement('div'),
        inputSurname = document.createElement('input'),
        inputName = document.createElement('input'),
        inputMiddleName = document.createElement('input'),
        createContacts = document.createElement('div'),
        contactsForm = document.createElement('div'),
        btnAddContactForm = document.createElement('span');

    modalBody.classList.add('modal-body');
    inputs.classList.add('inputs');
    surname.classList.add('mb-3', 'surname-placeholder');
    name.classList.add('mb-3', 'name-placeholder');
    middleName.classList.add('mb-3', 'middle-name-placeholder');
    inputSurname.classList.add('form-control');
    inputSurname.setAttribute('type', 'text');
    inputSurname.value = surnameValue;
    inputName.classList.add('form-control');
    inputName.setAttribute('type', 'text');
    inputName.value = nameValue;
    inputMiddleName.classList.add('form-control');
    inputMiddleName.setAttribute('type', 'text');
    inputMiddleName.value = middleNameValue;

    surname.append(inputSurname);
    name.append(inputName);
    middleName.append(inputMiddleName);

    createContacts.classList.add('create-contacts', 'text-center');
    contactsForm.classList.add('contact-forms');
    btnAddContactForm.innerHTML = `<img src="img/plus.svg" alt="">Добавить контакт`;

    createContacts.append(contactsForm, btnAddContactForm);

    inputs.append(surname, name, middleName);
    form.append(inputs, createContacts);
    modalBody.append(form);

    // Изменение стилей у полей ввода ФИО
    inputSurname.addEventListener('input', () => {
        inputSurname.classList.remove('error-input');
        surname.classList.remove('surname-placeholder');
        surname.classList.add('surname-placeholder-change');

        if (!inputSurname.value) {
            surname.classList.remove('surname-placeholder-change');
            surname.classList.add('surname-placeholder');
        }
    });
    inputName.addEventListener('input', () => {
        inputName.classList.remove('error-input');
        name.classList.remove('name-placeholder');
        name.classList.add('name-placeholder-change');

        if (!inputName.value) {
            name.classList.remove('name-placeholder-change');
            name.classList.add('name-placeholder');
        }
    });
    inputMiddleName.addEventListener('input', () => {
        middleName.classList.remove('middle-name-placeholder');
        middleName.classList.add('middle-name-placeholder-change');

        if (!inputMiddleName.value) {
            middleName.classList.remove('middle-name-placeholder-change');
            middleName.classList.add('middle-name-placeholder');
        }
    });

    // Hover у "Добавить контакт" и количество контактов
    btnAddContactForm.addEventListener('mouseover', () => {
        btnAddContactForm.innerHTML = `<img src="img/plus-hover.svg">Добавить контакт`;
    });
    btnAddContactForm.addEventListener('mouseout', () => {
        btnAddContactForm.innerHTML = `<img src="img/plus.svg">Добавить контакт`;
    });

    btnAddContactForm.addEventListener('click', () => {
        let countContactsForms = 0;
        ++countContactsForms;
        contactsForm.append(createAddContactForm({}));
        if (countContactsForms >= 10) {
            btnAddContactForm.style.display = 'none';
        }
    });

    return {
        inputSurname,
        inputName,
        inputMiddleName,
        surname,
        name,
        middleName,
        btnAddContactForm,
        contactsForm,
        form,
        modalBody
    };
}