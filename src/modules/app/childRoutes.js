import UserPanel from './component/UserPanel';
import HomePanel from './component/HomePanel';
import PublicHomePanel from './component/PublicHomePanel';

export default [
    { path: '/me', authComponent: UserPanel },
    { path: '/', exact: true, pubComponent: PublicHomePanel, authComponent: HomePanel }
];
