'use strict';
import { createAction } from 'redux-actions';
import { LOGIN, LOGOUT, LOGGED_IN_USER } from '../constants';

export const initiateLogin = createAction(LOGIN.REQUEST);
export const initiateLogout = createAction(LOGOUT.REQUEST);
export const logoutSucceeded = createAction(LOGOUT.RESPONSE);

export const loggedInUserProfileRetrieved = createAction(LOGGED_IN_USER.RESPONSE);
