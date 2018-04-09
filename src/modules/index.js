'use strict';
import { spawn } from 'redux-saga/effects';
import config from '../config';
export * as exampleModule from './example';
export * as app from './app';
export * as auth from './auth';

import { sagas as authRootSaga } from './auth';

export const rootSaga = function* () {
    console.log('running root saga');
    yield spawn(authRootSaga(config));
};
