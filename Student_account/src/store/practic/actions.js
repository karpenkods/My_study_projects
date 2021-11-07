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

// Обновить практику
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