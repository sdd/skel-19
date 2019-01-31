import { describe } from 'ava-spec';
import nock from 'nock';

import Api from './index';

const api = Api({ BASE_URL: 'http://test.com/api' });

describe('login', it => {

    it('performs a login request and returns the result', async t => {

        t.plan(1);
        const redirectUrl = 'http.blah.com/auth?oauth_token=qwerty';

        nock('http://test.com')
            .get('/api/auth/login/twitter')
            .reply(200, { redirectUrl });

        const result = await api.login('twitter');

        t.deepEqual(result, { redirectUrl });
    });
});

describe('logout', it => {

    it('performs a logout request and returns the result', async t => {

        t.plan(1);

        nock('http://test.com')
        .get('/api/auth/logout')
        .reply(204);

        const result = await api.logout();

        t.deepEqual(result, undefined);
    });
});

describe.serial('me', it => {

    it('retrieves user details if not logged in', async t => {

        t.plan(1);

        nock('http://test.com')
        .get('/api/user/me')
        .reply(200, { id: 'me' });

        const result = await api.me();

        t.deepEqual(result, { id: 'me' });
    });

    it('throws 401 if not logged in', async t => {

       t.plan(1);

        nock('http://test.com')
        .get('/api/user/me')
        .reply(401);

        const error = await t.throws(
            api.me()
        );

        //t.is(error.message, 'Unauthorized');
    });
});
