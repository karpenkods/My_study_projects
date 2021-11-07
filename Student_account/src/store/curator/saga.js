import { takeLatest, put, call, delay } from "redux-saga/effects";
import {addCurator, successAddCurator, getListCurators, successGetListCurators} from "./actions";
// import {item} from "../_stab";

import axios from 'axios';
import qs from 'qs';

export const postman = axios.create({
    baseURL: 'https://localhost:44314/api',
    paramsSerializer: params => qs.stringify(params, {'indices': false})
});

// Добавление куратора
function* addCuratorPractic(api, action) {
    try {
        console.warn('[saga ===> addCuratorPractic ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.post("/Student/AddStudentMentor", action.payload));

        // const stabStudentList = item
        yield put(successAddCurator(apiRes.data));
        action.meta && action.meta(apiRes.data);
        //yield put(changeLoading(false));
    }
    catch (e) {
        // yield put(changeLoading(false));
        // yield put(setError(e));
        // console.error('[getStudentsList saga1] error', e.message);
        // yield delay(3000);
        // yield put(clearError(e));
    }
}

// Получение кураторов из БД
function* getCuratorsList(api, action) {
    try {
        console.warn('[saga ===> getCuratorsList ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.get("/Student/GetMentors"));

        // const stabStudentList = item
        yield put(successGetListCurators(apiRes.data));
        // action.meta && action.meta();
        //yield put(changeLoading(false));
    }
    catch (e) {
        // yield put(changeLoading(false));
        // yield put(setError(e));
        // console.error('[getStudentsList saga1] error', e.message);
        // yield delay(3000);
        // yield put(clearError(e));
    }
}

function* headerSaga(ea) { 
  // Добавление куратора
  yield takeLatest(addCurator().type, addCuratorPractic, ea); 
  // Получение кураторов из БД
  yield takeLatest(getListCurators().type, getCuratorsList, ea); 
}

export default headerSaga;
