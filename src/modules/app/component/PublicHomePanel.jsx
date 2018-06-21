import React, { Component } from 'react';
import LoginPanel from '../../auth/component/LoginPanel';

// TODO: move this to it's own module, which gets bundle split
export default class PublicHomePanel extends Component {

    static propTypes = {};
    static defaultProps = {};

    render() {
        return (
            <div>
                <h2>SyncShout - distributed decision making</h2>
                <LoginPanel />
            </div>
        );
    }
}

