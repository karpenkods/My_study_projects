// Добавление куратора
export function addCurator(payload) {
    return {
        type: 'ADD_CURATOR',
        payload
    };
};

export function successAddCurator(payload) {
    return {
        type: 'ADD_CURATOR_SUCCESS',
        payload
    };
};

// Получение кураторов
export function getListCurators(payload, meta) {
    return {
        type: 'GET_LIST_CURATORS',
        payload,
        meta
    };
};

export function successGetListCurators(payload, meta) {
    return {
        type: 'GET_LIST_CURATORS_SUCCESS',
        payload,
        meta
    };
};