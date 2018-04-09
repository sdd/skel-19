'use strict';
import 'isomorphic-fetch';
import fetchNice from 'fetch-nice';

export default ({ BASE_URL }) => ({
    login: async channel => await fetchNice(`${ BASE_URL }/auth`),
    logout: async channel => await fetchNice(`${ BASE_URL }/logout`),
    me: async channel => await fetchNice(`${ BASE_URL }/users/me`)
});
