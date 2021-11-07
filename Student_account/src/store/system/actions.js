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









//Экспорт в Excel
export function exportToExcel(payload) {
    return {
        type: 'EXPORT_TO_EXCEL',
        payload
    };
};

export function successExportToExcel(payload) {
    return {
        type: 'EXPORT_TO_EXCEL_SUCCESS',
        payload
    };
};

//Экспортировать практику в Excel
export function practicToExcel(payload) {
    return {
        type: 'PRACTIC_TO_EXCEL',
        payload
    };
};

export function successPracticToExcel(payload) {
    return {
        type: 'PRACTIC_TO_EXCEL_SUCCESS',
        payload
    };
};

//Добавить комментарий к практике
export function addStudentPracticComment(payload) {
    return {
        type: 'ADD_STUDENT_PRACTIC_COMMENT',
        payload
    };
};

export function successAddStudentPracticComment(payload) {
    return {
        type: 'ADD_STUDENT_PRACTIC_COMMENT_SUCCESS',
        payload
    };
};

//Это вроде отчет чи шо
export function studentCardReport(payload) {
    return {
        type: 'STUDENT_CARD_REPORT',
        payload
    };
};

export function successStudentCardReport(payload) {
    return {
        type: 'STUDENT_CARD_REPORT_SUCCESS',
        payload
    };
};

//Обновить практику
export function updatePractic(payload) {
    return {
        type: 'UPDATE_PRACTIC',
        payload
    };
};

export function successUpdatePractic(payload) {
    return {
        type: 'UPDATE_PRACTIC_SUCCESS',
        payload
    };
};

// Создание практики
// export function updateInfoStudent(payload) {
//     return {
//         type: 'UPDATE_INFO_STUDENT',
//         payload
//     };
// };

// export function successUpdateInfoStudent(payload) {
//     return {
//         type: 'UPDATE_INFO_STUDENT_SUCCESS',
//         payload
//     };
// };

// Вход в систему
export function postLogin(payload, meta) {
    return {
        type: 'POST_LOGIN',
        payload,
        meta
    };
};

export function successPostLogin(payload) {
    return {
        type: 'POST_LOGIN_SUCCESS',
        payload
    };
};

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


// Выход из системы
export function signOut(payload) {
    return {
        type: 'SING_OUT',
        payload
    };
};

export function successSignOut(payload) {
    return {
        type: 'SUCCESS_SING_OUT',
        payload
    };
};

// Созадние практики
export function putCreatePractic(payload, meta) {
    return {
        type: 'PUT_CREATE_PRACTIC',
        payload,
        meta
    };
};

export function successCreatePractic(payload) {
    return {
        type: 'SUCCESS_CREATE_PRACTIC',
        payload
    };
};

// Получение практики
export function getPracticList(payload, meta) {
    return {
        type: 'GET_PRACTIC_LIST',
        payload,
        meta
    };
};

export function successPracticList(payload) {
    return {
        type: 'SUCCESS_PRACTIC_LIST',
        payload
    };
};

// Обновление практики
// export function getReturnPractic(payload, meta) {
//     return {
//         type: 'GET_RETURN_PRACTIC',
//         payload,
//         meta
//     };
// };

// export function successReturnPractic(payload) {
//     return {
//         type: 'SUCCESS_RETURN_PRACTIC',
//         payload
//     };
// };