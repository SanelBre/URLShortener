import React from 'react';
import { Route, Router, Switch } from "react-router-dom";
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
