import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';

import { Button, Input, Layout } from 'react-seal';

import {
    createOrganisation,
    getOrganisationsForUser
} from '../../actions';

const selectOrganisation = () => {};

import { organisationSelector } from '../../selectors/organisationSelector';

export class OrganizationPanel extends Component {

    static propTypes = {};
    static defaultProps = {};

    state = {
    };

    handleClickDelete = () => {
        this.props.deleteOrganisation({
            id: this.props.organisation.id
        });
    }
    
    render() {
        const {
            organisation = {},
            shouts = [],
            deleteOrganisation
        } = this.props;

        const {
            newOrganisationName
        } = this.state;
        
        return (
            <Layout container vertical>
                <h2>{ organisation.name }</h2>
                <Layout item container>
                    <h3>Current Shouts</h3>
                    { shouts.length ? (
                        <Layout item container>
                            {shouts.map(shout => (<Layout key={shout.id} item>
                                <Button>{ shout.name }</Button>
                            </Layout>)) }
                        </Layout>
                    ) : (
                        <h3>You have not yet created any shouts.</h3>
                    ) }
                </Layout>
                <Layout item container>
                    <Button onClick={this.handleClickDelete}>
                        Delete Organization
                    </Button>
                </Layout>
            </Layout>
        );
    }
}

export default connect(organisationsSelector, {
    getOrganisationsForUser: getOrganisationsForUser.REQUEST,
    createOrganisation: createOrganisation.REQUEST
})(HomePanel);

