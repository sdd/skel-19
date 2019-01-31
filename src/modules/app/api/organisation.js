import { ax } from './axiosInstance';

const BASE = '/organisations';

const PATH_CREATE = '/';

export function listForUser() {
    console.log('listforuser');
}

export function create(data) {
    return {
        method: 'POST',
        url: BASE + PATH_CREATE,
        data
    );
}
