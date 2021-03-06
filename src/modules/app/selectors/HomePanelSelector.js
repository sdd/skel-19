import { createSelector } from 'reselect';


const full = ({
    organisations: {
        data,
        isLoading,
        error
    } = {}
}) => ({
    organisations: {
        data, isLoading, error
    }
});
export default full;

export const organisationsSelector = createSelector(
    full,
    ({ organisations: { data }}) => ({
        organisations: data,
    })
);
