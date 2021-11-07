import { takeLatest, put, call, delay } from "redux-saga/effects";
import {exportToExcel, successExportToExcel, practicToExcel, successPracticToExcel, 
        addStudentPracticComment, successAddStudentPracticComment, updatePractic, 
        successUpdatePractic, putCreatePractic, successCreatePractic, getPracticList, 
        successPracticList, studentCardReport, successStudentCardReport} from "./actions";
// import {item} from "../_stab";

import axios from 'axios';
import qs from 'qs';

export const postman = axios.create({
    baseURL: 'https://localhost:44314/api',
    paramsSerializer: params => qs.stringify(params, {'indices': false})
});

// Экспорт в Excel
function* exportReportToExcel(api, action) {
    try {
        console.warn('[saga ===> exportReportToExcel ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.post("/Practic/ExportToExcel", action.payload));

        // const stabStudentList = item
        yield put(successExportToExcel(apiRes));
        //yield put(changeLoading(false));
    }
    catch (e) {
        // yield put(changeLoading(false));
        // yield put(setError(e));
        console.error('[getStudentsList saga1] error', e.message);
        // yield delay(3000);
        // yield put(clearError(e));
    }
}

// Экспортировать практику в Excel
function* exportPracticToExcel(api, action) {
    try {
        console.warn('[saga ===> exportPracticToExcel ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.post("/Reports/PracticToExcel", action.payload));

        // const stabStudentList = item
        yield put(successPracticToExcel(apiRes));
        //yield put(changeLoading(false));
    }
    catch (e) {
        // yield put(changeLoading(false));
        // yield put(setError(e));
        console.error('[getStudentsList saga1] error', e.message);
        // yield delay(3000);
        // yield put(clearError(e));
    }
}

// Добавить комментарий к практике
function* addPracticComment(api, action) {
    try {
        console.warn('[saga ===> addPracticComment ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.post("/Student/AddStudentPracicComment", action.payload));

        // const stabStudentList = item
        yield put(successAddStudentPracticComment(apiRes));
        //yield put(changeLoading(false));
    }
    catch (e) {
        // yield put(changeLoading(false));
        // yield put(setError(e));
        console.error('[getStudentsList saga1] error', e.message);
        // yield delay(3000);
        // yield put(clearError(e));
    }
}

// Отчет по карточке
function* makeStudentCardReport(api, action) {
    try {
        console.warn('[saga ===> makeStudentCardReport ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.post("/Student/StudentCardReport", action.payload));

        // const stabStudentList = item
        yield put(successStudentCardReport(apiRes));
        //yield put(changeLoading(false));
    }
    catch (e) {
        // yield put(changeLoading(false));
        // yield put(setError(e));
        console.error('[getStudentsList saga1] error', e.message);
        // yield delay(3000);
        // yield put(clearError(e));
    }
}

// Обновить практику
function* updateStudentPractic(api, action) {
    try {
        console.warn('[saga ===> updateStudentPractic ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.post("/Practic/UpdatePractic", action.payload));

        // const stabStudentList = item
        yield put(successUpdatePractic(apiRes));
        //yield put(changeLoading(false));
    }
    catch (e) {
        // yield put(changeLoading(false));
        // yield put(setError(e));
        console.error('[getStudentsList saga1] error', e.message);
        // yield delay(3000);
        // yield put(clearError(e));
    }
}

// Создание практики у студента
function* getCreatePractic(api, action) {
    try {
        console.warn('[saga ===> getCreatePractic ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.get(`/Student/CreateStudentPractic?studentId=${action.payload}`));

        // const stabStudentList = item
        yield put(successCreatePractic(apiRes.data));
        action.meta && action.meta(apiRes.data);
        //yield put(changeLoading(false));
    }
    catch (e) {
        // yield put(changeLoading(false));
        // yield put(setError(e));
        console.error('[getStudentsList saga1] error', e.message);
        // yield delay(3000);
        // yield put(clearError(e));
    }
}

// Получение практики у студента
function* getlistPracticStudent(api, action) {
    try {
        console.warn('[saga ===> getlistPracticStudent ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.get(`/Practic/GetPractic?id=${action.payload}`));

        // const stabStudentList = item
        yield put(successPracticList(apiRes.data));
        action.meta && action.meta(apiRes.data);
        //yield put(changeLoading(false));
    }
    catch (e) {
        // yield put(changeLoading(false));
        // yield put(setError(e));
        console.error('[getStudentsList saga1] error', e.message);
        // yield delay(3000);
        // yield put(clearError(e));
    }
}

function* PracticSagas(ea) {
  // Экспорт в Excel
  yield takeLatest(exportToExcel().type, exportReportToExcel, ea);
  // Экспортировать практику в Excel
  yield takeLatest(practicToExcel().type, exportPracticToExcel, ea);
  // Добавить комментарий к практике
  yield takeLatest(addStudentPracticComment().type, addPracticComment, ea);
  // Отчет по карточке
  yield takeLatest(studentCardReport().type, makeStudentCardReport, ea);
  // Обновить практику
  yield takeLatest(updatePractic().type, updateStudentPractic, ea); 
  // Создание практики у студента
  yield takeLatest(putCreatePractic().type, getCreatePractic, ea); 
  // Получение практики у студента
  yield takeLatest(getPracticList().type, getlistPracticStudent, ea); 
}

export default PracticSagas;
