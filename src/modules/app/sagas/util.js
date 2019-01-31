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
    let statusCode;
    let error;
    let networkSuccess = true;

    const axiosRequestConfig = yield call(apiMethod, ...apiReqArgs);

    yield put(networkRequestStarted());
    try {
        const axiosResponse = yield call(ax.request, axiosRequestConfig);
        
        result = axiosResponse.data;
        statusCode = axiosResponse.status;
    } catch (e) {
        if (e.response) {
            // network request succeeded but got a >299 response 
            networkSuccess = true;
            error = e.response.data;
            statusCode = e.response.status;
        } else if (e.request) {
            // request made but no response
            networkSuccess = false;
        } else {
            // error in request setup
            error = e.message;
        }
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

