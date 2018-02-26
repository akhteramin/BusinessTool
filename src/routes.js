import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import Campaign from './components/Campaign';
import NotFound from './components/NotFound';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route component={Home}
                   path="/"
                   exact />
            <Route component={Campaign}
                   path="/campaign" />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);