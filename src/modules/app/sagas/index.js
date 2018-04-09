'use strict';
import { delay } from 'redux-saga';
import { call, take, put } from 'redux-saga/effects';

import {
    networkRequestStarted,
    networkRequestFinished,
    networkStatusUpdated
} from '../actions';
import {
    NETWORK
} from '../constants';

const RETRY_INTERVAL = 5000; // 5 seconds

export const networkRequestSaga = function* (apiMethod, ...apiReqArgs) {
    let result;
    let error;
    let networkSuccess = true;

    try {
        yield put(networkRequestStarted());
        result = yield call(apiMethod, ...apiReqArgs);
    } catch (e) {
        networkSuccess = !!e.output.statusCode;
        error = e;
    } finally {
        yield put(networkRequestFinished());
    }

    yield put(networkStatusUpdated(
        networkSuccess ? NETWORK.STATE.CONNECTED : NETWORK.STATE.DISCONNECTED
    ));

    return {
        networkSuccess,
        error,
        result
    };
};

export const retryingNetworkRequestSaga = function* (apiMethod, ...apiReqArgs) {
    let attemptNumber = 1;
    let response = {};
    do {
        if (attemptNumber > 1) { yield call(delay, RETRY_INTERVAL); }
        response = yield call(networkRequestSaga, apiMethod, ...apiReqArgs);
        attemptNumber++;
    } while (!response.networkSuccess || (response.error && response.error.output.statusCode >= 500));

    return response;
};
