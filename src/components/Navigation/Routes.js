import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateTeams from '../CreateTeams/CreateTeams';
import TeamsBoard from '../TeamsBoard/TeamsBoard';

const Routes = () =>{
    return(
        <Switch>
            <Route path="/" exact>
                <TeamsBoard  />
            </Route>

            <Route path="/create-team">
                <CreateTeams />
            </Route>
        </Switch>
    )
}

export default Routes;