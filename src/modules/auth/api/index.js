'use strict';
import 'isomorphic-fetch';
import fetchNice from 'fetch-nice';

const BASE = '/users/';

export default ({ BASE_URL }) => ({
    login: async channel => await fetchNice(`${ BASE_URL }/auth/login/${ channel }`),
    logout: async () => await fetchNice(`${ BASE_URL }/auth/logout`),
    me: () => ({
        url: BASE + 'me'
    }) //async () => await fetchNice(`${ BASE_URL }/users/me`)
});
