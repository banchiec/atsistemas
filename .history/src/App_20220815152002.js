import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteListing from "./screens/SiteListing/SiteListing"
import Header from "./containers/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={SiteListing} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
