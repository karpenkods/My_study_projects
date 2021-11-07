import { takeLatest, put, call, delay } from "redux-saga/effects";
// Сделать заново
import {getStudentsListRequest, successGetStudentsList, postCreateNewStudent, sendPostNewStudent, 
        deleteStudent, successDeleteStudent, postFindStudent, successFindStudent,
        updateInfoStudent, successUpdateInfoStudent, postStudentChangeCategory, successStudentChangeCategory,
        postSortStudListDate, successSortStudListDate, postSortStudListName, successSortStudListName} from "./actions";

import axios from 'axios';
import qs from 'qs';

export const postman = axios.create({
    baseURL: 'https://localhost:44314/api',
    paramsSerializer: params => qs.stringify(params, {'indices': false})
});

// Получение всех студентов из БД
function* getStudentsList(api, action) {
    try {
        console.warn('[saga ===> getStudentsList ===> ]');
        //yield put(changeLoading(true));
        
        // const apiRes = yield call(() => postman.get(`/Student/GetStudentsByStatus?status=${action.payload}`));
        
        const apiRes = [
            {
                id: '1',
                name: 'John'
            }
        ]

        // const stabStudentList = item
        // yield put(successGetStudentsList(apiRes.data));
        yield put(successGetStudentsList(apiRes));

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

// Добавление нового студента
function* createNewStudent(api, action) {
    try {
        console.warn('[saga ===> createNewStudent ===> ]');
        //yield put(changeLoading(true));

        console.log(action.payload)

        const apiRes = yield call(() => postman.post("/Student/CreateNewStudent", action.payload));

        // const stabStudentList = item
        yield put(sendPostNewStudent(apiRes.data));
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

// Удаление студента
function* deleteStudentCard(api, action) {
    try {
        console.warn('[saga ===> deleteStudentCard ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.delete(`/Student/DeleteStudent?id=${action.payload}`));

        // const stabStudentList = item
        yield put(successDeleteStudent(apiRes.data));
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

// Поиск студента
function* findStudents(api, action) {
    try {
        console.warn('[saga ===> findStudents ===> ]');
        //yield put(changeLoading(true));

        console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.post("/Student/FindStudents", action.payload));
      
        // const stabStudentList = item
        yield put(successFindStudent(apiRes.data));
        // action.meta && action.meta(apiRes);
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

// Обновление информации о студенте
function* updateInfo(api, action) {
    try {
        console.warn('[saga ===> updateInfo ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.put("/Student/UpdateInfo", action.payload));

        // const stabStudentList = item
        yield put(successUpdateInfoStudent(apiRes.data));
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

// Изменение категории студента
function* changeCategory(api, action) {
    try {
        console.warn('[saga ===> changeCategory ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.post("/Student/ChangeStudentStatus", action.payload));

        // const stabStudentList = item
        yield put(successStudentChangeCategory(apiRes.data));
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

function* StudentsSagas(ea) {
  yield takeLatest(getStudentsListRequest().type, getStudentsList, ea);
  // Удаление студента
  yield takeLatest(deleteStudent().type, deleteStudentCard, ea);
  // Добавление студента
  yield takeLatest(postCreateNewStudent().type, createNewStudent, ea);
  // Поиск студента
  yield takeLatest(postFindStudent().type, findStudents, ea);   
  // Обновление информации о студенте
  yield takeLatest(updateInfoStudent().type, updateInfo, ea);   
  // Изменение категории студента
  yield takeLatest(postStudentChangeCategory().type, changeCategory, ea); 

}

export default StudentsSagas;
