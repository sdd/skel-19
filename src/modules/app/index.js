'use strict';
export actions from './actions';
import component from './component';
export component, * as components from './component';
export constants from './constants';
export const rootRoutes = [{ path: '/', component }];
export sagas from './sagas';
