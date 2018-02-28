import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/App';
import Login from './components/Login';
import CreateCampaign from './components/CreateCampaign';
import NotFound from './components/NotFound';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route component={App}
                   path="/app/home"
                   exact />
            <Route component={Login}
                   path="/login"
                   exact />
            <Route component={CreateCampaign}
                   path="/app/campaign/new"
                   exact />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);