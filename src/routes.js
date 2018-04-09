import { mapValues } from 'lodash';
import * as modules from './modules';

const moduleRoutes = mapValues(modules, 'routes');

export default modules.auth.routes;
// export default [].concat(...moduleRoutes);

