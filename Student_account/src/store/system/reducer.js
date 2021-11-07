import { handleActions } from 'redux-actions';

const initialState = {
    system: []
};

Object.freeze(initialState);

export default handleActions(
    {
        // Пример
        // [successGetStudentsList().type]: (state, action) => {
        //     console.log('successGetStudentsList', action);
        //     return {
        //         ...state,
        //         studentsList: action.payload
        //     }
        // },
    },

    initialState
)
