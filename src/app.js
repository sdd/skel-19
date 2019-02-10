import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import injectSheet, { ThemeProvider } from 'react-jss';
import { create as createJss } from 'jss';
import preset from 'jss-preset-default';
import { JssProvider } from 'react-jss';
import 'typeface-roboto';

import modules from './modules/index2';

import { history, createStoreFromReducer } from './store';

import globalStyles from './global-styles';
import * as themes from './themes';

const jss = createJss();
jss.setup(preset());

const hotWrap = process.env.NODE_ENV === 'production' ? x => x : hot(module);

const RootRoutes = hotWrap(() => {
    const routes = modules.getRootRoutes()
    return routes.map((route, key) => <Route { ...route } key={ key } />)
});

const { store, runSaga } = createStoreFromReducer(modules.getReducers());

runSaga(modules.createRootSaga());

const GlobalStyledApp = injectSheet(globalStyles)(() => (
    <Provider store={ store }>
        <ThemeProvider theme={ themes.default }>
            <ConnectedRouter history={ history }>
                <RootRoutes />
            </ConnectedRouter>
        </ThemeProvider>
    </Provider>
));

export default () => (
    <JssProvider jss={ jss }>
        <GlobalStyledApp />
    </JssProvider>
);

