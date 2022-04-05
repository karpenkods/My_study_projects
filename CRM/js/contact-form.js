// Создание формы для добавления контакта

let modalContent = document.querySelector('#modal .modal-content');

export function createAddContactForm({type = '', value = '' }) {
    let inputGroup = document.createElement('div'),
        select = document.createElement('select'),
        optionTel = document.createElement('option'),
        optionEmail = document.createElement('option'),
        optionFacebook = document.createElement('option'),
        optionVK = document.createElement('option'),
        optionOther = document.createElement('option'),
        input = document.createElement('input'),
        btnDeleteContact = document.createElement('button');

    inputGroup.classList.add('input-group', 'mb-3');
    select.classList.add('form-select');
    optionTel.setAttribute('value', 'Телефон');
    optionTel.textContent = 'Телефон';
    optionEmail.setAttribute('value', 'Email');
    optionEmail.textContent = 'Email';
    optionFacebook.setAttribute('value', 'Facebook');
    optionFacebook.textContent = 'Facebook';
    optionVK.setAttribute('value', 'VK');
    optionVK.textContent = 'VK';
    optionOther.setAttribute('value', 'Другое');
    optionOther.textContent = 'Другое';
    input.classList.add('form-control');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Введите данные контакта');
    input.value = value;
    btnDeleteContact.classList.add('btn', 'btn-group-delete');
    btnDeleteContact.setAttribute('type', 'button');
    btnDeleteContact.setAttribute('data-tooltip', `<span style='font-weight: 700;'>Удалить контакт</span>`);
    btnDeleteContact.innerHTML = `<img src="img/cross.svg">`;

    btnDeleteContact.addEventListener('mouseover', () => {
        btnDeleteContact.innerHTML = `<img src="img/delete.svg">`;
    });

    btnDeleteContact.addEventListener('mouseout', () => {
        btnDeleteContact.innerHTML = `<img src="img/cross.svg">`;
    });


    select.append(optionTel, optionEmail, optionFacebook, optionVK, optionOther);
    inputGroup.append(select, input, btnDeleteContact);

    let countContactsForms = 0;

    btnDeleteContact.addEventListener('click', () => {
        --countContactsForms;
        inputGroup.remove();

        if (countContactsForms < 10) {
            modalContent.childNodes[1].childNodes[0].childNodes[1].childNodes[1].style.display = 'inline-block';
        }
    });

    switch (type) {
        case 'Email':
            optionEmail.setAttribute('selected', '');
            break;
        case 'Facebook':
            optionFacebook.setAttribute('selected', '');
            break;
        case 'VK':
            optionVK.setAttribute('selected', '');
            break;
        case 'Другое':
            optionOther.setAttribute('selected', '');
            break;
        default:
            optionTel.setAttribute('selected', '');
    }

    return inputGroup;
}