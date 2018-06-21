import React, { Component } from 'react';
import { connect } from 'react-redux';
import userSelector from '../selectors/user';
import Avatar from 'react-toolbox/lib/avatar';

export class UserNav extends Component {

    static propTypes = {};
    static defaultProps = {};

    render() {
        const { user: { name='' } = {} } = this.props;

        return <div className="UserNav">
            <i className="material-icons">face</i>
            <Avatar icon="person" />
            { name }
        </div>;
    }
}

export default connect(userSelector)(UserNav);
