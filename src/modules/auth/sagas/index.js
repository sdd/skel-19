'use strict';
import { call, put, take } from 'redux-saga/effects';
import { goto } from 'react-router-redux';

import { NETWORK } from '../../app/constants';
import { retryingNetworkRequestSaga } from '../../app/sagas';

import * as AUTH from '../constants';
import { loggedInUserProfileRetrieved } from '../actions';
import API from '../api';

export default config => function* userLifecycleSaga () {

    const api = API(config);

    let user;
    user = yield call(retryingNetworkRequestSaga, api.me);

    do {
        if (!user) {

            // if we are not logged in, log in
            yield put(goto('/login'));
            const loginAction = yield take(AUTH.LOGIN.REQUEST);

            const { meta: { channel } = {} } = loginAction;

            if (channel === 'local') {
                // TODO: username / password auth goes here
            } else {

                const { redirectUrl } = yield call(
                    retryingNetworkRequestSaga, api.login, channel
                );

                yield call(window.open, redirectUrl);

                const loginResult = yield take(AUTH.LOGIN.RESPONSE);

                if (loginResult.success) {
                    user = loginResult.user;
                }
            }
        } else {
            yield put(loggedInUserProfileRetrieved(user));

            // If we are logged in, wait fpr a logout request or an auth failure
            const { type } = yield take([ AUTH.LOGOUT.REQUEST, NETWORK.ERROR.AUTH ]);
            if (type === AUTH.LOGOUT.REQUEST) {
                yield call(retryingNetworkRequestSaga, api.logout);
            }
            user = null;
        }

    } while (true);
};
