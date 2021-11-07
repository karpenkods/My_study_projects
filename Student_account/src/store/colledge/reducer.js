import { handleActions } from 'redux-actions';
import { successListInstitutes } from './actions';

const initialState = {
    colledges: []
};

Object.freeze(initialState);

export default handleActions(
    {
        [successListInstitutes().type]: (state, action) => {
            console.log('successGetStudentsList', action);
            return {
                ...state,
                colledges: action.payload
            }
        },
    },

    initialState
)
