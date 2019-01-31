import React, { Component } from 'react';
import LoginPanel from '../../auth/component/LoginPanel';

// TODO: move this to it's own module, which gets bundle split
export default class PublicHomePanel extends Component {

    static propTypes = {};
    static defaultProps = {};

    render() {
        return (
            <div>
                <h1 className="u-text-center u-mb">SyncShout - distributed decision making</h1>
                <LoginPanel />
            </div>
        );
    }
}

