import React from 'react';
import { connect } from 'react-redux';

import UserNav from './UserNav';

import { userSelector } from '../selectors/user';
import * as authActions from '../../auth/actions';

export const Header = ({ initiateLogout, initiateLogin, isAuthenticated }) => (
    <AppBar title="SyncShout">
        <Navigation type="horizontal">
            { isAuthenticated ? ([
                <UserNav key={1} />,
                <IconButton icon="account_circle" key={2} label="Log Out" onClick={ initiateLogout } />
            ]) : (
                <Button label="Log In" primary onClick={ () => initiateLogin('twitter') } />
            ) }
        </Navigation>
    </AppBar>
);

export default connect(
    userSelector, authActions
)(Header);
