import React, { Component } from 'react';
import { connect } from 'react-redux';

import userSelector from '../selectors/user';

class UserPanel extends Component {
    render() {
        const { data: user, isLoading } = this.props.user;

        return (
            <Card style={{ width: 350 }}>
                { (isLoading || !user) && (
                    <ProgressBar
                        type='circular'
                        mode='indeterminate'
                    />
                ) }

                { !isLoading && user && (
                    <CardTitle
                        title={ user.name }
                        subtitle={ user.id }
                    />
                ) }
            </Card>
        );
    }
}

export default connect(
    userSelector
)(UserPanel);
