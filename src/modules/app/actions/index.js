'use strict';
import { createAction } from 'redux-actions';
import { NETWORK } from '../constants';

export const networkRequestStarted = createAction(NETWORK.REQUEST_STARTED);
export const networkRequestFinished = createAction(NETWORK.REQUEST_FINISHED);
export const networkStatusUpdated = createAction(NETWORK.STATUS_UPDATED);
