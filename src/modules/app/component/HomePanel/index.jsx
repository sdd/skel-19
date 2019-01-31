import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';

import { Button, Input, Layout } from 'react-seal';

import {
    createOrganisation,
    getOrganisationsForUser
} from '../../actions';
const selectOrganisation = () => {};

import { organisationsSelector } from '../../selectors/organisationsSelector';

export class HomePanel extends Component {

    static propTypes = {};
    static defaultProps = {};

    state = {
        newOrganisationName: ''
    };

    componentDidMount() {
       this.props.getOrganisationsForUser();
    }

    handleChangeNewOrganisationName = e => {
        this.setState({ newOrganisationName: e.target.value });
    }

    handleClickCreate = () => {
        this.props.createOrganisation(this.state.newOrganisationName);
    }

    render() {
        const {
            organisations = [],
            selectOrganisation
        } = this.props;

        const {
            newOrganisationName
        } = this.state;
        
        return (
            <Layout container vertical>
                <h2>My Organizations</h2>
                { organisations.length ? (
                    <Layout item container>
                        {organisations.map(org => (<Layout item>
                            <Button>{ org.name }</Button>
                        </Layout>)) }
                    </Layout>
                ) : (
                    <h2>You are not a member of any organsations.</h2>
                ) }
                <Layout item container>
                    <input
                        type="text"
                        value={newOrganisationName}
                        onChange={this.handleChangeNewOrganisationName}
                    />
                    <Button onClick={this.handleClickCreate}>
                        Create Organization
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
