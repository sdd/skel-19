import 'typeface-roboto';

import config from '../config';
import { getModuleRootSagas, spawnAll } from './util';

import * as app from './app';
import * as auth from './auth';
import * as exampleModule from './example';

const modules = { app, auth, exampleModule };
export default modules;

const sagas = getModuleRootSagas(modules);
export const rootSaga = spawnAll(sagas, [config]);


