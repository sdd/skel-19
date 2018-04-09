import moduleActions from './actions';
import ExampleContainer from './components/ExampleContainer';
import moduleReducer from './reducers';

const path = '/example';

export const actions = moduleActions;
export const reducer = { exampleModule:moduleReducer };
export const components = { ExampleContainer };
export const routes = [{ path, component: ExampleContainer }];

