import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initiateLogin } from '../actions';
import { loginPanelSelector } from '../selectors';

export class LoginPanel extends Component {

    static propTypes = {
        initiateLogin: PropTypes.func.required
    };

    render () {

        const { initiateLogin } = props;

        return <div className="LoginPanel">
            <button onClick={() => initiateLogin('twitter')}>
                Login via Twitter
            </button>
        </div>
    }
}

export default connect(
    loginPanelSelector,
    { initiateLogin }
)(LoginPanel)
