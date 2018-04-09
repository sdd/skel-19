import { combineReducers } from 'redux';
import * as modules from './modules';

const moduleReducers = Object.keys(modules).reduce(
    (acc, module) => ({ ...acc, ...(module.reducer || null) }),
    {}
);

export default combineReducers(moduleReducers);

