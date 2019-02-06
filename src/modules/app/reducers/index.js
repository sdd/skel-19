import { combineReducers } from 'redux';
import organisationsReducer from './organisations';

export default combineReducers({
    organisations: organisationsReducer
});

