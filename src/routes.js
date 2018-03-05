import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import App from './components/App';
import Login from './components/Login';
import CreateCampaign from './components/CreateCampaign';
import NotFound from './components/NotFound';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route component={ Login }
                   path="/login"
                   exact/>
            <Route component={ App }
                   path="/app/home"
                   exact/>
            <Route component={ CreateCampaign }
                   path="/app/campaign/new"
                   exact/>
            <Redirect from="/" exact to="/login" />
            <Route component={ NotFound }/>
        </Switch>
    </BrowserRouter>
);