import React from 'react';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import routes from './routes';
import { history, store } from './store';

const hotWrap = process.env.NODE_ENV === 'production' ? x => x : hot(module);

const RootRoutes = hotWrap(() =>
    routes.map((route, key) => <Route { ...route } key={ key } />)
);

export default () => (
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <RootRoutes />
        </ConnectedRouter>
    </Provider>
);
