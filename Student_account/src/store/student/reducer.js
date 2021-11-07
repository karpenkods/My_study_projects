import { handleActions } from 'redux-actions';
import { successGetStudentsList } from './actions';

const initialState = {
    studentsList: []
};

Object.freeze(initialState);

export default handleActions(
    {
        [successGetStudentsList().type]: (state, action) => {
            console.log('successGetStudentsList', action);
            return {
                ...state,
                studentsList: action.payload
            }
        },
    },

    initialState
)
