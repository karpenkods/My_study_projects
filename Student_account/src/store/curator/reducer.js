import { handleActions } from 'redux-actions';
import { successGetListCurators } from './actions';

const initialState = {
    curators: []
};

Object.freeze(initialState);

export default handleActions(
    {
        [successGetListCurators().type]: (state, action) => {
            console.log('successGetStudentsList', action);
            return {
                ...state,
                curators: action.payload
            }
        },
    },

    initialState
)
