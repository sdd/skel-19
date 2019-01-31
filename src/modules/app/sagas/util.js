'use strict';
import { delay } from 'redux-saga';
import { all, call, take, put, takeEvery } from 'redux-saga/effects';
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
        if (attemptNumber > 1) {
            // TODO: exponential backoff
            yield call(delay, RETRY_INTERVAL);
        }
        response = yield call(networkRequestSaga, apiMethod, ...apiReqArgs);
        attemptNumber++;
    } while (!response.networkSuccess || (response.error && response.error.output.statusCode >= 500));

    return response;
};

export function createAsyncRequestActionSaga(apiFn, asyncActionCreator) {
    const saga = function* (action) {
        const { payload } = action;
        const { error, result } = yield call(
            networkRequestSaga,
            apiFn,
            payload
        );

        const responseAction = {
            type: asyncActionCreator.RESPONSE,
            payload: error || result
        };

        yield put(responseAction);
    };

    return function* () {
        yield takeEvery(asyncActionCreator.action.REQUEST, saga);
    };
}

export function createRootListenerSagaFromConfigPairArray(configs) {
    const sagas = configs.map(([api, action ]) =>
        createAsyncRequestActionSaga(api, action)
    );

    return function* () {
        yield all(sagas.map(saga => call(saga)));
    };
}

