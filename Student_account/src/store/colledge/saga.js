import { takeLatest, put, call, delay } from "redux-saga/effects";
import {getListInstitutes, successListInstitutes} from "./actions";
// import {item} from "../_stab";

import axios from 'axios';
import qs from 'qs';

export const postman = axios.create({
    baseURL: 'https://localhost:44314/api',
    paramsSerializer: params => qs.stringify(params, {'indices': false})
});

// Получение институтов из БД
function* getListInstitutions(api, action) {
    try {
        console.warn('[saga ===> getListInstitutions ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.get("/Institution/GetInstitutes"));

        // const stabStudentList = item
        yield put(successListInstitutes(apiRes.data));
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
  // Получение институтов из БД
  yield takeLatest(getListInstitutes().type, getListInstitutions, ea); 
}

export default headerSaga;
