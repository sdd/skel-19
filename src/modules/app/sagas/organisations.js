import { createRootListenerSagaFromConfigPairArray } from './util';
import { organisation as api } from '../api';
import {
    createOrganisation,
    getOrganisationsForUser
} from '../actions';

const asyncReqSagaConfigs = [
    [ api.listForUser, getOrganisationsForUser ],
    [ api.create, createOrganisation ]
];

export default createRootListenerSagaFromConfigPairArray(
    asyncReqSagaConfigs
);

