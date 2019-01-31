import React from 'react';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import injectSheet, { ThemeProvider } from 'react-jss';

import routes from './routes';
import { history, store } from './store';

import globalStyles from './modules/app/globalStyles';
import * as themes from './themes';

const hotWrap = process.env.NODE_ENV === 'production' ? x => x : hot(module);

const RootRoutes = hotWrap(() =>
    routes.map((route, key) => <Route { ...route } key={ key } />)
);

export default injectSheet(globalStyles)(() => (
    <Provider store={ store }>
        <ThemeProvider theme={ themes.default }>
            <ConnectedRouter history={ history }>
                <RootRoutes />
            </ConnectedRouter>
        </ThemeProvider>
    </Provider>
));

