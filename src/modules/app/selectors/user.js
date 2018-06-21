import { createSelector } from 'reselect';

const full = ({
    auth: {
        user: {
            data,
            isLoading,
            error
        }
    }
}) => ({
    user: {
        data, isLoading, error
    },
    isAuthenticated: !!data && !!data.id
});
export default full;

export const userSelector = createSelector(
    full,
    ({ user: { data }, isAuthenticated }) => ({
        user: data,
        isAuthenticated
    })
);
