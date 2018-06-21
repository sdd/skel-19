import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { identity } from 'lodash';
import { initiateLogin } from '../actions';

export class LoginPanel extends Component {

    static propTypes = {
        initiateLogin: PropTypes.func.isRequired
    };

    render () {
        const { initiateLogin } = this.props;

        return <div className="LoginPanel">
            <button
                onClick={() => initiateLogin('twitter')} >
                Login via Twitter
            </button>
        </div>
    }
}

export default connect(
    identity,
    { initiateLogin }
)(LoginPanel)
