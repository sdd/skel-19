import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './AppContainer';

// html-webpack-plugin creates the index.html, but it's default template has an empty
// body. We creates a div for React to render into, as rendering React to body is discouraged.
const root = document.body.appendChild(document.createElement('div'));

ReactDOM.render(<AppContainer />, root);
