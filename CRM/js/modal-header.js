// Заголовок для модального окна

export function createModalHeader({ textContent, paddingLeft = '13px', id = '', idText = '' }) {
    let modalHeader = document.createElement('div'),
        modalTitle = document.createElement('h5'),
        idClient = document.createElement('span'),
        btnClose = document.createElement('button');

    modalHeader.classList.add('modal-header');
    modalTitle.classList.add('modal-title');
    modalTitle.style.left = paddingLeft;
    modalTitle.textContent = textContent;
    modalTitle.append(idClient);
    idClient.classList.add('modal-id');
    idClient.textContent = idText + ' ' + id;
    btnClose.classList.add('btn-close');
    btnClose.setAttribute('type', 'button');
    btnClose.setAttribute('data-bs-dismiss', 'modal');
    btnClose.setAttribute('aria-label', 'Close');

    modalHeader.append(modalTitle, btnClose);

    return modalHeader;
}