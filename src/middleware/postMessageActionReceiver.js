export const REMOTE_ACTION = Symbol('REMOTE_ACTION');

export default ({ messageToActionHandler }) => store => {
    window.addEventListener('message',
        messageToActionHandler(msgAction => {
            store.dispatch(
                Object.defineProperty(msgAction, REMOTE_ACTION, { value: true })
            )
    }));
    return next => action => next(action);
};
