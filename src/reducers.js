import modules from './modules';

//TODO: move this entire file into store?

export default Object.keys(modules).reduce(
    (acc, module) => ({
        ...acc,
        ...(modules[module].reducer
            ? { [module]: modules[module].reducer }
            : null
        )
    }),
{});
