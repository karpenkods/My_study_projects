// Получение институтов
export function getListInstitutes(payload) {
    return {
        type: 'GET_LIST_INSTITUTES',
        payload
    };
};

export function successListInstitutes(payload) {
    return {
        type: 'GET_LIST_INSTITUTES_SUCCESS',
        payload
    };
};
