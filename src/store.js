import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './modules';
import appReducers from './reducers';

export const history = createHistory();

const reducer = combineReducers({
    ...appReducers,
    router: routerReducer
});

const sagaMiddleware = createSagaMiddleware();

const storeEnhancers = [
    applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history)
    )
];

if (window.devToolsExtension) {
    storeEnhancers.push(window.devToolsExtension());
}

export const store = compose(...storeEnhancers)(createStore)(reducer);

// Enable Webpack hot module replacement for reducers
if (module.hot) {
    module.hot.accept('./reducers', () => {
        store.replaceReducer(require('./reducers'));
    });
}

sagaMiddleware.run(rootSaga);
