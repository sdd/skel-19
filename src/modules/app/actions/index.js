import { createAction } from 'redux-actions';
import { createAsyncActionCreator } from './utils';
import { NETWORK, ORGANISATION } from '../constants';

export const networkRequestStarted = createAction(NETWORK.REQUEST_STARTED);
export const networkRequestFinished = createAction(NETWORK.REQUEST_FINISHED);
export const networkStatusUpdated = createAction(NETWORK.STATUS_UPDATED);

export const getOrganisationsForUser = createAsyncActionCreator(ORGANISATION.GET_ALL_FOR_USER);
export const createOrganisation = createAsyncActionCreator(ORGANISATION.CREATE);

