// Получение списка всех студентов
export function getStudentsListRequest(payload) {
    return {
        type: 'GET_STUDENTS_LIST_REQUEST',
        payload
    };
};

export function successGetStudentsList(payload) {
    return {
        type: 'GET_STUDENTS_LIST_SUCCESS',
        payload
    };
};

// Добавление нового студента
export function postCreateNewStudent(payload, meta) {
    return {
        type: 'POST_CREATE_NEW_STUDENT',
        payload, 
        meta
    };
};

export function sendPostNewStudent(payload) {
    return {
        type: 'POST_SEND_NEW_STUDENT',
        payload
    };
};

// Удаление студента
export function deleteStudent(payload, meta) {
    return {
        type: 'DELETE_STUDENT',
        payload, 
        meta
    };
};

export function successDeleteStudent(payload) {
    return {
        type: 'DELETE_STUDENT_SUCCESS',
        payload
    };
};

// Поиск студента
export function postFindStudent(payload, meta) {
    return {
        type: 'POST_FIND_STUDENT',
        payload, 
        meta
    };
};

export function successFindStudent(payload) {
    return {
        type: 'POST_FIND_STUDENT_SUCCESS',
        payload
    };
};

// Обновление информаии о студенте
export function updateInfoStudent(payload, meta) {
    return {
        type: 'UPDATE_INFO_STUDENT',
        payload,
        meta
    };
};

export function successUpdateInfoStudent(payload) {
    return {
        type: 'UPDATE_INFO_STUDENT_SUCCESS',
        payload
    };
};

// Перенаправление студента в какую-либо категорию
export function postStudentChangeCategory(payload, meta) {
    return {
        type: 'POST_STUDENT_CHANGE_CATEGORY',
        payload,
        meta
    };
};

export function successStudentChangeCategory(payload) {
    return {
        type: 'SUCCESS_STUDENT_CHANGE_CATEGORY',
        payload
    };
};

// Сортировка студентов по дате 
export function postSortStudListDate(payload, meta) {
    return {
        type: 'POST_SORT_STUD_LIST_DATE',
        payload,
        meta
    };
};

export function successSortStudListDate(payload) {
    return {
        type: 'SUCCESS_SORT_STUD_LIST_DATE',
        payload
    };
};

// Сортировка студентов по имени
export function postSortStudListName(payload, meta) {
    return {
        type: 'POST_SORT_STUD_LIST_NAME',
        payload,
        meta
    };
};

export function successSortStudListName(payload) {
    return {
        type: 'SUCCESS_SORT_STUD_LIST_NAME',
        payload
    };
};
