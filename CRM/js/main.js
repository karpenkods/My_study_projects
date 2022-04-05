import { createBtnWrapper } from "./button.js";
import { createAddContactForm } from "./contact-form.js";
import { createForm } from "./client-form.js";
import { deleteClient } from "./delete.js";
import { createClient } from "./create-client.js";
import { createModalHeader } from "./modal-header.js";

let tbody = document.querySelector('.table tbody'),
    theads = document.querySelectorAll('.table thead tr th'),
    loading = document.querySelector('.loading'),
    inputSearch = document.querySelector('#search'),
    modalContent = document.querySelector('#modal .modal-content');

// Создание и добавление элементов строки
function createContact(data) {

    // Дата и время создания
    let minCreate = new Date(data.createdAt).getMinutes(),
        hoursCreate = new Date(data.createdAt).getHours(),
        ddCreate = new Date(data.createdAt).getDate(),
        mmCreate = new Date(data.createdAt).getMonth() + 1,
        yyyyCreate = new Date(data.createdAt).getFullYear();

    if (ddCreate < 10) {
        ddCreate = '0' + ddCreate;
    }
    if (mmCreate < 10) {
        mmCreate = '0' + mmCreate;
    }
    if (hoursCreate < 10) {
        hoursCreate = '0' + hoursCreate;
    }
    if (minCreate < 10) {
        minCreate = '0' + minCreate;
    }

    // Последние изменения
    let minChange = new Date(data.updatedAt).getMinutes(),
        hoursChange = new Date(data.updatedAt).getHours(),
        ddChange = new Date(data.updatedAt).getDate(),
        mmChange = new Date(data.updatedAt).getMonth() + 1,
        yyyyChange = new Date(data.updatedAt).getFullYear();

    if (ddChange < 10) {
        ddChange = '0' + ddChange;
    }
    if (mmChange < 10) {
        mmChange = '0' + mmChange;
    }
    if (hoursChange < 10) {
        hoursChange = '0' + hoursChange;
    }
    if (minChange < 10) {
        minChange = '0' + minChange;
    }

    // Контакты
    let contacts = [];

    data.contacts.forEach(i => {
        if (i.type === 'Телефон') {
            contacts.push(`<a data-tooltip="Телефон: <span>${i.value}</span>">
                    <img src="img/phone.svg"></a>`);
        }
        if (i.type === 'Email') {
            contacts.push(`<a data-tooltip="Email: <span>${i.value}</span>">
                    <img src="img/email.svg"></a>`);
        }
        if (i.type === 'VK') {
            contacts.push(`<a data-tooltip="VK: <span>${i.value}</span>">
                    <img src="img/vk.svg"></a>`);
        }
        if (i.type === 'Facebook') {
            contacts.push(`<a data-tooltip="Facebook: <span>${i.value}</span>">
                    <img src="img/facebook.svg"></a>`);
        }
        if (i.type === 'Другое') {
            contacts.push(`<a data-tooltip="<span>${i.value}</span>">
                    <img src="img/other.svg"></a>`);
        }
    });

    if (contacts.length > 5) {
        contacts.splice(5, 0, '<br>');
    }

    // Добавление элементов к строке таблицы
    let tr = document.createElement('tr'),
        td = document.createElement('td'),
        aChange = document.createElement('a'),
        aDelete = document.createElement('a');

    tr.innerHTML = `<td class="table__id">${data.id}</td>
            <td>
                ${data.surname.substr(0, 1).toUpperCase() + data.surname.substr(1).toLowerCase()} 
                ${data.name.substr(0, 1).toUpperCase() + data.name.substr(1).toLowerCase()} 
                ${data.lastName.substr(0, 1).toUpperCase() + data.lastName.substr(1).toLowerCase()}
            </td>
            <td>${ddCreate}.${mmCreate}.${yyyyCreate} <span class="grey">${hoursCreate}:${minCreate}</span></td>
            <td>${ddChange}.${mmChange}.${yyyyChange} <span class="grey">${hoursChange}:${minChange}</span></td>
            <td class="contacts">${contacts.join('')}</td>`;

    // Изменение клиента     
    aChange.setAttribute('id', 'change');
    aChange.setAttribute('data-bs-toggle', 'modal');
    aChange.setAttribute('data-bs-target', '#modal');
    aChange.setAttribute('data-id', data.id);

    aChange.addEventListener('click', () => {
        changeClient(aChange.getAttribute('data-id'));
    });

    // Удаление клиента
    aDelete.setAttribute('id', 'delete');
    aDelete.setAttribute('data-bs-toggle', 'modal');
    aDelete.setAttribute('data-bs-target', '#modal');
    aDelete.setAttribute('data-id', data.id);

    aDelete.addEventListener('click', () => {
        modalContent.innerHTML = '';
        modalContent.classList.remove('modal-create-client', 'modal-change-client');
        modalContent.classList.add('modal-delete-client');
        deleteClient(aDelete.getAttribute('data-id'));
    });


    // Кнопки изменить и удалить
    aChange.setAttribute('id', 'change');
    aChange.innerHTML = `<img src="img/change.svg">Изменить`;

    aDelete.setAttribute('id', 'delete');
    aDelete.innerHTML = `<img src="img/delete.svg">Удалить`;

    td.append(aChange);
    td.append(aDelete);

    //Добавление стрки к таблице
    tr.append(td);
    return tr;
}

// Тултипы
let tooltipElem;

document.onmouseover = function (event) {
    let target = event.target;
    let coords = target.getBoundingClientRect();
    let tooltipHtml = target.dataset.tooltip;

    if (!tooltipHtml) {
        return;
    }

    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltips';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    let top = coords.top - tooltipElem.offsetHeight - 5;

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
};

document.onmouseout = function () {
    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    } else {
        tooltipElem = null;
    }
};

// Поиск по ФИО
let delay;

function delaySearch() {
    clearTimeout(delay);
    delay = setTimeout(search, 300);
}

function search() {
    tbody.innerHTML = '';
    appContacts(`http://localhost:3000/api/clients?search=${inputSearch.value}`);
}

inputSearch.addEventListener('input', delaySearch);

// Сортировка по заголовкам таблицы
function sort(data) {

    let idHeader = theads[0],
        fioHeader = theads[1],
        createAtHeader = theads[2],
        changAtHeader = theads[3];

    function clearCols() {
        tbody.innerHTML = '';
        for (let i = 0; i <= 3; ++i) {
            theads[i].classList.remove('active');
        }
    }

    // Сортировка по ID
    idHeader.innerHTML = 'ID <span>↑</span>';

    function sortID(arg1, arg2, arrow) {
        displayTable(data.sort((a, b) => {

            if (a.id < b.id) {
                return arg1;
            }
            if (a.id > b.id) {
                return arg2;
            }
            return 0;
        }));
        idHeader.classList.add('active');
        idHeader.innerHTML = `ID <span>${arrow}</span>`;
    }

    let countClick1 = 1;
    idHeader.addEventListener('click', () => {
        clearCols();

        if (countClick1 === 0) {
            countClick1 = 1;
            sortID(-1, 1, '↑');
        } else if (countClick1 === 1) {
            countClick1 = 0;
            sortID(1, -1, '↓');
        }
    });

    // Сортировка по ФИО
    function sortFIO(arg1, arg2, arrow) {
        displayTable(data.sort((a, b) => {

            if (a.surname + a.name + a.middleName < b.surname + b.name + b.middleName) {
                return arg1;
            }
            if (a.surname + a.name + a.middleName > b.surname + b.name + b.middleName) {
                return arg2;
            }
            return 0;
        }));
        fioHeader.classList.add('active');
        fioHeader.innerHTML = `Фамилия Имя Отчество <span>${arrow}</span>`;
    }

    let countClick2 = 0;
    fioHeader.addEventListener('click', () => {
        clearCols();

        if (countClick2 === 0) {
            countClick2 = 1;
            sortFIO(-1, 1, '↑ А-Я');
        } else if (countClick2 === 1) {
            countClick2 = 0;
            sortFIO(1, -1, '↓ Я-А');
        }
    });

    // Сортировка по дате создания
    function sortCreateDate(arg1, arg2, arrow) {
        displayTable(data.sort((a, b) => {

            if (a.createdAt < b.createdAt) {
                return arg1;
            }
            if (a.createdAt > b.createdAt) {
                return arg2;
            }
            return 0;
        }));
        createAtHeader.classList.add('active');
        createAtHeader.innerHTML = `Дата и время создания <span>${arrow}</span>`;
    }

    let countClick3 = 0;
    createAtHeader.addEventListener('click', () => {
        clearCols();

        if (countClick3 === 0) {
            countClick3 = 1;
            sortCreateDate(-1, 1, '↑');
        } else if (countClick3 === 1) {
            countClick3 = 0;
            sortCreateDate(1, -1, '↓');
        }
    });

    // Сортировка по дате изменения
    function sortChangeDate(arg1, arg2, arrow) {
        displayTable(data.sort((a, b) => {

            if (a.updatedAt < b.updatedAt) {
                return arg1;
            }
            if (a.updatedAt > b.updatedAt) {
                return arg2;
            }
            return 0;
        }));
        changAtHeader.classList.add('active');
        changAtHeader.innerHTML = `Последние изменения <span>${arrow}</span>`;
    }

    let countClick4 = 0;
    changAtHeader.addEventListener('click', () => {
        clearCols();

        if (countClick4 === 0) {
            countClick4 = 1;
            sortChangeDate(-1, 1, '↑');
        } else if (countClick4 === 1) {
            countClick4 = 0;
            sortChangeDate(1, -1, '↓');
        }
    });
}

let id = '';

// Заголовок для модального окна
let textContent = '';
let idText = '';
createModalHeader({ textContent, id, idText });

// Кнопки сохранения, удаления, отмены
let textBtn = '';
let textCancelOrDelete = '';
createBtnWrapper({ textBtn, textCancelOrDelete });

// Удаление контакта
deleteClient(id);

// Форма для клиента
let surnameValue = '';
let nameValue = '';
let middleNameValue = '';
createForm({ surnameValue, nameValue, middleNameValue });

// Создание формы для добавления контакта
let type = '';
let value = '';
createAddContactForm({ type, value });

// Добавление контакта и валидация
createClient()

// Изменение контакта
async function changeClient(id) {
    let modalContent = document.querySelector('#modal .modal-content');
    modalContent.innerHTML = '';
    modalContent.classList.remove('modal-create-client', 'modal-delete-client');
    modalContent.classList.add('modal-change-client');

    let response = await fetch(`http://localhost:3000/api/clients/${id}`);
    let data = await response.json();
    
    console.log(data);
    let modalCreateForm = createForm({
            surnameValue: data.surname.substr(0, 1).toUpperCase() + data.surname.substr(1).toLowerCase(),
            nameValue: data.name.substr(0, 1).toUpperCase() + data.name.substr(1).toLowerCase(),
            middleNameValue: data.lastName.substr(0, 1).toUpperCase() + data.lastName.substr(1).toLowerCase()
        }),
        modalCreateBtnWrapper = createBtnWrapper({ textBtn: 'Сохранить', textCancelOrDelete: 'Удалить клиента' });

    modalContent.append(createModalHeader({ textContent: 'Изменить данные', paddingLeft: '13px', id: id, idText: 'ID: ' }));
    modalContent.append(modalCreateForm.modalBody);
    modalCreateForm.form.append(modalCreateBtnWrapper.btnWrapper);

    modalCreateForm.surname.classList.remove('surname-placeholder');
    modalCreateForm.surname.classList.add('surname-placeholder-change');
    modalCreateForm.name.classList.remove('name-placeholder');
    modalCreateForm.name.classList.add('name-placeholder-change');
    modalCreateForm.middleName.classList.remove('middle-name-placeholder');
    modalCreateForm.middleName.classList.add('middle-name-placeholder-change');

    let countContactsForms = '';
    countContactsForms = data.contacts.length;
    for (const contact of data.contacts) {
        modalCreateForm.contactsForm.append(createAddContactForm({ type: contact.type, value: contact.value }));
    }

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
            fetch(`http://localhost:3000/api/clients/${id}`, {
                method: 'PATCH',
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

    modalCreateBtnWrapper.cancelOrDelete.addEventListener('click', () => {
        fetch(`http://localhost:3000/api/clients/${id}`, {
            method: 'DELETE'
        });
    });
}

// Экран - удаление спиннера 
function displayTable(data) {
    data.forEach(i => {
        tbody.append(createContact(i));
    });

    if (data = []) {
        loading.classList.remove('loading');
        loading.innerHTML = '';
    };
}

// Получение контактов и формирование таблицы
appContacts('http://localhost:3000/api/clients');
async function appContacts(url) {
    let response = await fetch(url);
    let data = await response.json();

    displayTable(data.sort((a, b) => {
        if (a.id < b.id) {
            return -1;
        }
        if (a.id > b.id) {
            return 1;
        }
        return 0;
    }));

    sort(data);
}
