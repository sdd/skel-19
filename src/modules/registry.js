import _ from 'lodash';
import { getModuleRootSagas, spawnAll } from './util';

export default class RRModuleRegistry {

    constructor(config) {
        this.config = config;
    }
    
    modules = {};

    register(moduleName, module) {
        if (this.modules[moduleName]) {
            throw new Error(`module with name ${moduleName} already registered`);
        }

        // TODO: allow dynamic registration

        this.modules[moduleName] = module;
    }

    createRootSaga() {
        const sagas = getModuleRootSagas(this.modules);
        return spawnAll(sagas, [this.config]);
    }

    getReducers() {
        return Object.entries(this.modules).reduce(
            (acc, [name, { reducer, stateKey }]) => ({
                ...acc,
                ...(reducer ? { [stateKey || name]: reducer } : null)
            }),
            {}
        );
    }

    getRootRoutes() {
        return _.filter(_.flatten(_.map(_.values(this.modules), 'rootRoutes')));
    }
}



