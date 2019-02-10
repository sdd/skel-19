import Module from '../../rrmodule';

import * as actions from './actions';
import component, * as components from './component';
import * as constants from './constants';
import reducer from './reducers';
const rootRoutes = [{ path: '/', component }];
import * as sagas from './sagas';

export default class AppModule extends Module {
    actions = actions;
    component = component;
    components = components;
    constants = constants;
    reducer = reducer;
    sagas = sagas;
    rootRoutes = [{ path: '/', component }];
}
