'use strict';
import 'isomorphic-fetch';
import fetchNice from 'fetch-nice';

export default ({ BASE_URL }) => ({
    login: async channel => await fetchNice(`${ BASE_URL }/auth/login/${ channel }`),
    logout: async () => await fetchNice(`${ BASE_URL }/auth/logout`),
    me: async () => await fetchNice(`${ BASE_URL }/users/me`)
});
