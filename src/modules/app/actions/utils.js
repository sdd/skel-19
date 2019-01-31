import { createAction } from 'redux-actions';

export function createAsyncActionCreator(baseAction) {
    return {
        action: baseAction,
        REQUEST: createAction(baseAction.REQUEST),
        RESPONSE: createAction(baseAction.RESPONSE)
    };
}
