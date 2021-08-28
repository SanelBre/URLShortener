import React from 'react';
import axios from 'axios';
import { Route, Router, Switch } from "react-router-dom";
import './App.css';

import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory()

function App() {
  const [url, setURL] = React.useState("");
  const [urlShort, setURLShort] = React.useState("");

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    setURL(e.currentTarget.value);
  }

  const submitInput = async (): Promise<void> => {
    const response = await axios.post("/api/shorten", {
      url
    });
    setURL("");
    setURLShort(response.data);
  }

  const removeResponse = (): void => setURLShort("");

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact={true} path="/admin">
            <h2>URLShortener | Admin Panel</h2>
          </Route>
          <Route path="/">
            <h2>URLShortener | Home</h2>
            <input type="url" onChange={handleInput} value={url} />
            <button onClick={submitInput}>Shorten</button>
            {urlShort && (
              <span className="response">
                <p>Shortened URL:</p>
                <h5><i>{urlShort}</i></h5>
                <button onClick={removeResponse}>x</button>
              </span>
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
