import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './modules';

import appReducers from './reducers';

const reducer = combineReducers({
    routing: routerReducer,
    ...appReducers
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [
    applyMiddleware(sagaMiddleware)
];

if (window.devToolsExtension) { middleware.push(window.devToolsExtension()); }

const browserHistory = createBrowserHistory();

export const store = compose(...middleware)(createStore)(reducer);
export const history = syncHistoryWithStore(browserHistory, store);

sagaMiddleware.run(rootSaga);
