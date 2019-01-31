import { all, call, spawn } from 'redux-saga/effects';
import { isFunction, property, values } from 'lodash';

export function getModuleRootSagas(modules) {
    return values(modules)
        .map(_.property(['sagas', 'default']))
        .filter(_.isFunction);
}

export function spawnAll(sagas, args) {
    return function* spawnAll () {
        yield* sagas.map(saga =>
            spawn(function* spawnAllSpawner () {
                yield call(saga, args);
            })
        );
    };
}

