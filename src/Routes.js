import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Film from './pages/Film';
import Films from './pages/Films';
import Characters from './pages/Characters';
import People from './pages/People';
import Species from './pages/Species';
import Specie from './pages/Specie';
import Starship from './pages/Starship';
import Starships from './pages/Starships';
import Vehicles from './pages/Vehicles';
import Vehicle from './pages/Vehicle';
import Planets from './pages/Planets';
import Planet from './pages/Planet';
import NotFound from './pages/NotFound';

export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Films />
            </Route>

            <Route exact path="/films">
                <Films />
            </Route>

            <Route exact path="/film/:id">
                <Film />
            </Route>

            <Route exact path="/characters/:page">
                <Characters />
            </Route>

            <Route exact path="/people/:id">
                <People />
            </Route>

            <Route exact path="/planets/:page">
                <Planets />
            </Route>

            <Route exact path="/species/:page">
                <Species />
            </Route>

            <Route exact path="/specie/:id">
                <Specie />
            </Route>

            <Route exact path="/planet/:id">
                <Planet />
            </Route>

            <Route exact path="/starships/:page">
                <Starships />
            </Route>

            <Route exact path="/starship/:id">
                <Starship />
            </Route>

            <Route exact path="/vehicles/:page">
                <Vehicles />
            </Route>

            <Route exact path="/vehicle/:id">
                <Vehicle />
            </Route>

            <Route exact path="*">
                <NotFound />
            </Route>
        </Switch>
    );
}