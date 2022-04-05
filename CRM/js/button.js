// Кнопки сохранения, удаления, отмены

export function createBtnWrapper({ textBtn, textCancelOrDelete }) {
    let btnWrapper = document.createElement('div'),
        errorText = document.createElement('p'),
        btnSaveOrDelete = document.createElement('button'),
        br = document.createElement('br'),
        cancelOrDelete = document.createElement('a');

    errorText.classList.add('error-text');
    btnWrapper.classList.add('btn-wrapper', 'text-center');
    btnSaveOrDelete.classList.add('btn', 'btn-modal');
    btnSaveOrDelete.textContent = textBtn;
    cancelOrDelete.setAttribute('href', '');
    cancelOrDelete.textContent = textCancelOrDelete;

    btnWrapper.append(errorText, btnSaveOrDelete, br, cancelOrDelete);

    return {
        errorText,
        cancelOrDelete,
        btnSaveOrDelete,
        btnWrapper
    };
}