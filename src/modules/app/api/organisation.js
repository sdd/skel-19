const BASE = '/organisations';

const PATH_CREATE = '/';

export function listForUser() {
    return {
        url: BASE
    };
}

export function create(data) {
    return {
        method: 'POST',
        url: BASE + PATH_CREATE,
        data
    };
}
