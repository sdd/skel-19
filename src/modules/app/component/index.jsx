import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';

import { Layout } from 'react-seal';
import appSelector from '../selectors/AppSelector';
import { authRouteSelector, pubRouteSelector } from '../selectors/AuthRouteSelector';

// import Header from './Header';
import childRoutes from '../childRoutes';

const Panel = () => <div />;
const Header = () => <div />

export const App = ({ isAuthenticated }) => {
    const routes = (isAuthenticated ? authRouteSelector: pubRouteSelector)(childRoutes);

    return <Layout container vertical>
        <Layout item>
            <Header />
        </Layout>
        { /* TODO: notification bar, move styles into stylesheets */ }
        <Layout item>
            <Switch>
                { routes.map((route, key) => {
                    return <Route { ...route } key={ key } />
                } ) }

                { /* TODO: Maybe explicit 404 here? */ }
                <Route><Redirect to="/" /></Route>
            </Switch>
        </Layout>
    </Layout>;
};

export default connect(appSelector)(App);
