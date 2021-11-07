import { takeLatest, put, call, delay } from "redux-saga/effects";
import {postLogin, signOut} from "./actions";
import {item} from "../_stab";

import axios from 'axios';
import qs from 'qs';

export const postman = axios.create({
    baseURL: 'https://localhost:44314/api',
    paramsSerializer: params => qs.stringify(params, {'indices': false})
});

// Вход в систему
function* getLoggingSistem(api, action) {
    try {
        console.warn('[saga ===> getLoggingSistem ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)
        
        const apiRes = yield call(() => postman.post("/Account/LogIn", action.payload));
        
        // const stabStudentList = item
        //yield put(successPostLogin(apiRes));
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

// Выход из системы
function* getOutSistem(api, action) {
    try {
        console.warn('[saga ===> getOutSistem ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.get("/api/Account/LogOut"));

        // const stabStudentList = item
        //yield put(successGetListCurators(apiRes.data));
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

function* headerSaga(ea) {  
  // Вход в систему
  yield takeLatest(postLogin().type, getLoggingSistem, ea);   
  // Выход из ситемы
  yield takeLatest(signOut().type, getOutSistem, ea); 
}

export default headerSaga;
