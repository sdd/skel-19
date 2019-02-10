import React from 'react';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import injectSheet, { JssProvider, ThemeProvider } from 'react-jss';
import { create as createJss } from 'jss';
import preset from 'jss-preset-default';

import globalStyles from './global-styles';
import * as themes from './themes';

const jss = createJss();
jss.setup(preset());

export default (children) => (
    <JssProvider jss = { jss }>
        { injectSheet(globalStyles)(() => (
            <Provider store={ store }>
                <ThemeProvider theme={ themes.default }>
                    <ConnectedRouter history={ history }>
                        { children }
                    </ConnectedRouter>
                </ThemeProvider>
            </Provider>
        ))}
    </JssProvider>
);
