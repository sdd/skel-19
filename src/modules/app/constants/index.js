export const createAsyncConstants = base => ({
    REQUEST: `${base}.REQUEST`,
    RESPONSE: `${base}.RESPONSE`
});

export const NETWORK = {
    ERROR: {
        AUTH: 'NETWORK.ERROR.AUTH'
    },

    STATUS_UPDATED: 'STATUS_UPDATED',
    REQUEST_STARTED: 'REQUEST_STARTED',
    REQUEST_FINISHED: 'REQUEST_FINISHED',

    STATE: {
        CONNECTED: 'NETWORK.STATUS.CONNECTED',
        DISCONNECTED: 'NETWORK.STATUS.DISCONNECTED'
    }
};

export const ORGANISATION = {
    GET_ALL_FOR_USER: createAsyncConstants('APP.ORG.GET_ALL_FOR_USER'),
    CREATE: createAsyncConstants('APP.ORG.CREATE')
};
