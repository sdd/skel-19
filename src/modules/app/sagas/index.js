import { spawnAll } from '../../util';
import organisationRootSaga from './organisations'; 

export default spawnAll([
    organisationRootSaga
]);

