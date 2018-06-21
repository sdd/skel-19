import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';

import appSelector from '../selectors/AppSelector';

// import Header from './Header';
import childRoutes from '../childRoutes';

//TODO: Convert these into utility selectors for reusability
const authedRoutes = _.filter(childRoutes, 'authComponent')
    .map(({ authComponent, pubComponent, ...rest }) => ({ ...rest, component: authComponent }));

const pubRoutes = _.filter(childRoutes, 'pubComponent')
    .map(({ authComponent, pubComponent, ...rest }) => ({ ...rest, component: pubComponent }));

const Layout = () => <div />;
const Panel = () => <div />;

export const App = ({ isAuthenticated }) => {
    const routes = isAuthenticated ? authedRoutes : pubRoutes;

    return <Layout>
        <Panel>
            {/*<Header />*/}
            { /* TODO: notification bar, move styles into stylesheets */ }
            <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                <Switch>
                    { routes.map((route, key) => <Route { ...route } key={ key } />) }

                    { /* TODO: Maybe explicit 404 here? */ }
                    <Route><Redirect to="/" /></Route>
                </Switch>
            </div>
        </Panel>
    </Layout>;
};

export default connect(appSelector)(App);
