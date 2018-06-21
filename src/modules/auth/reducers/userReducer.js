import { createReducer } from 'redux-create-reducer';
import { LOGGED_IN_USER, LOGOUT } from '../constants';

const initialState = {};

export default createReducer(initialState, {

    [LOGGED_IN_USER.REQUEST](state) {
        return {
            ...state,
            isLoading: true
        };
    },

    [LOGGED_IN_USER.RESPONSE](state, { payload }) {
        return {
            ...state,
            isLoading: false,
            data: payload.networkSuccess && payload.result
                ? payload.result
                : null
        }
    },

    [LOGOUT.REQUEST](state) {
        return {
            ...state,
            isLoading: true,
            data: null
        };
    },

    [LOGOUT.RESPONSE](state) {
        return {
            ...state,
            isLoading: false
        }
    }

});
