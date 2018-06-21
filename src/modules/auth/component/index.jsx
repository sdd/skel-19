import React, { Component } from 'react';
import { Route } from 'react-router';
import LoginPanel from './LoginPanel';

export default class AuthView extends Component {

    render () {
        const { match } = this.props;
        return (
            <div className="AuthView">
                <Route
                    path={ `/login` }
                    component={ LoginPanel }
                />
            </div>
        );
    }
}

