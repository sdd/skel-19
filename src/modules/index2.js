import config from '../config';
import Registry from './registry';

import App from './app/index2';
import Auth from './auth/index2';
import Example from './example/index2';

const registry = new Registry(config);

registry.register('app', new App({ config }));
registry.register('auth', new Auth({ config }));
registry.register('example', new Example({ config }));

export default registry;
