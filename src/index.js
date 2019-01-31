import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { create as createJss } from 'jss';
import preset from 'jss-preset-default';
import { JssProvider } from 'react-jss';

import AppContainer from './AppContainer';

const jss = createJss();
jss.setup(preset());

// html-webpack-plugin creates the index.html, but it's default template has an empty
// body. We creates a div for React to render into, as rendering React to body is discouraged.
const root = document.body.appendChild(document.createElement('div'));

ReactDOM.render(
    <JssProvider jss={ jss }>
        <AppContainer />
    </JssProvider>
, root);
