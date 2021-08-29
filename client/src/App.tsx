import React from 'react';
import { Route, Router, Redirect, Switch } from "react-router-dom";
import './App.css';

import createBrowserHistory from "history/createBrowserHistory";
import { Admin, Home } from './components';

const history = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact={true} path="/admin">
            <Admin />
          </Route>
          <Route exact={true} path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
