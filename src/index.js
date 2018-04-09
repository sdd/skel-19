import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';
import { history, store } from './store';

// html-webpack-plugin creates the index.html, but it's default template has an empty
// body. We creates a div for React to render into, as rendering React to body is discouraged.
ReactDOM.render(
    <Provider store={ store }>
        <Router {...{ history }}>
            <div>
                { routes.map(({ path, component }, key) => (
                    <Route {...{ path, component, key }} />
                ) ) }
            </div>
        </Router>
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);
