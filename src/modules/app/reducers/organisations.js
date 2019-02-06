import { createReducer } from 'redux-create-reducer';
import { ORGANISATION } from '../constants';

const { GET_ALL_FOR_USER, CREATE } = ORGANISATION;

const initialState = {
    data: [],
    isLoading: false
};

export default createReducer(initialState, {
    [GET_ALL_FOR_USER.REQUEST](state) {
        return {
            ...state,
            isLoading: true
        };
    },

    [GET_ALL_FOR_USER.RESPONSE](state, { payload }) {
        return {
            ...state,
            isLoading: false,
            data: payload.networkSuccess && payload.result
                ? payload.result
                : null
        }
    },

});

