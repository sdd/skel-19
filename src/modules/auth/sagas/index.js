import { get } from 'lodash';
import { call, put, take } from 'redux-saga/effects';
import { spawnAll } from '../../util';
import { NETWORK } from '../../app/constants';
import { retryingNetworkRequestSaga } from '../../app/sagas/util';

import * as AUTH from '../constants';
import { loggedInUserProfileRetrieved, logoutSucceeded } from '../actions';
import API from '../api';
import config from '../../../config';


export default spawnAll([
    userLifecycleSaga
]);


function* userLifecycleSaga() {

    const api = API(config);

    do {
        let response = yield call(retryingNetworkRequestSaga, api.me);
        let user = response && response.result;

        if (!user) {

            // if we are not logged in, wait for a login attempt
            const loginAction = yield take(AUTH.LOGIN.REQUEST);

            const { payload: channel = '' } = loginAction;

            if (channel === 'local') {
                // TODO: username / password auth goes here
            } else {

                const response = yield call(
                    retryingNetworkRequestSaga, api.login, channel
                );

                const redirectUrl = _.get(response, ['result', 'redirectUrl']);

                if (redirectUrl) {
                    yield call(window.open, redirectUrl);

                    const loginResult = yield call(loginMessageSource);

                    if (loginResult.payload) {
                        user = loginResult.payload;
                        yield put(loggedInUserProfileRetrieved({
                            result: user,
                            networkSuccess: true
                        }));
                    }
                } else {
                    console.error(response);
                }
            }
        } else {
            yield put(loggedInUserProfileRetrieved(response));

            // we are logged in. wait fpr a logout request or an auth failure
            const { type } = yield take([ AUTH.LOGOUT.REQUEST, NETWORK.ERROR.AUTH ]);

            if (type === AUTH.LOGOUT.REQUEST) {
                const response = yield call(retryingNetworkRequestSaga, api.logout);
                if (get(response, ['result', 'loggedOut'])) {
                    user = null;
                    yield put(logoutSucceeded());
                } else {
                    // TODO: logout failed message
                }

            } else {
                // TODO: authentication error notification
                user = null;
            }
        }

    } while (true);
};

function loginMessageSource() {
    return new Promise((resolve) => {

        const handler = event => {
            // console.log(event);

            if (event.origin !== window.location.origin) {
                // console.info('ERROR: bad postMessage origin, ' + event.origin);
                return;
            }

            let message;
            try {
                message = JSON.parse(event.data);
            } catch(e) {
                // console.info('postMessage did not parse as JSON');
                return;
            }

            if (message.type !== AUTH.LOGIN.RESPONSE) {
                // console.info('Ignoring non-login message');
                return;
            }

            window.removeEventListener('message', handler);
            // console.info('SUCCESS');
            resolve(message);
        };

        window.addEventListener('message', handler);
    });
}
