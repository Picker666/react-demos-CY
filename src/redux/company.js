import { createAction, handleActions } from 'redux-actions';

const defaultState = {
    staffData: [{staffId: 7878, name: 'Picker', department: 'B/E', work: 'write code for UI'},
        {staffId: 7878, name: 'Kobe', department: 'B/E', work: 'write code for data'},
        {staffId: 7878, name: 'Could', department: 'F/E', work: 'write code and test'},
        {staffId: 7878, name: 'Gavin', department: 'All', work: 'look at them writting code and testing.'}
    ],
    name: 'ShineMo',
    orgId: 12346789
};

const ADD = 'ADD';
const DELETE = 'DELETE';
const CHANGE = 'CHANGE';
const SHOW = 'SHOW';

export const addAction = createAction(ADD);
export const deleteAction = createAction(DELETE);
export const changeAction = createAction(CHANGE);
export const showAction = createAction(SHOW);

// const actions = {
//     [ADD]: ( state, action ) => {
//         return { ...state }
//     },
//     [DELETE]: ( state, action ) => {
//         return { ...state }
//     },
//     [CHANGE]: ( state, action ) => {
//         return { ...state }
//     },
//     [SHOW]: ( state, action ) => {
//         return { ...state }
//     }
// };

export default handleActions({
    [ADD]: ( state, action ) => {
        return { ...state }
    },
    [DELETE]: ( state, action ) => {
        return { ...state }
    },
    [CHANGE]: ( state, action ) => {
        return { ...state }
    },
    [SHOW]: ( state, action ) => {
        return { ...state }
    }
}, defaultState);
