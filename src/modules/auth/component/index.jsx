import React, { Component } from 'react';
import { initiateLogin } from '../actions';

export default class AuthView extends Component {

    onClickLogin = () => {
        const { initiateLogin } = this.props;

        initiateLogin();
    };

    render () {
        return <div className="AuthView">
            <button onClick={ this.onCLickLogin }>
                Log in
            </button>
        </div>
    }
}

