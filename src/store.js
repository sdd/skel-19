import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga';

export const history = createHistory();

const createReducer = appReducers => combineReducers({
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

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    storeEnhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

export const createStoreFromReducer = appReducers => {
    const reducer = createReducer(appReducers);
    const store = compose(...storeEnhancers)(createStore)(reducer);
    const runSaga = sagaMiddleware.run;
    return { store, runSaga };
}

// Enable Webpack hot module replacement for reducers
if (module.hot) {
    module.hot.accept('./reducers', () => {
        store.replaceReducer(require('./reducers'));
    });
}

export const runSaga = sagaMiddleware.run;
