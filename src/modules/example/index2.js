import Module from '../../rrmodule';

import * as actions from './actions';
import reducer from './reducers';

export default class AppModule extends Module {
    actions = actions;
    reducer = reducer;
}
