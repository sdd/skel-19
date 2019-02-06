import RRModule from '../../rrmodule';

import * as actions from './actions';
import * as constants from './constants';
import reducer from './reducers';
import * as sagas from './sagas';

import * as api from './api';
import * as selectors from './selectors';

import component, * as components from './component';
import routes from './childRoutes';

export default class AppModule extends RRModule {
    actions = actions;
    constants = constants;
    reducer = reducer;
    sagas = sagas;

    api = api;
    selectors = selectors;

    routes = routes;
    rootRoutes = [
        { path: '/', component }
    ];
}
