
export const authRouteSelector = routes => _.filter(routes, 'authComponent')
    .map(({ authComponent, pubComponent, ...rest }) => ({ ...rest, component: authComponent }));

export const pubRouteSelector = routes => _.filter(routes, 'pubComponent')
    .map(({ authComponent, pubComponent, ...rest }) => ({ ...rest, component: pubComponent }));

