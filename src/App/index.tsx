import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from '../store/store'

import Login from '../views/Login'
import Registro from '../views/Registro'

import Perfil from '../views/Perfil'
import Email from '../views/Email'
import Cuentas from '../views/Cuentas'
import Operaciones from '../views/Operaciones'
import NotFound from '../views/NotFound'
import Perfiles from '../views/Perfiles'

import MesaDinero from '../views/MesaDinero'
import Inversiones from '../views/Inversiones'
import Financiamientos from '../views/Financiamientos'

import Protected from '../components/Protected'

import Test from '../views/Test'

import Layout from '../components/Layout'

import './global.css'

const LayoutPages = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/mesa-de-dinero" component={MesaDinero} />
        <Route path="/inversiones" component={Inversiones} />
        <Route path="/financiamientos" component={Financiamientos} />
        
        <Protected path="/perfiles"><Perfiles /></Protected>
        <Protected path="/perfil"><Perfil /></Protected>
        <Protected path="/operaciones"><Operaciones /></Protected>
        <Protected path="/cuentas"><Cuentas /></Protected>
        <Protected path="/mensajes"><br /></Protected>
        <Protected path="/configuraciones"><br /></Protected>
      
        <Route component={NotFound} />
      
      </Switch>
    </Layout>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={()=><Redirect to="/perfil" />} />

          <Route path="/login" component={Login} />
          <Route path="/registro" component={Registro} />
          <Route path="/email" component={Email} />
          <Route path="/test" component={Test} />
          
          <Route component={LayoutPages} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App