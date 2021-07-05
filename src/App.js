import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Platzivideo from './pages/Platzivideos';
import Login from './pages/Login';
import Register from './pages/Register';
import PageNotFound from './pages/PageNotFound';


const App = () =>(
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/platzivideo' component={Platzivideo} />
        <Route exact path='/' component={Login} />
        <Route exact path='/registrate' component={Register} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  </>
);
export default App;
