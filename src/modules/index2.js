import config from '../config';
import Registry from './registry';

import app from './app/index2';
import auth from './auth/index2';
import exampleModule from './example/index2';

export default const registry = new Registry(config);

registry.register('app', app);
registry.register('auth', auth);
registry.register('example', example);

