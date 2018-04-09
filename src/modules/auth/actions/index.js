'use strict';
import { createAction } from 'redux-actions';
import { LOGIN, LOGGED_IN_USER } from '../constants';

export const initiateLogin = createAction(LOGIN);

export const loggedInUserProfileRetrieved = createAction(LOGGED_IN_USER.RESPONSE);
