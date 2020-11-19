import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Register from './views/Register'
import Login from './views/Login'
import Home from './views/Home'
import Email from './views/Email'
import Cuenta from './views/Cuenta'
import Test from './views/Test'

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/registro" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/email" component={Email} />
      <Route path="/cuenta" component={Cuenta} />
      <Route path="/test" component={Test} />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
