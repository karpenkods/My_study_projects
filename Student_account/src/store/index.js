import {combineReducers, createStore, applyMiddleware } from 'redux';
import {connectRouter} from 'connected-react-router';

import reducerStudent from './student/reducer';
import reducerColledge from './colledge/reducer';
import reducerCurator from './curator/reducer';
import reducerPractic from './practic/reducer';
import reducerSystem from './system/reducer';


export const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    students: reducerStudent, 
    // colledge: reducerColledge, 
    // curator: reducerCurator,
    // practic: reducerPractic, 
    // system: reducerSystem,
});

