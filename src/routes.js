import { flatten, get, mapValues, values } from 'lodash';
import * as modules from './modules';

const moduleRoutes = mapValues(modules, x => get(x, ['rootRoutes'], []));

//export default modules.auth.routes;
const routes = flatten(values(moduleRoutes));
export default routes;
