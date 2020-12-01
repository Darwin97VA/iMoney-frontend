import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import MesaDinero from './MesaDinero'
import Inversionistas from './Inversionistas'
import Creditos from './Creditos'
import Perfiles from './Perfiles'
import Settings from './Settings'

const Routes = () => {
    return (
        <Switch>
            <Route path="/dashboard/perfiles">
                <Perfiles />
            </Route>

            <Route path="/dashboard/inversionistas">
                <Inversionistas />
            </Route>


            <Route path="/dashboard/mesa-de-dinero">
                <MesaDinero />
            </Route>


            <Route path="/dashboard/creditos">
                <Creditos />
            </Route>


            <Route path="/dashboard/configuracion">
                <Settings />
            </Route>


            <Route>
                <Redirect to="/dashboard/inversionistas" />
            </Route>
        </Switch>
    )
}

export default Routes