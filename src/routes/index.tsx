import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from '../pages/Login';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
        </Switch>
    </BrowserRouter>
)

export default Routes;