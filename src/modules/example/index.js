export * as actions from './actions';
import ExampleContainer from './components/ExampleContainer';
export reducer from './reducers';

const path = '/example';

export const components = { ExampleContainer };
export const routes = [{ path, component: ExampleContainer }];

