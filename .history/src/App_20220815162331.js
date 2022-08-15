import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteScreen from "./screens/SiteScreen/SiteScreen";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={SiteScreen} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;