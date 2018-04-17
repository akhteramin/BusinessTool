import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import PrivateLayout from './components/PrivateLayout';
import PublicLayout from './components/PublicLayout';

import Home from './components/Home';
import Login from './components/Login';
import SettlementReconciliation from './components/SettlementReconciliation';
import BankStatements from './components/BankStatements';
import ManageCampaign from './components/ManageCampaign';
import NotFound from './components/NotFound';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route { ...rest } render={ matchProps => (
            <PrivateLayout>
                <Component { ...matchProps } />
            </PrivateLayout>
        ) }/>
    );
};

const PublicRoute = ({component: Component, ...rest}) => {
    return (
        <Route { ...rest } render={ matchProps => (
            <PublicLayout>
                <Component { ...matchProps } />
            </PublicLayout>
        ) }/>
    );
};

class Main extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/login"/>
                    </Route>
                    <PublicRoute path="/login" component={ Login }/>
                    <PrivateRoute path="/app/home" component={ Home }/>
                    <PrivateRoute path="/app/settlement-reconciliation"
                                  component={ SettlementReconciliation }/>
                    <PrivateRoute path="/app/bank-statements/:id" component={ BankStatements }/>
                    <PrivateRoute path="/app/bank-statements" component={ BankStatements }/>
                    <PrivateRoute path="/app/campaign/manage" component={ ManageCampaign }/>
                    <Route component={ NotFound }/>
                </Switch>
            </Router>
        );
    }
}

export default Main;
