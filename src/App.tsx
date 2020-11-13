import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Register from './views/Register'
import Login from './views/Login'
import Home from './views/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/registro" component={Register} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
