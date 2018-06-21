import { spawn } from 'redux-saga/effects';
import config from '../config';

export * as app from './app';
export * as auth from './auth';
export * as exampleModule from './example';

import { sagas as authRootSaga } from './auth';

export const rootSaga = function* () {
    yield spawn(authRootSaga(config));
};
