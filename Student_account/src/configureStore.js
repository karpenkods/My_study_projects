import { createRootReducer } from '../src/store/index';
import { createBrowserHistory } from "history";
import createSagaMiddleware from 'redux-saga';
import StudentsSagas from '../src/store/student/saga';
import PracticSagas from '../src/store/practic/saga';
import logger from 'redux-logger';
import {createStore, compose, applyMiddleware} from 'redux';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    createRootReducer(history),
    compose(applyMiddleware(logger, sagaMiddleware))
);    

sagaMiddleware.run(StudentsSagas, PracticSagas);  